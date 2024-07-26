"use client";
import React from "react";
import Link from "next/link";
import { IoReturnUpBack } from "react-icons/io5";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function SignUpForm() {
  return (
    <div className="flex h-screen">
      <Link
        href="/"
        className="flex justify-center items-center gap-3 absolute top-5 left-5 hover:text-primary transition-all duration-150"
      >
        <IoReturnUpBack />
        <span>Go back</span>
      </Link>
      <LeftSide />
      <RightSide />
    </div>
  );
}
