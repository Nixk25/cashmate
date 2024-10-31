import { cn } from "@/lib/utils";
import React from "react";
import BannerContent from "./BannerContent";

const Wave = ({ className, color }: { className?: string; color?: string }) => {
  return (
    <div className={cn("absolute  left-0 w-full ", className)}>
      <svg
        width="1440"
        height="204"
        viewBox="0 0 1440 204"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-14 60L21.1383 72C55.065 84 124.13 108 193.195 120C263.472 132 332.537 132 401.602 102C470.667 72 539.732 12 608.797 12C677.862 12 748.138 72 817.203 96C886.268 120 955.333 108 1024.4 78C1093.46 48 1162.53 0 1232.81 0C1301.87 0 1370.94 48 1404.86 72L1440 96V204H1404.86C1370.94 204 1301.87 204 1232.81 204C1162.53 204 1093.46 204 1024.4 204C955.333 204 886.268 204 817.203 204C748.138 204 677.862 204 608.797 204C539.732 204 470.667 204 401.602 204C332.537 204 263.472 204 193.195 204C124.13 204 55.065 204 21.1383 204H-14V60Z"
          fill={color ?? "white"}
        />
      </svg>
    </div>
  );
};

const Banner: React.FC = () => {
  return (
    <section className="relative mt-[150px] md:p-20 p-5 overflow-hidden bg-primary min-h-[800px] flex flex-col items-center justify-center">
      <Wave className="rotate-180 -top-14 md:top-0 " />
      <BannerContent />
      <Wave className="-bottom-14 md:bottom-0 " />
    </section>
  );
};

export default Banner;
