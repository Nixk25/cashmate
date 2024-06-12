import React from "react";
import PricingCard from "@/components/ui/PricingCard";
export type AdvantageType = {
  advantage: string;
};

const freeAdvantages: AdvantageType[] = [
  { advantage: "Up to 1 user" },
  { advantage: "Basic support" },
  { advantage: "Access to core features" },
];

const paidAdvantages: AdvantageType[] = [
  { advantage: "Unlimited users" },
  { advantage: "System analytics" },
  { advantage: "30-day free trial" },
  { advantage: "Chat support 24/7" },
  { advantage: "Advanced support services" },
];
const Pricing = () => {
  return (
    <section className="relative pb-[200px] mt-20 bg-gray-950">
      <div className="container">
        <h2 className="pt-10 mb-10 tracking-tighter text-center text-white clamp font-playfair">
          Find your perfect plan
        </h2>
        <div className="absolute -bottom-[380px] left-1/2 -translate-x-1/2 flex items-center justify-center  gap-10 bg-white px-20 py-10 rounded-lg">
          <PricingCard
            subheading="Perfect for personal use"
            price="Free"
            category="Starter"
            advantages={freeAdvantages}
            color="white"
          />
          <PricingCard
            subheading="Perfect for team"
            price="$12/month"
            category="Professional"
            advantages={paidAdvantages}
            color="primary"
            textColor="white"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
