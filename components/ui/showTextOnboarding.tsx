"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  firstText: string;
  secondText?: string;
  duration?: number;
  spaceSize?: string;
  framerProps?: Variants;
  className?: string;
}

export default function ShowTextOnboarding({
  firstText,
  secondText,
  duration = 1,
  spaceSize = "w-7",
  framerProps = {
    hidden: { opacity: 0, x: -30, filter: "blur(20px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(20px)", x: 30 },
  },
  className,
}: GradualSpacingProps) {
  const [isFirstText, setIsFirstText] = useState(true);
  const [isSecondText, setIsSecondText] = useState(true);

  useEffect(() => {
    const firstTextTimeout = setTimeout(() => {
      setIsFirstText(false);
    }, 5000);

    const secondTextTimeout = setTimeout(() => {
      setIsSecondText(false);
    }, 10000);

    return () => {
      clearTimeout(firstTextTimeout);
      clearTimeout(secondTextTimeout);
    };
  }, []);

  const currentText = isFirstText
    ? firstText
    : isSecondText
    ? secondText || ""
    : "";

  return (
    <div className="text-center">
      <span className="sr-only">{currentText}</span>
      <AnimatePresence mode="wait">
        {currentText && (
          <motion.span
            key={isFirstText ? "firstText" : "secondText"}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration, staggerChildren: 0.05 }}
            variants={framerProps}
            aria-hidden
            className="inline-block"
          >
            {currentText.split(" ").map((word, i) => (
              <motion.span key={i} className="inline-block">
                {word.split("").map((char, j) => (
                  <motion.span
                    key={j}
                    variants={framerProps}
                    className={cn("drop-shadow-sm inline-block", className)}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className={`inline-block ${spaceSize}`}>&nbsp;</span>
              </motion.span>
            ))}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
