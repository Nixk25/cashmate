import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { PEOPLE } from "@/app/lib/constants";

const LeftSideHero = () => {
  return (
    <div className="flex-1 ">
      <div className="flex flex-col items-center gap-10 mb-10 sm:flex-row">
        <div className="flex ">
          <AnimatedTooltip items={PEOPLE} />
        </div>
        <motion.span
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          //@ts-ignore
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
          <Button className="w-full group">
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
          <Button className="w-full rounded-lg" variant="outline">
            JOIN OUR DISCORD
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default LeftSideHero;
