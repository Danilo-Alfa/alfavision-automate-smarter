import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

const TextReveal = ({ children, className = "", delay = 0 }: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = children.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ perspective: 1000 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          variants={wordVariants}
          style={{ transformStyle: "preserve-3d" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
