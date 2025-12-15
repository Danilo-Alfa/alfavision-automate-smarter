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
    primary: "rgba(0, 212, 255, 0.25)",
    accent: "rgba(168, 85, 247, 0.25)",
    mixed: "linear-gradient(135deg, rgba(0, 212, 255, 0.25), rgba(168, 85, 247, 0.25))",
  };

  // Cap blur for performance
  const cappedBlur = Math.min(blur, 80);

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: colorMap[color] || color,
        filter: `blur(${cappedBlur}px)`,
        willChange: "opacity",
      }}
      animate={{
        opacity: [0.2, 0.35, 0.2],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default GlowingOrb;
