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


type Props ={}
// type Props = {heading: string, imagelink: string, productTitle: string, productDescription: string, productPrice: number, productReview: number}

export default function ProductList({}: Props) {

//   const scrollRef = React.useRef(null);

//   const scroll = (direction: string) => {
//     const {current} = scrollRef;

//     if (direction === 'left') {
//       current.scrollLeft -=  300;
//     } else {
//       current.scrollLeft += 300;
//     }
//   }
  return (
    <div className='w-full pt-5 text-foreground border-2 border-mint'>
        <div className="w-11/12 mx-auto max-w-screen-xl p-3 py-6 lg:py-8">
            <h1 className='text-3xl font-medium font-sans '>Popular Products</h1>
            <Card className='w-full max-w-[20rem] shadow-lg'>
                <CardHeader className='relative'>
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className='rounded-lg' alt="" />
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
                    <CardTitle>Hello SWorld</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illum vitae dolores corrupti quaerat enim deleniti iste nostrum ratione modi?</CardDescription>
                    {/* <div className="flex w-full border-2 flex-col">
                        <p className='text-foreground line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et non reiciendis. Ex doloremque ea placeat quasi quisquam voluptates mollitia!</p>
                    </div> */}
                </CardContent>
            </Card>
        </div>
    </div>
  )
}