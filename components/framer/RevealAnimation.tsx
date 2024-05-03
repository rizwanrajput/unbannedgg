"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimate,
  animate,
  useAnimation,
  useInView,
} from "framer-motion";

const RevealAnimation = ({
  children,
  delay = 0,
  screenReveal = false,
  className
}: any) => {
  const controls = useAnimation();

  const screenRef = useRef(null);

  const inScreenView = useInView(screenRef, {
    once: true,
    margin: "-50px 0px -100px 0px",
  });

  useEffect(() => {
    // fire animation each time it becomes true
    if (inScreenView) {
      controls.start("visible");
    } else {
      // controls.start("hidden");
    }
  }, [inScreenView]);

  return (
    <motion.div
      className={className}
      ref={screenRef}
      animate={screenReveal ? controls : "visible"}
      initial="hidden"
      transition={{
        duration: 0.5,
        delay: delay,
        type: "spring",
        damping: 12,
        bounce: 0.1,
        mass: 2,
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealAnimation;
