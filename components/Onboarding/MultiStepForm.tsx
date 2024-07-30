"use client";
import React from "react";
import { motion } from "framer-motion";
const MultiStepForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black w-full h-screen"
    >
      MultiStepForm
    </motion.div>
  );
};

export default MultiStepForm;
