import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle, FaApple } from "react-icons/fa";
import bgImg1 from "../../../../public/bg-img1.png";
import bgImg2 from "../../../../public/bg-img2.png";
import Image from "next/image";
import { IoReturnUpBack } from "react-icons/io5";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen  overflow-hidden">
      <Link
        href="/"
        className="flex justify-center items-center gap-3 absolute top-5 left-5 hover:text-primary transition-all duration-150"
      >
        <IoReturnUpBack />
        <span>Go back</span>
      </Link>
      <div className="size-[350px] absolute -bottom-10 -right-10">
        <Image src={bgImg1} alt="bg-img1" fill />
      </div>
      <div className="size-[350px] absolute -bottom-20 -left-10">
        <Image src={bgImg2} alt="bg-img1" fill />
      </div>
      <Card className="my-auto w-[500px]  border-none outline-none">
        <CardHeader>
          <CardTitle className="text-6xl text-center  font-playfair ">
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
              />
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button
              variant="outline"
              className="w-full flex justify-center items-center"
            >
              <FaGoogle size={20} className="mr-3" />
              <span>Continue with Google</span>
            </Button>
            <Button
              variant="outline"
              className="w-full flex justify-center items-center"
            >
              <FaApple size={20} className="mr-3" />
              <span>Continue with Apple</span>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signUp" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
