import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "../../public/cashmate-logo.png";
const Footer = () => {
  return (
    <footer className="w-full p-6 bg-gray-950 md:mt-10 md:py-12 ">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <Link href="#" className="flex items-center order-2 gap-2 md:order-1">
          <Image src={logo} width={30} height={30} alt="logo for cashmate" />
          <p className="text-sm text-center text-white md:text-start">
            &copy; 2024 CashMate Inc. All rights reserved.
          </p>
        </Link>

        <form className="flex order-1 space-x-2 md:order-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 max-w-lg"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
