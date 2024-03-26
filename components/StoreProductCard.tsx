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
  import Buttons from '@/components/Buttons';
import Link from 'next/link';
import { Star } from 'lucide-react';
import Image from 'next/image';

type Props = {}

export default function StoreProductCard({}: Props) {
  return (
    <>
        <Link href={`/product/${1}`}>
            <Card className='border-2 '  >
                <CardHeader className='relative -m-2'>
                    <Image src="https://images.pexels.com/photos/19526798/pexels-photo-19526798/free-photo-of-photo-of-a-tree-on-a-hill.jpeg" className='rounded-lg min-h-24 max-h-24 md:min-h-28 md:max-h-28 lg:min-h-44 lg:max-h-44 h-full object-cover' alt="" priority={true} width={500} height={500} />
                    <div className="text-palettes absolute top-5 right-5 md:top-15 md:right-15">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className=" h-4 w-4 md:h-6 md:w-6"
                        >
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                    </div>
                    <div className="flex justify-between ">
                        <CardTitle className='text-xs md:text-sm lg:text-base'>
                            <span >
                                Teen Wolf
                            </span>
                        </CardTitle>
                        <div className="flex justify-center items-center">
                            <Star size={14} />
                            <h3 className='text-xs md:text-sm lg:text-base'>4.3</h3>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className='-m-2'>
                    <CardDescription className='line-clamp-2 text-xs '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illum vitae dolores corrupti quaerat enim deleniti iste nostrum ratione modi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illum vitae dolores corrupti quaerat enim deleniti iste nostrum ratione modi?</CardDescription>
                </CardContent>
                <CardFooter className="w-full -mx-2 space-x-2">
                <Buttons text='Add To Cart' />
                </CardFooter>
            </Card>
        </Link>
    </>
  )
}