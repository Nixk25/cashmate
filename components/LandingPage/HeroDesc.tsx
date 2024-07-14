import React from "react";
import LeftSideHero from "./LeftSideHero";
import RightSideHero from "./RightSideHero";

const HeroDesc = () => {
  return (
    <section className="my-10">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row ">
          <LeftSideHero />
          <RightSideHero />
        </div>
      </div>
    </section>
  );
};

export default HeroDesc;
