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
    <div className='lg:col-span-3'>
                 <Carousel className="flex items-start relative w-full">
                                <CarouselContent className=' '>
                                  <CarouselItem className=" basis w-full ">
                                          <span className="text-2xl font-semibold" >Hello World</span>
                                  </CarouselItem>
                                </CarouselContent>
                              </Carousel>
            

                  
            
              {/* <CarouselPrevious className='md:-left-6 ' /> */}
           
            


    </div>
  )
}