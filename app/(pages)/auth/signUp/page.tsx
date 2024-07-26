import React from "react";
import SignUpForm from "@/components/Auth/SignUpForm";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SignUp | CashMate",
  description: "SignUp into CashMate",
};
const SignUp = () => {
  return <SignUpForm />;
};

export default SignUp;
