"use client";


import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { carousel } from "@/config/dummy";
import Link from "next/link";
import Buttons from "@/components/Buttons";
import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'



  

type Props = {}

export default function Hero({}: Props) {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )

      
  return (
        <div className=" h-[60vh] border-l-palette  mx-auto">
            <Carousel
                plugins={[plugin.current]}
                className='relative  h-full w-[92%] gap-x-7 mx-auto'
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset} 
            >
                <CarouselContent className="z-10 ">
                    {carousel.map((hero) => (
                              <CarouselItem key={hero.id}>
                              <div className="relative group overflow-hidden h-[60vh] rounded-lg">
                                <img
                                  alt="Product 1"
                                  className="object-cover w-full h-full"
                                  height={600}
                                  src={hero.banner}
                                  style={{
                                    aspectRatio: "800/600",
                                    objectFit: "cover",
                                  }}
                                  width={800}
                                />
                                <div className="absolute inset-0   bg-black bg-opacity-30 flex flex-col items-start p-6">
                                    <div className=" absolute top-1/3  border-2 border-red-600 lg:w-8/12 w-10/12 z-50">
                                        <h2 className="lg:text-4xl text-xl font-bold  text-white ">{hero.title}</h2>
                                        <p className="text-white text-sm md:text-lg my-5">{hero.description}</p>
                                        <div className="my-5 relative">
                                            <Link href={hero.link} className="relative w-6/12 ">
                                                <Buttons text=' Learn More' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious  className="z-20" />
                <CarouselNext className="z-20" />
            </Carousel>
        </div>

  )
}