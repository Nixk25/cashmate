import React from "react";
import Hero from "@/components/(LandingPage)/Hero/Hero";
import { HeroDesc } from "@/components/(LandingPage)/HeroDesc/HeroDesc";
import { Features } from "@/components/(LandingPage)/Features/Features";
import Banner from "@/components/(LandingPage)/Banner/Banner";
import Experts from "@/components/(LandingPage)/Experts/Experts";
export default function Home() {
  return (
    <main className="relative h-[90vh]">
      <Hero />
      <HeroDesc />
      <Features />
      <Banner />
      <Experts />
    </main>
  );
}
