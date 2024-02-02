"use client"

import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Buttons from '@/components/Buttons';
import { products } from '@/config/dummy';
import Link from 'next/link';


type Props ={}
// type Props = {heading: string, imagelink: string, productTitle: string, productDescription: string, productPrice: number, productReview: number}

export default function ProductList({}: Props) {


  return (
    <div className='w-full pt-5 text-foreground '>
        <div className="w-11/12 mx-auto relative max-w-screen-xl p-3 py-6 lg:py-8">
            <Separator className='mb-5' />
            <div className="flex justify-between items-center">
                <h1 className='lg:text-3xl md:text-2xl text-sm  font-medium  '>Popular Products</h1>
                <Button variant="ghost">
                    <Link href="/store" className='underline'>View More</Link>
                </Button>
            </div>

            <Carousel className="flex relative w-full border-l-2 pl-2  py-3  shadow-lg ">
                <CarouselContent className=" flex -ml-2 gap-x-5">
                    {products.map((product) => (
                        <CarouselItem  className=" max-w-[20rem] pl-1 w-full  min-w-[20rem] border-2 rounded-lg shadow-lg md:basis-1/2 lg:basis-1/3 " key={product.id}>

                            <Card className='border-none'  >
                                <CardHeader className='relative'>
                                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                                    <img src={product.imageLink} className='rounded-lg min-h-48 max-h-48 h-full object-cover' alt="" />
                                    <div className="text-mint absolute top-10 right-10">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                        </svg>
                                    </div>
                                    <div className="flex justify-between ">
                                        <CardTitle className='text-base'>
                                            <Link href="/">
                                                {product.title}
                                            </Link>
                                        </CardTitle>
                                        <div className="flex justify-center items-center gap-x-2">
                                            <Star size={20} />
                                            <h3>{product.rating}</h3>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className='line-clamp-2'>{product.description}</CardDescription>
                                </CardContent>
                                    <CardFooter className="justify-between space-x-2">
                                        <Buttons text='Buy Now' />
                                        <Buttons text='Add To Cart' />
                                    </CardFooter>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </div>
  )
}