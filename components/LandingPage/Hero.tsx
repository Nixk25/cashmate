import React from "react";
import RadialGradient from "@/components/ui/radial-gradient";
import { motion } from "framer-motion";

const Hero = () => {
  const mainHeadling = "Take Control of Your Finances with CashMate";
  return (
    <section
      id="hero"
      className="container flex flex-col items-center justify-center h-full pb-10 text-center border-b border-slate-700"
    >
      <h1 className="relative z-10 mt-20 font-medium leading-none text-center clamp font-playfair flex flex-wrap justify-center gap-3">
        {mainHeadling.split(" ").map((char: string, index: number) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </h1>
      <motion.p
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, ease: "easeInOut" }}
        className="relative z-10 max-w-3xl sm-clamp"
      >
        Manage your income and expenses easily and securely, without sharing
        your bank account details.
      </motion.p>

      <RadialGradient origin="top left" size={700} className="z-0" />
      <RadialGradient origin="top right" size={700} className="z-0" />
      <RadialGradient origin="top" size={700} className="z-0" />
    </section>
  );
};

export default Hero;
