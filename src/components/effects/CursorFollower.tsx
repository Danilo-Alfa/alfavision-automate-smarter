import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const checkForPointer = () => {
      const hoveredElement = document.elementFromPoint(mousePosition.x, mousePosition.y);
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        setIsPointer(
          computedStyle.cursor === "pointer" ||
          hoveredElement.tagName === "A" ||
          hoveredElement.tagName === "BUTTON"
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    const intervalId = setInterval(checkForPointer, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(intervalId);
    };
  }, [mousePosition.x, mousePosition.y]);

  useEffect(() => {
    cursorX.set(mousePosition.x);
    cursorY.set(mousePosition.y);
  }, [mousePosition, cursorX, cursorY]);

  // Hide on mobile/touch devices
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
