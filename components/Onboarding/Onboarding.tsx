"use client";
import React, { useState, useEffect } from "react";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import MultiStepForm from "./MultiStepForm";
import ShowTextOnboarding from "../ui/showTextOnboarding";
import { NextUIProvider } from "@nextui-org/react";

interface OnboardingProps {
  user: KindeUser<any> | null;
}

const Onboarding: React.FC<OnboardingProps> = ({ user }) => {
  const [showForm, setShowForm] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowForm(true);
    }, 12000);
  }, []);
  return (
    <NextUIProvider locale="en-GB">
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
    </NextUIProvider>
  );
};

export default Onboarding;
