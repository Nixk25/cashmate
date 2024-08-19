import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

import GradualSpacing from "../magicui/gradual-spacing";
import { motion } from "framer-motion";
import { EXPERTS } from "@/app/lib/constants";

const Experts = () => {
  return (
    <section className="mt-20 md:mt-[150px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center lg:flex-row ">
          <div className="flex-1 mb-3">
            <GradualSpacing
              text="Get Insights from Financial Experts"
              className="relative z-10 font-bold leading-tight md:text-start font-playfair desc-clamp "
            />
          </div>

          <div className="flex items-center justify-center flex-1 text-xl text-center md:text-start">
            <GradualSpacing
              text="Our carefully selected and vetted financial experts offer advice and
              tips to help you manage your money better."
              className="relative z-10 leading-tight "
              spaceSize="w-2"
            />
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full mt-20"
        >
          <CarouselContent>
            {EXPERTS.map(({ name, description, image }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ ease: "easeIn", delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <CarouselItem className="flex items-center justify-center lg:basis-1/2 xl:basis-1/3 cursor-grab active:cursor-grabbing lg:justify-start">
                  <Card className="h-[600px] w-[300px] sm:w-[400px] border-2 border-[#1e1e1e] shadow-lg  ">
                    <CardContent className="flex flex-col items-center justify-center p-0 pointer-events-none select-none">
                      <div className="w-full h-[300px]">
                        <Image
                          src={image}
                          alt={name}
                          width={200}
                          height={200}
                          placeholder="blur"
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
              </motion.div>
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
