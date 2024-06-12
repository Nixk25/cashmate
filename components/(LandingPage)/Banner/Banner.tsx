import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import Star from "../../../public/star.png";
import Image from "next/image";

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
  heading: string;
};

const Benefit: React.FC<BenefitProps> = ({ heading }) => {
  return (
    <div className="flex items-center gap-5 p-5 bg-white border-2 border-black">
      <div className="flex items-center justify-center text-white rounded-full size-10 bg-primary">
        i
      </div>
      <h3 className="text-xl font-semibold">{heading}</h3>
    </div>
  );
};

const Banner: React.FC = () => {
  return (
    <section className="relative mt-[150px] p-20 overflow-hidden bg-primary/50">
      <div className="container flex flex-col gap-10 sm:flex-row">
        <div className="flex-1">
          <h2 className="mb-5 text-5xl font-bold font-playfair">
            A platform for everyone
          </h2>
          <p className="mb-10 text-xl">
            CashMate helps individuals of all backgrounds manage their finances
            with ease.
          </p>
          <Button className="flex items-center justify-center transition-all bg-black w-max group hover:bg-black hover:brightness-105 hover:scale-105 active:scale-95">
            Learn More{" "}
            <FaArrowRight className="ml-1 transition-all group-hover:-rotate-45" />
          </Button>
        </div>
        <div className="flex flex-col flex-1 gap-5">
          {actions.map((action, index) => (
            <Benefit key={index} heading={action.heading} />
          ))}
        </div>
      </div>
      <Image
        src={Star}
        alt="star icon for banner"
        className="absolute size-[200px] -bottom-10 left-[300px]"
      />
      <Image
        src={Star}
        alt="star icon for banner"
        className="absolute size-[200px] z-[-1] top-5 right-0"
      />
      <Image
        src={Star}
        alt="star icon for banner"
        className="absolute size-[200px] z-[-1] top-10 left-[200px] opacity-30"
      />
      <Image
        src={Star}
        alt="star icon for banner"
        className="absolute size-[200px] z-[-1] top-1/2 left-1/2 -translate-y-1/2 "
      />
    </section>
  );
};

export default Banner;
