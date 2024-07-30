"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import logo from "../../public/cashmate-logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
const AnimatedNavbar = () => {
  const navLinks = [
    { href: "#features", title: "Features" },
    { href: "#pricing", title: "Pricing" },
  ];

  const [isChanged, setIsChanged] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    //@ts-ignore
    if (latest > prev && latest > 150) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  });
  return (
    <motion.nav
      className="z-[60] bg-primary shadow-2xl flex   text-white p-3 px-7 mt-5 fixed top-0 left-[50%] translate-x-[-50%] justify-between items-center  
             rounded-full h-[60px]   transition-all duration-300"
      initial={{ y: -100, x: "-50%" }}
      animate={{
        width: isChanged ? 90 : "80%",
        y: 0,
      }}
    >
      <Link className="absolute " href="#hero">
        <Image
          src={logo}
          height={30}
          width={30}
          className="object-cover w-full h-full"
          alt="logo cashmate"
        />
      </Link>

      <motion.div
        initial={{ visibility: "hidden", opacity: 0 }}
        animate={{
          visibility: isChanged ? "hidden" : "visible",
          opacity: isChanged ? 0 : 1,
        }}
        transition={{ delay: isChanged ? 0 : 0.5 }}
        className="flex items-center justify-end w-full gap-10 text-sm "
      >
        <div className="flex gap-3">
          {navLinks.map((link, i) => (
            <a
              key={i}
              className="p-2 px-3 transition-colors duration-150 bg-transparent cursor-pointer rounded-2xl "
              href={link.href}
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-5">
          <Link
            href="auth/login"
            className="transition-colors hover:text-slate-900"
          >
            Sign In
          </Link>

          <Link href="auth/signUp">
            <Button className="transition-all bg-white text-slate-900 hover:brightness-105 hover:bg-white hover:scale-105 active:scale-95">
              Try Free
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default AnimatedNavbar;
