import type { Metadata } from "next";
import Link from "next/link";
import bgImg1 from "../../../../public/bg-img1.png";
import bgImg2 from "../../../../public/bg-img2.png";
import Image from "next/image";
import { IoReturnUpBack } from "react-icons/io5";
import LoginForm from "@/components/Auth/LoginForm";
export const metadata: Metadata = {
  title: "Login | CashMate",
  description: "Login into CashMate",
};
const Login = () => {
  return (
    <div className="flex justify-center items-center  relative h-screen  overflow-hidden">
      <Link
        href="/"
        className="flex justify-center items-center gap-3 absolute top-5 left-5 hover:text-primary transition-all duration-150"
      >
        <IoReturnUpBack />
        <span>Go back</span>
      </Link>
      <div className="lg:size-[350px] size-[170px] absolute -bottom-10 -right-10">
        <Image src={bgImg1} alt="bg-img1" fill />
      </div>
      <div className="lg:size-[350px] size-[170px] absolute -bottom-20 -left-10">
        <Image src={bgImg2} alt="bg-img1" fill />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
