import { motion } from "framer-motion";

interface GlowingOrbProps {
  size?: number;
  color?: string;
  blur?: number;
  className?: string;
}

const GlowingOrb = ({
  size = 400,
  color = "primary",
  blur = 100,
  className = ""
}: GlowingOrbProps) => {
  const colorMap: Record<string, string> = {
    primary: "rgba(0, 212, 255, 0.3)",
    accent: "rgba(168, 85, 247, 0.3)",
    mixed: "linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(168, 85, 247, 0.3))",
  };

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: colorMap[color] || color,
        filter: `blur(${blur}px)`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default GlowingOrb;
