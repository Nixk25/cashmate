"use client";

import React from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

const page = () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
  return (
    <div className="flex justify-center items-center">
      <LogoutLink>logout</LogoutLink>
    </div>
  );
};

export default page;
