import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

const MagneticButton = ({
  children,
  className = "",
  onClick,
  strength = 0.3
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    setPosition({
      x: distanceX * strength,
      y: distanceY * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 3,
          duration: 1.5,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        }}
      />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default MagneticButton;
