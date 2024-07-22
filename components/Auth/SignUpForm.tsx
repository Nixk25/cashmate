"use client";
import React, { useState } from "react";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle, FaApple, FaRegLightbulb } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { IoReturnUpBack } from "react-icons/io5";

export default function SignUpForm() {
  const pros = [
    {
      text: "Comprehensive financial tools: We offer a wide range of tools for effective financial management.",
    },
    {
      text: "Personalized financial advice: Get tailored tips and advice to help you plan and save better.",
    },
    {
      text: "Expense and income analysis: Track your expenses and income in real-time ",
    },

    {
      text: "Security first: Your data is protected with state-of-the-art security standards.",
    },
  ];

  const [email, setEmail] = useState<string>("");
  return (
    <div className="flex h-screen">
      <Link
        href="/"
        className="flex justify-center items-center gap-3 absolute top-5 left-5 hover:text-primary transition-all duration-150"
      >
        <IoReturnUpBack />
        <span>Go back</span>
      </Link>
      <div className="flex items-center justify-center py-12 flex-1">
        <div className=" flex flex-col gap-6 ">
          <div className=" gap-2 text-center">
            <h1 className="text-3xl font-bold">Welcome to CashMate 👋</h1>
            <p className="text-balance text-sm text-muted-foreground">
              Enter your email below to create to your account
            </p>
          </div>
          <div className=" gap-4">
            <div className=" gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="youremail@example.com"
                required
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className="mt-3"
              />
            </div>

            <div className="flex flex-col space-y-5 mt-5">
              <RegisterLink
                authUrlParams={{
                  connection_id:
                    process.env.NEXT_PUBLIC_EMAIL_CONNECTION_ID || "",
                  login_hint: email,
                }}
              >
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </RegisterLink>
              <div className="relative">
                <div className="w-full bg-gray-600 h-[2px] " />
                <span className="bg-white absolute left-1/2 top-1/2 text-xs -translate-x-1/2 p-2 -translate-y-1/2">
                  Or
                </span>
              </div>
              <LoginLink
                authUrlParams={{
                  connection_id:
                    process.env.NEXT_PUBLIC_GOOGLE_CONNECTION_ID || "",
                }}
              >
                <Button
                  variant="outline"
                  className="w-full flex justify-center items-center"
                >
                  <FaGoogle size={20} className="mr-3" />
                  <span>Continue with Google</span>
                </Button>
              </LoginLink>
              <LoginLink
                authUrlParams={{
                  connection_id:
                    process.env.NEXT_PUBLIC_APPLE_CONNECTION_ID || "",
                }}
              >
                <Button
                  variant="outline"
                  className="w-full flex justify-center items-center"
                >
                  <FaApple size={20} className="mr-3" />
                  <span>Continue with Apple</span>
                </Button>
              </LoginLink>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            Have an account?{" "}
            <Link href="/auth/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center flex-1 p-8 bg-primary relative">
        <div className="bg-primary h-full w-[100px] absolute top-0 -left-20 -skew-x-2" />
        <div className="flex items-center  gap-3 mb-10">
          <div className="relative">
            <div className="rounded-full bg-white p-3 size-10" />
            <FaRegLightbulb
              color="black"
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
              size={30}
            />
          </div>
          <h2 className="text-3xl font-semibold">
            Ready to take control of your finances?
          </h2>
        </div>
        <ul className="space-y-4 list-none ml-2">
          {pros.map(({ text }, i) => (
            <li key={i} className="flex  items-center gap-3">
              <SiTicktick color="white" size={16} />
              <span className="text-sm">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
