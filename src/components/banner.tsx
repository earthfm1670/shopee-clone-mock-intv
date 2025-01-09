import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Banner() {
  return (
    <>
      <div className="flex">
        <div className="w-2/3 ml-20">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <img className="h-[400px] w-[500px]" src="/husky3.webp"></img>
              </CarouselItem>
              <CarouselItem>
                <img className="h-[400px] w-[500px]" src="/husky4.avif"></img>
              </CarouselItem>
              <CarouselItem>
                <img className="h-[400px] w-[500px]" src="/husky5.png"></img>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="w-1/3">
          <img className="h-[200px] w-[200px]" src="/husky1.jpg"></img>
          <img className="h-[200px] w-[200px]" src="/husky2.webp"></img>
        </div>
      </div>
    </>
  );
}
