"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import GradualSpacing from "../magicui/gradual-spacing";
type Action = {
  heading: string;
};

const actions: Action[] = [
  {
    heading: "Users track income and expenses",
  },
  {
    heading: "Set budgets and financial goals",
  },
  {
    heading: "Gain insights from financial experts",
  },
];

type BenefitProps = {
  idx: number;
  heading: string;
};

const Benefit: React.FC<BenefitProps> = ({ idx, heading }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100%", filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ ease: "easeIn", delay: idx * 0.2 }}
      viewport={{ once: true }}
      className="flex items-center gap-5 p-5 bg-white border-2 border-black w-full"
    >
      <div className="flex items-center justify-center text-white rounded-full size-10 bg-primary ">
        i
      </div>
      <h3 className="text-xl font-semibold">{heading}</h3>
    </motion.div>
  );
};
const BannerContent = () => {
  return (
    <div className="relative z-5 flex flex-col gap-10 sm:flex-row">
      <div className="flex-1 text-black">
        <GradualSpacing
          text="A platform for everyone"
          className="relative z-10 leading-tight md:text-start font-playfair desc-clamp font-bold "
        />
        <motion.p
          initial={{ opacity: 0, y: "100%", filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ease: "easeIn" }}
          viewport={{ once: true }}
          className="mb-10 text-xl lg:text-start text-center"
        >
          CashMate helps individuals of all backgrounds manage their finances
          with ease.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: "100%", filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <Button className="flex items-center w-max mx-auto lg:mx-0 justify-center transition-all bg-black animate-bounce  group hover:bg-black hover:brightness-105 hover:scale-105 active:scale-95">
            Learn More{" "}
            <FaArrowRight className="ml-1 transition-all group-hover:-rotate-45" />
          </Button>
        </motion.div>
      </div>
      <div className="flex flex-col flex-1 gap-5">
        {actions.map((action, index) => (
          <Benefit key={index} idx={index} heading={action.heading} />
        ))}
      </div>
    </div>
  );
};

export default BannerContent;
