import React from "react";
import PricingCard from "@/components/ui/PricingCard";
import GradualSpacing from "../magicui/gradual-spacing";
import { motion } from "framer-motion";
import { PAIDADVANTAGES, FREEADVANTAGES } from "@/app/lib/constants";

const Pricing = () => {
  return (
    <section id="pricing" className="relative mb-[100px]  mt-[300px] ">
      <div className="container">
        <div className="pt-10  bg-gray-950 pb-[200px] absolute flex justify-center w-full z-0 left-0 -top-[200px] tracking-tighter text-center text-white clamp font-playfair">
          <GradualSpacing text="Find your perfect plan" />
        </div>
        <div className="relative z-10 flex items-center justify-center w-full gap-10 rounded-lg ">
          <motion.div
            initial={{ opacity: 0, y: 100, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ease: "easeIn" }}
            viewport={{ once: true }}
            //@ts-ignore
            className="flex flex-col justify-center gap-10 rounded-lg  lg:flex-row"
          >
            <PricingCard
              subheading="Perfect for personal use"
              price="Free"
              category="Starter"
              advantages={FREEADVANTAGES}
              color="white"
            />
            <PricingCard
              subheading="Perfect for team"
              price="$12/month"
              category="Professional"
              advantages={PAIDADVANTAGES}
              color="primary"
              textColor="white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
