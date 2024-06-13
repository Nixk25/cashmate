import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../../ui/button";
import { FaStar, FaHandsClapping } from "react-icons/fa6";

const RightSideHero = () => {
  return (
    <div className="flex flex-1 flex-col md:flex-row gap-10">
      <RatingCard />

      <div className="flex flex-col justify-between flex-1 p-5 rounded-lg bg-primary/40">
        <div className="flex justify-end w-full">
          <Button variant="outline" className="group w-max ">
            Get started{" "}
            <FaArrowRight className="ml-1 transition-all group-hover:-rotate-45 " />
          </Button>
        </div>
        <p className="mt-10 text-2xl font-bold">
          Track. Save. <br /> Prosper.
        </p>
      </div>
    </div>
  );
};

const RatingCard = () => {
  return (
    <div className="flex-1 rounded-lg p-7 bg-primary/10">
      <div className="flex gap-5 ">
        <div className="flex items-center gap-5 ">
          <span className="text-4xl font-bold">4.97</span>
          <div>
            <div className="flex ">
              <FaStar fill="gold" size={20} />
              <FaStar fill="gold" size={20} />
              <FaStar fill="gold" size={20} />
              <FaStar fill="gold" size={20} />
              <FaStar fill="gold" size={20} />
            </div>
            <span className="text-xs font-semibold ">Google reviews</span>
          </div>
        </div>
        <div className="flex items-center justify-center bg-black rounded-full size-10">
          <FaHandsClapping fill="white" />
        </div>
      </div>
      <p className="mt-5">
        "It's not just about passive consumption; it's about actively engaging
        with others who share my passion for learning."
      </p>
    </div>
  );
};

export default RightSideHero;
