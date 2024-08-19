"use client";
import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { motion } from "framer-motion";
import GradualSpacing from "../magicui/gradual-spacing";
import { PROS } from "@/app/lib/constants";
const RightSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(5px)", x: "100%" }}
      animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
      transition={{ ease: "easeIn", duration: 0.3 }}
      className=" flex-col hidden lg:flex justify-center flex-1 p-8 bg-primary relative"
    >
      <div className="bg-primary h-full w-[50px] absolute top-0 xl:w-[100px] -left-5 xl:-left-10 -skew-x-2" />
      <div className="flex items-center  gap-3 mb-10">
        <div className="relative">
          <div className="rounded-full bg-white p-3 size-10" />
          <FaRegLightbulb
            color="black"
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            size={30}
          />
        </div>

        <GradualSpacing
          text="Ready to take control of your finances?"
          spaceSize="w-2"
          className="text-3xl font-bold"
        />
      </div>
      <ul className="space-y-4 list-none ml-2">
        {PROS.map(({ text }, i) => (
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeIn", delay: (i + 1) * 0.2 }}
            key={i}
            className="flex  items-center gap-3"
          >
            <SiTicktick color="white" size={16} />
            <span className="text-sm">{text}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default RightSide;
