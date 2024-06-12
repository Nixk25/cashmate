import React from "react";
import Hero from "@/components/(LandingPage)/Hero/Hero";
import { HeroDesc } from "@/components/(LandingPage)/HeroDesc/HeroDesc";
import { Features } from "@/components/(LandingPage)/Features/Features";
import Banner from "@/components/(LandingPage)/Banner/Banner";
import Experts from "@/components/(LandingPage)/Experts/Experts";
import Pricing from "@/components/(LandingPage)/Pricing/Pricing";
import GetStarted from "@/components/(LandingPage)/GetStarted/GetStarted";
export default function Home() {
  return (
    <main className="relative h-[90vh]">
      <Hero />
      <HeroDesc />
      <Features />
      <Banner />
      <Experts />
      <Pricing />
      <GetStarted />
    </main>
  );
}
