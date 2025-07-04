
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  inView?: boolean;
  className?: string;
}

export function BlurFade({
  children,
  delay = 0,
  duration = 0.4,
  inView = false,
  className,
}: BlurFadeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if ((inView && isInView) || (!inView && !hasAnimated)) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [controls, inView, isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          filter: "blur(6px)",
          y: 20,
        },
        visible: {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
        },
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
