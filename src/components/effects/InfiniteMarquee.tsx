import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

const InfiniteMarquee = ({
  children,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: InfiniteMarqueeProps) => {
  const baseVelocity = direction === "left" ? -speed : speed;

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className={`flex gap-8 ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 1000 / speed,
            ease: "linear",
          },
        }}
        style={{
          width: "fit-content",
        }}
      >
        {/* Original items */}
        <div className="flex gap-8 items-center shrink-0">
          {children}
        </div>
        {/* Duplicated items for seamless loop */}
        <div className="flex gap-8 items-center shrink-0">
          {children}
        </div>
        {/* Triple for safety */}
        <div className="flex gap-8 items-center shrink-0">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;
