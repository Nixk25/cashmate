import React from "react";
import RadialGradient from "@/components/ui/radial-gradient";
import { motion } from "framer-motion";
import GradualSpacing from "../magicui/gradual-spacing";

const Hero = () => {
  return (
    <section
      id="hero"
      className="container flex flex-col items-center justify-center h-full pb-10 text-center border-b border-slate-700"
    >
      <GradualSpacing
        className="relative z-10 leading-tight font-playfair clamp font-bold "
        text="Take Control of Your Finances with CashMate"
      />
      <motion.p
        initial={{ opacity: 0, y: "100%", filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 1, ease: "easeIn" }}
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
