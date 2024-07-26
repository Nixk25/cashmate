"use client";
import React, { useState } from "react";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import GradualSpacing from "../magicui/gradual-spacing";
const LeftSide = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <div className="flex items-center justify-center py-12 flex-1">
      <div className=" flex flex-col gap-6 ">
        <div className=" gap-2 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeIn", duration: 0.3 }}
            className="text-3xl font-bold"
          >
            Welcome to CashMate 👋
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeIn", duration: 0.3 }}
            className="text-balance text-sm text-muted-foreground"
          >
            Enter your email below to create to your account
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", duration: 0.3 }}
          className=" gap-4"
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", duration: 0.3 }}
          className="mt-4 text-center text-sm"
        >
          Have an account?{" "}
          <Link href="/auth/login" className="underline">
            Login
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LeftSide;
