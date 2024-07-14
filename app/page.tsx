import React from "react";
import LandingPage from "@/components/LandingPage";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Home = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return <LandingPage user={user} />;
};

export default Home;
