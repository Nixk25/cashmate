import React from "react";
import { Button } from "@/components/ui/button";
import { IoLogInOutline } from "react-icons/io5";
import star from "../../../public/star.png";
import Image from "next/image";
const GetStarted = () => {
  return (
    <section className="flex justify-center ">
      <div className="relative flex flex-col items-center justify-center p-20 overflow-hidden text-center border border-black md:rounded-full md:rounded-bl-none   bg-primary w-full md:w-[80%]">
        <h2 className="relative z-10 tracking-tighter md:text-6xl text-4xl font-bold font-playfair  ">
          Get Started with CashMate for FREE
        </h2>
        <p className="relative z-10 text-md text-slate-800">
          Sign up today to start managing your finances better. No need to link
          your bank account.
        </p>
        <div className="relative z-10 flex gap-10 mt-10 flex-col md:flex-row items-center jusitfy-center">
          <Button
            size="lg"
            className="text-white transition-all bg-black rounded-bl-none hover:bg-black hover:brightness-110 hover:scale-110 active:scale-95"
          >
            Sign up for an account{" "}
            <span className="ml-2">
              <IoLogInOutline size="25" />
            </span>
          </Button>
          <Button
            size="lg"
            className="text-black w-full md:w-max transition-all bg-white hover:bg-white hover:brightness-110 hover:scale-110 active:scale-95"
          >
            Login
          </Button>
        </div>
        <Image
          src={star}
          width={300}
          height={300}
          alt="star icon for background"
          className="absolute -bottom-[50px] opacity-90 -right-[100px]"
        />
        <Image
          src={star}
          width={250}
          height={250}
          alt="star icon for background"
          className="absolute -top-[50px] opacity-40 -left-[100px]"
        />
        <Image
          src={star}
          width={200}
          height={200}
          alt="star icon for background"
          className="absolute top-[100px] opacity-60 left-1/2 z-0"
        />
        <Image
          src={star}
          width={200}
          height={200}
          alt="star icon for background"
          className="absolute bottom-[0px] opacity-70 left-10 z-0"
        />
      </div>
    </section>
  );
};

export default GetStarted;
