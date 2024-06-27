import React from "react";
import LeftSideHero from "./LeftSideHero";
import RightSideHero from "./RightSideHero";

export function HeroDesc() {
  return (
    <section className="my-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10 ">
          <LeftSideHero />
          <RightSideHero />
        </div>
      </div>
    </section>
  );
}
