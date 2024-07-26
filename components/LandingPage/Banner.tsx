import React from "react";
import BannerContent from "./BannerContent";
import Particles from "../magicui/particles";

const Banner: React.FC = () => {
  return (
    <section className="relative mt-[150px] md:p-20 p-5 overflow-hidden bg-primary ">
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={50}
        color="#000"
      />

      <BannerContent />
    </section>
  );
};

export default Banner;
