"use client"

import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { brands } from '@/config/dummy'
import Autoplay from 'embla-carousel-autoplay'

type Props = {}

export default function Brands({}: Props) {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )

  return (
    <div className='w-full pt-5 '>
        <div className=" md:w-11/12 mx-auto max-w-screen-xl p-3 py-6 lg:py-8">
            <Separator className='mb-5' />
            <div className="flex flex-col gap-y-5 justify-center">
                <h1 className='lg:text-3xl md:text-2xl text-sm  font-medium  '>Brands</h1>
                <p>Find your most trusted and reliable brands while also discovering new brands </p>
            </div>
            <Carousel 
                plugins={[plugin.current]} 
                className="flex relative w-full py-3 shadow-lg "
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset} 
            >
            <CarouselContent className=" flex -ml-2 gap-x-5">
                {brands.map((brand) => (
                    <CarouselItem  className=" collection-card h-48 has-before flex  justify-center hover:shine max-w-[20rem] pl-0 w-full  min-w-[20rem] border-2 rounded-lg shadow-lg md:basis-1/2 lg:basis-1/3 " key={brand.id}>
                        <Link href="/" className='relative w-full'>
                            <img src={brand.brandImg} className='rounded-lg w-full h-full object-cover' alt="" />
                            <div className="absolute inset-0  bg-mint bg-opacity-20" />
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            </Carousel>

        </div>
    </div>
  )
}