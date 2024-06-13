import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "../../public/cashmate-logo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-950 md:mt-10 p-6 md:py-12 w-full ">
      <div className=" flex flex-col md:flex-row items-center justify-between gap-10 ">
        <Link href="#" className="flex items-center gap-2 order-2 md:order-1">
          <Image src={logo} width={100} height={100} alt="logo for cashmate" />
          <p className="text-sm text-white text-center md:text-start">
            &copy; 2024 CashMate Inc. All rights reserved.
          </p>
        </Link>

        <form className="flex space-x-2 order-1 md:order-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="max-w-lg flex-1"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
