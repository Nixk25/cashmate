import React from "react";
import LeftSideHero from "../LeftSideHero/LeftSideHero";
import RightSideHero from "../RightSideHero/RightSideHero";

export function HeroDesc() {
  return (
    <section className="my-10">
      <div className="container">
        <div className="flex gap-20 ">
          <LeftSideHero />
          <RightSideHero />
        </div>
      </div>
    </section>
  );
}
