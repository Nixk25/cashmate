"use client";

import React from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
const page = () => {
  return (
    <div>
      <LogoutLink>logout</LogoutLink>
    </div>
  );
};

export default page;
