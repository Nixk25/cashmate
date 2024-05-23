"use client";
import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaCalendar, FaClock, FaEye, FaChartSimple } from "react-icons/fa6";
import Plan from "../../../public/Plan.png";
import Security from "../../../public/Security.png";

import Image from "next/image";
export const Features = () => {
  return (
    <div className="min-h-screen px-4 py-12 ">
      <Logo />
      <motion.div
        initial="initial"
        whileInView="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        viewport={{ once: true }}
        className="grid grid-cols-12 gap-4 mx-auto grid-flow-dense"
      >
        <Visualization />
        <Savings />
        <FinancialPlanning />
        <History />
        <DataSec />
        <Goals />
      </motion.div>
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge("col-span-4 rounded-lg  bg-primary/50 p-6", className)}
      {...rest}
    />
  );
};

const Visualization = () => (
  <Block className="relative flex flex-col justify-between col-span-12 row-span-4 overflow-hidden md:col-span-4">
    <div>
      <h3 className="text-4xl font-medium leading-tight font-playfair">
        Visualization
      </h3>
      <p>
        Graphs provide a visual overview of your financial situation, making it
        easier to understand trends and patterns in income and expenses.
      </p>
    </div>
    <Button className="flex items-center justify-center transition-all bg-black w-max group hover:bg-black hover:brightness-105 hover:scale-105 active:scale-95">
      Learn More{" "}
      <FaArrowRight className="ml-1 transition-all group-hover:-rotate-45" />
    </Button>
    <FaChartSimple
      fill="white"
      className="absolute z-0 -right-2 -bottom-10"
      size={200}
    />
  </Block>
);

const Savings = () => (
  <>
    <Block className="relative flex flex-col justify-between col-span-6 row-span-2 overflow-hidden bg-primary/20 md:col-span-4">
      <h3 className="text-4xl font-medium leading-tigh font-playfair">
        Identifying Savings
      </h3>
      <p className="mb-5">
        Analyzing expenses helps identify areas where you can
      </p>
      <Button className="flex items-center justify-center transition-all bg-black w-max group hover:bg-black hover:brightness-105 hover:scale-105 active:scale-95">
        Learn More{" "}
        <FaArrowRight className="ml-1 transition-all group-hover:-rotate-45" />
      </Button>
      <FaEye
        fill="black"
        className="absolute  z-0 -right-10 -bottom-[100px] opacity-30"
        size={200}
      />
    </Block>
  </>
);

const FinancialPlanning = () => (
  <Block className="relative flex flex-col justify-between col-span-4 row-span-4 overflow-hidden leading-snug">
    <div>
      <h3 className="mb-3 text-4xl font-medium leading-tigh font-playfair">
        Better Financial Planning
      </h3>
      <p>
        Detailed statistics and graphs facilitate more effective budgeting and
        adjusting spending according to your financial situation.
      </p>
    </div>
    <Button className="flex items-center justify-center transition-all bg-black w-max group hover:bg-black hover:brightness-105 hover:scale-105 active:scale-95">
      Learn More{" "}
      <FaArrowRight className="ml-1 transition-all group-hover:-rotate-45" />
    </Button>
    <FaCalendar
      fill="white"
      className="absolute z-0 -right-2 -bottom-20 "
      size={200}
    />
  </Block>
);

const History = () => (
  <Block className="relative flex flex-col justify-between col-span-6 row-span-2 overflow-hidden bg-primary/20 md:col-span-4">
    <h3 className="text-4xl font-medium leading-tigh font-playfair">History</h3>
    <p className="mb-5">Users can easily track financial history.</p>
    <Button className="flex items-center justify-center transition-all bg-black w-max group hover:bg-black hover:brightness-105 hover:scale-105 active:scale-95">
      Learn More{" "}
      <FaArrowRight className="ml-1 transition-all group-hover:-rotate-45" />
    </Button>
    <FaClock
      fill="black"
      className="absolute  z-0 -right-10 -bottom-[100px] opacity-30"
      size={200}
    />
  </Block>
);

const DataSec = () => (
  <Block className="relative flex flex-col justify-between col-span-12 overflow-hidden md:col-span-7 ">
    <h3 className="text-4xl font-medium leading-tigh font-playfair">
      Data Security and Encryption
    </h3>
    <p>
      All data is encrypted, ensuring that your financial information is secure
      and protected from unauthorized access.
    </p>
    <Button className="flex items-center justify-center transition-all bg-black w-max group hover:bg-black hover:brightness-105 hover:scale-105 active:scale-95">
      Learn More{" "}
      <FaArrowRight className="ml-1 transition-all group-hover:-rotate-45" />
    </Button>

    <Image
      src={Security}
      width={200}
      height={200}
      alt="Chart icon "
      className="absolute z-0 -right-10 -bottom-24 "
    />
  </Block>
);
const Goals = () => (
  <Block className="relative flex flex-col justify-between col-span-12 overflow-hidden md:col-span-5 ">
    <div className="relative z-10 mb-5">
      <h3 className="text-4xl font-medium leading-tigh font-playfair">
        Tracking Financial Goals
      </h3>
      <p>
        The app can help set and monitor specific financial goals, such as
        saving for a vacation or paying off debt.
      </p>
    </div>
    <Button className="flex items-center justify-center transition-all bg-black w-max group hover:bg-black hover:brightness-105 hover:scale-105 active:scale-95">
      Learn More{" "}
      <FaArrowRight className="ml-1 transition-all group-hover:-rotate-45" />
    </Button>
    <Image
      src={Plan}
      width={200}
      height={200}
      alt="Chart icon "
      className="absolute z-0 -right-10 -bottom-[100px] "
    />
  </Block>
);

const Logo = () => {
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};
