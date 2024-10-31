import React from "react";
import Onboarding from "@/components/Onboarding/Onboarding";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const page = async () => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  return <Onboarding user={user} />;
};

export default page;
