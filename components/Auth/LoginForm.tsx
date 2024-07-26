"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle, FaApple } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
const LoginForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeIn", duration: 0.3 }}
    >
      <Card className="my-auto w-[500px]  border-none outline-none">
        <CardHeader>
          <CardTitle className="text-6xl text-center  font-playfair ">
            Welcome back 👋
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="youremail@example.com"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button
              variant="outline"
              className="w-full flex justify-center items-center"
            >
              <FaGoogle size={20} className="mr-3" />
              <span>Continue with Google</span>
            </Button>
            <Button
              variant="outline"
              className="w-full flex justify-center items-center"
            >
              <FaApple size={20} className="mr-3" />
              <span>Continue with Apple</span>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signUp" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LoginForm;
