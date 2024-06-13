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
    <section className="relative mb-[100px]  mt-[300px] ">
      <div className="container">
        <h2 className="pt-10  bg-gray-950 pb-[200px] absolute w-full z-0 left-0 -top-[200px] tracking-tighter text-center text-white clamp font-playfair">
          Find your perfect plan
        </h2>
        <div className=" relative z-10  flex items-center justify-center   gap-10  rounded-lg w-full">
          <div className=" flex  gap-10 rounded-lg lg:flex-row justify-center flex-col">
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
      </div>
    </section>
  );
};

export default Pricing;
