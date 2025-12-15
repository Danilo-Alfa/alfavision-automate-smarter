import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CursorFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const lastCheckRef = useRef(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // Hide on mobile/touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);

      // Throttle pointer check to every 150ms
      const now = Date.now();
      if (now - lastCheckRef.current > 150) {
        lastCheckRef.current = now;
        const target = e.target as HTMLElement;
        if (target) {
          const isClickable =
            target.tagName === "A" ||
            target.tagName === "BUTTON" ||
            target.closest("a") ||
            target.closest("button") ||
            window.getComputedStyle(target).cursor === "pointer";
          setIsPointer(!!isClickable);
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          animate={{
            width: isPointer ? 48 : 12,
            height: isPointer ? 48 : 12,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50"
          animate={{
            width: isPointer ? 64 : 40,
            height: isPointer ? 64 : 40,
            opacity: isVisible ? 0.5 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
          }}
        />
      </motion.div>
    </>
  );
};

export default CursorFollower;
