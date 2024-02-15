"use client"
import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { AlignHorizontalJustifyCenter, CheckCheck, X } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs";
import { carousel } from '@/config/dummy';

type Props = {}

export default function HowTabs({}: Props) {
  return (
    <div>
      <Tabs defaultValue='place' className="w-full border-2 border-red-600">
          <Carousel className="flex items-start relative w-full">
              <CarouselContent className=' w-[100vw] '>
                  {carousel.map((index) => (
                    <div key={index.id} className='w-full'>
                      <TabsList className='flex w-full h-auto  '>
                        <CarouselItem className=" basis w-full ">
                            <TabsTrigger value={index.title} className="  w-full cursor-pointer  flex  items-center justify-center  shadow-lg ">
                                <span className="text-2xl font-semibold" >{index.title}</span>
                            </TabsTrigger>

                        </CarouselItem>
                      </TabsList>
                    </div>
                          
                  ))}
              </CarouselContent>
              {/* <CarouselPrevious className='md:-left-6 ' /> */}
           
              <CarouselNext className='md:-right-6 ' />
          </Carousel>
     
      </Tabs>
    </div>
  )
}