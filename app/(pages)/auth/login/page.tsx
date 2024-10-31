import type { Metadata } from "next";
import Link from "next/link";
import { IoReturnUpBack } from "react-icons/io5";
import LoginForm from "@/components/Auth/LoginForm";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
export const metadata: Metadata = {
  title: "Login | CashMate",
  description: "Login into CashMate",
};
const Login = () => {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen bg-white">
      <Link
        href="/"
        className="absolute flex items-center justify-center gap-3 transition-all duration-150 top-5 left-5 hover:text-primary"
      >
        <IoReturnUpBack />
        <span>Go back</span>
      </Link>
      <div className="flex items-center justify-center h-screen overflow-hidden relative z-[999] ">
        <LoginForm />
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Login;
