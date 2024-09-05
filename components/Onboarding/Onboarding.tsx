"use client";
import React, { useState } from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import MultiStepForm from "./MultiStepForm";
import ShowTextOnboarding from "../ui/showTextOnboarding";
interface OnboardingProps {
  //@ts-ignore
  user: KindeUser | null;
}

const Onboarding: React.FC<OnboardingProps> = ({ user }) => {
  const [showForm, setShowForm] = useState<boolean>(true);

  /* useEffect(() => {
    setTimeout(() => {
      setShowForm(true);
    }, 12000);
  }, []); */
  return (
    <div>
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(255, 255, 255)"
        gradientBackgroundEnd="rgb(255, 255, 255)"
        firstColor="109, 158, 232"
        secondColor="164, 194, 247"
        thirdColor="139, 186, 239"
        fourthColor="80, 119, 200"
        fifthColor="48, 91, 164"
        pointerColor="109, 158, 232"
        interactive={false}
      >
        {showForm ? (
          <MultiStepForm user={user} />
        ) : (
          <div className="absolute inset-0 z-50 flex items-center justify-center px-4 text-3xl font-bold text-center text-white pointer-events-none gap-x-10 md:text-4xl lg:text-9xl">
            <ShowTextOnboarding
              firstText="Welcome to CashMate"
              secondText="Let's explore together"
              spaceSize="w-7"
              duration={1}
              className="font-bold leading-tight text-transparent font-playfair bg-clip-text drop-shadow-2xl bg-gradient-to-b from-black to-gray-500"
            />
          </div>
        )}
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Onboarding;
