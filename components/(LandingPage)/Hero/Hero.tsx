import React from "react";
import RadialGradient from "@/components/ui/radial-gradient";
const Hero = () => {
  return (
    <section
      id="hero"
      className="container flex flex-col items-center justify-center h-full pb-10 text-center border-b border-slate-700"
    >
      <h1 className="relative z-10 leading-tight text-center clamp  font-playfair text-3xl mt-20 font-medium   ">
        Take Control of Your Finances with CashMate
      </h1>
      <p className="relative z-10 sm-clamp max-w-3xl ">
        Manage your income and expenses easily and securely, without sharing
        your bank account details.
      </p>
      <RadialGradient origin="top left" size={700} className="z-0" />
      <RadialGradient origin="top right" size={700} className="z-0" />
      <RadialGradient origin="top" size={700} className="z-0" />
    </section>
  );
};

export default Hero;
