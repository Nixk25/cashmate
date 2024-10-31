"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle, FaApple } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeIn", duration: 0.3 }}
    >
      <Card className="my-auto border-none shadow-none outline-none">
        <CardHeader>
          <CardTitle className="text-3xl text-center lg:text-6xl font-playfair ">
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
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </div>

            <LoginLink
              authUrlParams={{
                connection_id:
                  process.env.NEXT_PUBLIC_EMAIL_CONNECTION_ID || "",
                login_hint: email,
              }}
            >
              <Button type="submit" className="w-full">
                Enter CashMate
              </Button>
            </LoginLink>
            <LoginLink
              authUrlParams={{
                connection_id:
                  process.env.NEXT_PUBLIC_GOOGLE_CONNECTION_ID || "",
              }}
            >
              <Button
                variant="outline"
                className="flex items-center justify-center w-full"
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
                className="flex items-center justify-center w-full"
              >
                <FaApple size={20} className="mr-3" />
                <span>Continue with Apple</span>
              </Button>
            </LoginLink>
          </div>

          <div className="mt-4 text-sm text-center">
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
