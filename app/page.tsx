import React from "react";
import { HeroDesc } from "@/components/(LandingPage)/HeroDesc/HeroDesc";
import RadialGradient from "@/components/ui/radial-gradient";
import { Features } from "@/components/(LandingPage)/Features/Features";
import Banner from "@/components/(LandingPage)/Banner/Banner";
export default function Home() {
  return (
    <main className="relative  h-[90vh]">
      <div className="container flex flex-col items-center justify-center h-full pb-10 text-center border-b border-slate-700">
        <h1 className="relative z-10 leading-tight text-center clamp md:leading-tight font-playfair">
          Take Control of Your Finances with CashMate
        </h1>
        <p className="relative z-10 sm-clamp ">
          Manage your income and expenses easily and securely, without sharing
          your bank account details.
        </p>
        <RadialGradient origin="top left" size={700} className="z-0" />
        <RadialGradient origin="top right" size={700} className="z-0" />
        <RadialGradient origin="top" size={700} className="z-0" />
      </div>
      <HeroDesc />
      <Features />
      <Banner />
    </main>
  );
}
