import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./button";

import { TiTick } from "react-icons/ti";
export type AdvantageType = {
  advantage: String;
};
type PricingCardPropsType = {
  category: string;
  price: string;
  subheading: string;
  advantages: AdvantageType[];
  color?: string;
  textColor?: string;
};

const PricingCard = ({
  category,
  price,
  subheading,
  advantages,
  color,
  textColor,
}: PricingCardPropsType) => {
  return (
    <Card className="p-0 h-[530px] min-w-[300px]  flex flex-col justify-between">
      <CardContent className="p-0">
        <CardHeader className={`py-10 bg-${color} rounded-md m-1`}>
          <span className={`text-sm text-${textColor} opacity-80`}>
            {category}
          </span>
          <CardTitle className={`text-4xl text-${textColor}`}>
            {price}
          </CardTitle>
          <p className={`text-${textColor} opacity-90`}>{subheading}</p>
        </CardHeader>

        <ul className="flex flex-col gap-3 p-10">
          {advantages.map((advantage, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="p-2 bg-white border border-green-500 rounded-full">
                <TiTick color="green" />
              </div>
              <li>{advantage.advantage}</li>
            </div>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="w-full p-0">
        <Button
          className={`w-full active:scale-100 hover:scale-100 rounded-none rounded-bl-md rounded-br-md text-${textColor} bg-${color}`}
        >
          Try For Free
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
