import React from "react";
import GradualSpacing from "../magicui/gradual-spacing";

const StepHeading = ({ headline }: { headline: string }) => {
  return (
    <GradualSpacing
      text={headline}
      className="mb-5 text-center  font-playfair clamp"
    />
  );
};

export default StepHeading;
