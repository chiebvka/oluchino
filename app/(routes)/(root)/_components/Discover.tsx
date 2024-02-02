"use client"

import React from 'react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';



type Props = {}

export default function Discover({}: Props) {
  return (
    <div className='w-full pt-5 '>
        <div className="md:w-11/12 mx-auto max-w-screen-xl p-4 md:p-3 py-6 lg:py-8">
            <Separator className='mb-5' />
            <div className="flex flex-col gap-y-5 justify-center">
                <h1 className='lg:text-3xl md:text-2xl text-sm  font-medium  '>Discover More</h1>
                <p>Find your most trusted and reliable brands while also discovering new brands </p>
            </div>
            <div className="flex flex-col mt-3 md:flex-row gap-6">
                <Card className='flex flex-col p-0  md:basis-1/3 h-96 border-2 border-black rounded-lg collection-card has-before hover:shine gap-y-5   relative'>
                    <CardHeader className='m-0 p-0'>
                    <img src="./store.jpg" className='rounded-lg min-h-56 max-h-56 m-0 h-full object-cover' alt="" />
                    </CardHeader>
                    <CardContent className='flex items-center justify-center'>
                        <CardTitle>Find Our Store</CardTitle>
                    </CardContent>
                    <CardFooter className='flex items-center justify-center'>
                        <span className="flex z-20 items-center group border-b-4  transition transform ease-in-out delay-150 duration-200 border-b-slate-600 pl-2 pt-1">
                            <Link href="/" className="span mr-1  transition ease-in-out delay-150  hover:-translate-x-1   duration-300  -mt-1 text-sm">Find Us</Link>
                            <ArrowRight size={20} />
                        </span>
                    </CardFooter>
                </Card>
                <Card className='flex flex-col p-0  md:basis-1/3 h-96 border-2 border-black rounded-lg collection-card has-before hover:shine gap-y-5   relative'>
                    <CardHeader className='m-0 p-0'>
                    <img src="./blog.jpg" className='rounded-lg min-h-56 max-h-56 m-0 h-full object-cover' alt="" />
                    </CardHeader>
                    <CardContent className='flex items-center justify-center'>
                        <CardTitle>Blog & Press</CardTitle>
                    </CardContent>
                    <CardFooter className='flex items-center justify-center'>
                        <span className="flex z-20 items-center group border-b-4  transition transform ease-in-out delay-150 duration-200 border-b-slate-600 pl-2 pt-1">
                            <Link href="/" className="span mr-1  transition ease-in-out delay-150  hover:-translate-x-1   duration-300  -mt-1 text-sm">Latest News</Link>
                            <ArrowRight size={20} />
                        </span>
                    </CardFooter>
                </Card>
                <Card className='flex flex-col p-0  md:basis-1/3 h-96 border-2 border-black rounded-lg collection-card has-before hover:shine gap-y-5   relative'>
                    <CardHeader className='m-0 p-0'>
                    <img src="./story.jpeg" className='rounded-lg min-h-56 max-h-56 m-0 h-full object-cover' alt="" />
                    </CardHeader>
                    <CardContent className='flex items-center justify-center'>
                        <CardTitle>Our Story</CardTitle>
                    </CardContent>
                    <CardFooter className='flex items-center justify-center'>
                        <span className="flex z-20 items-center group border-b-4  transition transform ease-in-out delay-150 duration-200 border-b-slate-600 pl-2 pt-1">
                            <Link href="/" className="span mr-1  transition ease-in-out delay-150  hover:-translate-x-1   duration-300  -mt-1 text-sm">Learn More</Link>
                            <ArrowRight size={20} />
                        </span>
                    </CardFooter>
                </Card>
                {/* <div className="flex flex-col justify-center items-center md:basis-1/3 h-96 border-2 border-black rounded-lg collection-card has-before hover:shine gap-y-5  md:px-5 px-2 py-8 relative">
                </div> */}
            </div>
        </div>
    </div>
  )
}