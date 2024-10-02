import * as React from "react";
import { images } from "@/utils/images";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
export function HeroCarousel() {
  return (
    <Carousel automate={true}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className='flex items-center justify-center '>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className='rounded-md object-cover h-full'
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
