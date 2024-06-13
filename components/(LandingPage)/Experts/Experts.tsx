import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
type ExpertsType = {
  name: string;
  description: string;
  image: string;
};

const experts: ExpertsType[] = [
  {
    name: "John Smith",
    description:
      "With over 20 years of experience in investment banking, John specializes in mergers and acquisitions, providing strategic financial advice to clients worldwide.",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Emily Chen",
    description:
      "Emily is a seasoned portfolio manager, known for her expertise in risk management and asset allocation. She has a strong track record of delivering consistent returns for her clients.",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Michael Johnson",
    description:
      "Michael is a financial analyst renowned for his deep understanding of market trends and economic indicators. He frequently publishes insightful research reports that are highly regarded by investors.",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Sarah Patel",
    description:
      "Sarah is a financial planner dedicated to helping individuals and families achieve their financial goals. She provides personalized advice on budgeting, saving, and retirement planning.",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "David Lee",
    description:
      "David is an expert in corporate finance, specializing in capital raising and financial restructuring. He has successfully led numerous complex transactions for both public and private companies.",
    image:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const Experts = () => {
  return (
    <section className="mt-[150px]">
      <div className="container">
        <div className="flex items-center flex-col lg:flex-row justify-center ">
          <h2 className="flex-1 font-bold text-4xl md:text-6xl mb-5 md:text-start text-center font-playfair">
            Get Insights from Financial Experts
          </h2>
          <p className="flex-1 text-xl text-center md:text-start">
            Our carefully selected and vetted financial experts offer advice and
            tips to help you manage your money better.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full mt-20"
        >
          <CarouselContent>
            {experts.map(({ name, description, image }, i) => (
              <CarouselItem
                key={i}
                className="lg:basis-1/2 xl:basis-1/3  cursor-grab active:cursor-grabbing flex lg:justify-start justify-center items-center"
              >
                <Card className="h-[600px] w-[300px] sm:w-[400px] border-2 border-[#1e1e1e] shadow-lg  ">
                  <CardContent className="flex flex-col items-center justify-center p-0 pointer-events-none select-none">
                    <div className="w-full h-[300px]">
                      <Image
                        src={image}
                        alt={name}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full mb-4 rounded-md rounded-bl-none rounded-br-none"
                      />
                    </div>

                    <div className="px-10 pt-5 pb-10 ">
                      <h2 className="mb-2 text-xl font-semibold">{name}</h2>
                      <p className="text-gray-600">{description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-0 size-10 -top-10" />
          <CarouselNext className=" -top-10 left-14 size-10" />
        </Carousel>
      </div>
    </section>
  );
};

export default Experts;
