import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Financial guru",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Bank manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Freelancer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Random guy",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "CEO of Bank ",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const LeftSideHero = () => {
  return (
    <div className="flex-1 ">
      <div className="flex items-center flex-col sm:flex-row gap-10 mb-10">
        <div className="flex ">
          <AnimatedTooltip items={people} />
        </div>
        <motion.span
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
          viewport={{ once: true }}
          className="text-center md:text-start"
        >
          JOIN OUR COMMUNITY OF 150K+ AUTHORS AND READERS!
        </motion.span>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, y: "100%", filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <Button className="group">
            Learn More{" "}
            <FaArrowRight className="ml-1 transition-all group-hover:-rotate-45 " />
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "100%", filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <Button className="rounded-lg " variant="outline">
            JOIN OUR DISCORD
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default LeftSideHero;
