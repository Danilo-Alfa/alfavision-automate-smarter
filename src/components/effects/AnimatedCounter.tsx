import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedCounter = ({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString("pt-BR")
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, spring, hasAnimated]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
