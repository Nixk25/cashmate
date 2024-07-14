"use client";
import React from "react";
import Hero from "@/components/LandingPage/Hero";
import HeroDesc from "@/components/LandingPage/HeroDesc";
import Features from "@/components/LandingPage/Features";
import Banner from "@/components/LandingPage/Banner";
import Experts from "@/components/LandingPage/Experts";
import Pricing from "@/components/LandingPage/Pricing";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";

const LandingPage = ({ user }: any) => {
  const router = useRouter();

  if (user) {
    router.push("/dashboard");
  }
  return (
    <>
      <Navbar />
      <main className="relative h-[90vh]">
        <Hero />
        <HeroDesc />
        <Features />
        <Banner />
        <Experts />
        <Pricing />
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
