import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Button } from '../ui/button';

const Category = () => {
    const cats = [
        "Front-end Devoloper",
        "Back-end Developer",
        "Full-stack Developer",
        "Graphic Designer",
        "Data Science Intern"
    ]
  return (
    <div className='flex justify-center my-10'>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-6/12"
    >
      <CarouselContent>
        {cats.map((cat,index)=>(
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Button className="bg-[#D9E6F2] mx-8 h-8 rounded-full shadow-inner" variant="outline">
                {cat}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
}

export default Category;
