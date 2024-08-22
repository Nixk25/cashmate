import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const AnimateStep = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -200 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimateStep;
