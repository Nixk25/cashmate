"use client";

import React from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  return (
    <div>
      <LogoutLink>logout</LogoutLink>
    </div>
  );
};

export default page;
