"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import GradualSpacing from "../magicui/gradual-spacing";
import MultiStepForm from "./MultiStepForm";
import ShowTextOnboarding from "../ui/showTextOnboarding";
interface OnboardingProps {
  user: KindeUser | null;
}

const Onboarding: React.FC<OnboardingProps> = ({ user }) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowForm(true);
    }, 12000);
  }, []);
  return (
    <div>
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(139, 186, 239)"
        gradientBackgroundEnd="rgb(48, 91, 164)"
        firstColor="109, 158, 232"
        secondColor="164, 194, 247"
        thirdColor="139, 186, 239"
        fourthColor="80, 119, 200"
        fifthColor="48, 91, 164"
        pointerColor="109, 158, 232"
        interactive={false}
      >
        {showForm ? (
          <MultiStepForm />
        ) : (
          <motion.div className="absolute z-50 gap-x-10  inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-9xl">
            <ShowTextOnboarding
              firstText="Welcome to CashMate"
              secondText="Let's explore together"
              spaceSize="w-7"
              duration={1}
              className=" leading-tight font-playfair  font-bold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 "
            />
          </motion.div>
        )}
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Onboarding;
