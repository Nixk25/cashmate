import React from "react";
import Hero from "@/components/(LandingPage)/Hero";
import { HeroDesc } from "@/components/(LandingPage)/HeroDesc";
import { Features } from "@/components/(LandingPage)/Features";
import Banner from "@/components/(LandingPage)/Banner";
import Experts from "@/components/(LandingPage)/Experts";
import Pricing from "@/components/(LandingPage)/Pricing";
import GetStarted from "@/components/(LandingPage)/GetStarted";
import Footer from "@/components/Footer/Footer";
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
      <Footer />
    </main>
  );
}
