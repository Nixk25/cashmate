"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  spaceSize?: string;
  framerProps?: Variants;
  className?: string;
  delay?: number;
}

export default function GradualSpacing({
  text,
  duration = 0.1,
  spaceSize = "w-5",
  framerProps = {
    hidden: { opacity: 0, x: -30, filter: "blur(20px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  className,
  delay,
}: GradualSpacingProps) {
  return (
    <div>
      <span className="sr-only">{text}</span>
      <AnimatePresence mode="wait">
        <motion.span
          initial="hidden"
          whileInView="visible"
          transition={{ duration, staggerChildren: 0.05 }}
          viewport={{ once: true }}
          aria-hidden
        >
          {text.split(" ").map((word, i) => (
            <motion.span
              transition={{ delay: delay }}
              key={i}
              className="inline-block"
            >
              {word.split("").map((char, i) => (
                <motion.span
                  key={i}
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
      </AnimatePresence>
    </div>
  );
}
