import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AuroraTextProps {
  children: ReactNode;
  className?: string;
}

const AuroraText = ({ children, className = "" }: AuroraTextProps) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {/* Base text */}
      <span className="relative z-10">{children}</span>

      {/* Aurora gradient overlay */}
      <motion.span
        className="absolute inset-0 bg-clip-text text-transparent z-20"
        style={{
          backgroundImage: "linear-gradient(90deg, #00d4ff, #a855f7, #00d4ff, #a855f7, #00d4ff)",
          backgroundSize: "300% 100%",
          WebkitBackgroundClip: "text",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default AuroraText;
