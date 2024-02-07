"use client"

import React, { useState } from 'react';
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
} from "@/components/ui/card"
import Link from 'next/link';
import { CheckCheck, X } from 'lucide-react'
import { formatPrice } from '@/lib/format';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs";
import Buttons from '@/components/Buttons';


type Props = {}

export default function ProductDetails({}: Props) {

    const [value, setValue] = useState(0)


    const increase = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault(); // Prevent form submission
        setValue((prevalue) => prevalue + 1)
    }

    const decrease = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault(); // Prevent form submission
        setValue((prevalue) => prevalue > 0 ? prevalue - 1 : 0)
    }
  return (
    <div>
        <div className="border-2">
            <div className="flex flex-col md:flex-row">
                <div className=" md:w-6/12">
                    <div className="flex flex-col md:w-11/12 w-full gap-y-4 ">
                    <div className="  h-[400px] w-full ">
                        <div className="w-full h-full overflow-hidden rounded-lg">
                        <img className="h-full w-full max-w-full object-cover" src="https://images.pexels.com/photos/19106295/pexels-photo-19106295/free-photo-of-birds-eye-view-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </div>

                    <div className="w-full  flex">
                        <Carousel className="flex items-start relative w-full">
                            <CarouselContent className=' w-full '>
                                {Array.from({ length: 9 }).map((_, index) => (
                                <CarouselItem key={index} className="basis-1/3 w-full lg:basis-1/4">
                                    <div className=" h-20 w-full cursor-pointer rounded-lg shadow-lg ">
                                        <img className="w-full rounded-lg shadow-lg h-full" src="https://images.pexels.com/photos/8642000/pexels-photo-8642000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    </div>
                                </CarouselItem>
                                        
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className='md:-left-6 ' />
                            <CarouselNext className='md:-right-6 ' />
                        </Carousel>
                    </div>
                    </div>
                </div>

                <div className="md:w-6/12 ">
                    <div className="w-10/12 py-3 mx-auto">

                        <h1 className=" text-2xl font-bold text-gray-900 sm:text-3xl">Afro-Brazillian Coffee</h1>
                        <h2 className="flex font-bold my-2 text-lg">{formatPrice(4000)}</h2>
                        <div className=" my-2 flex items-center">
                            <p className="ml-1 text-sm font-bold text-gray-900 dark:text-white">Brand</p>
                            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                            <Link href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">Lugano</Link>
                        </div>

                        <div className=" my-2 flex items-center">
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <p className="ml-1 text-sm font-bold text-gray-900 dark:text-white">4.85</p>
                            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                            <Link href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">41 reviews</Link>
                        </div>

                        <div className=" flex flex-col space-y-2">
                            <span className='flex gap-x-2 items-center'>
                                <CheckCheck className='text-mint' size={16} />
                                <h4 className='text-xs'>In Stock</h4>
                            </span>
                            <span className='flex gap-x-2 items-center'>
                                <X className='text-red-600' size={16} />
                                <h4 className='text-xs'>Available for pickup</h4>
                            </span>
                        </div>

                        <Separator className='my-4' />
                        <h2 className="my-4 text-base text-gray-900">Size</h2>
                        <div className="my-3 flex select-none flex-wrap items-center gap-1">
                            <div className="w-full md:w-10/12  flex">
                                <Carousel className="flex items-start relative w-full">
                                    <CarouselContent className=' w-full '>
                                        {Array.from({ length: 9 }).map((_, index) => (
                                        <CarouselItem key={index} className="basis-1/4 w-full lg:basis-1/4">
                                            <div className=" h-16 w-full cursor-pointer border-2 flex aspect-square items-center justify-center p-6 rounded-lg shadow-lg ">
                                                <span className="text-2xl font-semibold" >{index + 1}</span>
                                            </div>
                                        </CarouselItem>
                                                
                                        ))}
                                    </CarouselContent>
                                    {/* <CarouselPrevious className='md:-left-6 ' /> */}
                                    <CarouselNext className='md:-right-6 ' />
                                </Carousel>
                            </div>
                        </div>

                        <h2 className="my-2 text-base text-gray-900">Color</h2>
                        <div className="my-3 flex select-none flex-wrap items-center gap-1">
                            <div className="w-full md:w-10/12  flex">
                                <Carousel className="flex items-start relative w-full">
                                    <CarouselContent className=' w-full '>
                                        {Array.from({ length: 9 }).map((_, index) => (
                                        <CarouselItem key={index} className="basis-1/4 w-full lg:basis-1/4">
                                            <div className=" h-16 w-full cursor-pointer border-2 flex aspect-square items-center justify-center p-6 rounded-lg shadow-lg ">
                                                <span className="text-2xl font-semibold" >{index + 1}</span>
                                            </div>
                                        </CarouselItem>
                                                
                                        ))}
                                    </CarouselContent>
                                    {/* <CarouselPrevious className='md:-left-6 ' /> */}
                                    <CarouselNext className='md:-right-6 ' />
                                </Carousel>
                            </div>
                        </div>

                        <Separator className='my-4' />
                        <h2 className="my-2 text-base text-gray-900">Quantity</h2>
                        <div className="flex mt-2 ">
                            <form className='flex gap-x-2 items-center justify-center w-full md:w-9/12 lg:w-5/12'>
                                <label htmlFor="quantity"></label>
                                <button onClick={(e) => decrease(e)} className=' bg-palette basis-2/6 rounded-lg text-white hover:text-palette hover:bg-mint h-full cursor-pointer outline-none'>
                                    <span className=' text-2xl font-thin'>-</span>
                                </button>
                                <Input 
                                    type="number" 
                                    value={value}
                                    readOnly
                                    name='quantity'
                                    className='flex items-center justify-center text-center basis-3/6 ' 
                                />
                                <button onClick={(e) => increase(e)} className=' bg-palette basis-2/6 rounded-lg text-white hover:text-palette hover:bg-mint h-full cursor-pointer outline-none'>
                                    <span className='text-2xl rounded-lg font-thin'>+</span>
                                </button>
                            </form>
                        </div>

                        <Separator className='my-4' />

                        <div className="my-2 flex  w-full md:w-10/12 items-center justify-between   py-4">
                            <span >
                                <Buttons text='Add to Cart' />
                            </span>
                            <span >
                                <Buttons text='Add to Wishlist' />
                            </span>
                        </div>

                        <Separator className='my-4' />

                        <div className='flex flex-col my-4'>

                            <span className="block text-sm font-black mb-2">Share on Social Media</span>
                            <div>
                            <a className="inline-block text-palette hover:text-mint mr-6" href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.6349 20.7272V12.766H16.3583L16.7669 9.66243H13.6349V7.68126C13.6349 6.78299 13.8882 6.17083 15.203 6.17083L16.8771 6.17015V3.39421C16.5876 3.35731 15.5938 3.27271 14.4371 3.27271C12.0217 3.27271 10.3681 4.71878 10.3681 7.37389V9.66243H7.63647V12.766H10.3681V20.7272H13.6349Z" fill="currentColor"></path>
                                </svg>
                            </a>
                            <a className="inline-block text-palette hover:text-mint mr-6" href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.8181 6.14598C21.1356 6.44844 20.4032 6.65356 19.6336 6.74513C20.4194 6.27462 21.0208 5.52831 21.3059 4.64177C20.5689 5.0775 19.7553 5.39389 18.8885 5.56541C18.1943 4.82489 17.2069 4.36365 16.1118 4.36365C14.0108 4.36365 12.3072 6.06719 12.3072 8.16707C12.3072 8.46489 12.3408 8.75577 12.4057 9.03392C9.24434 8.87513 6.44104 7.3605 4.56483 5.05895C4.23686 5.61986 4.05028 6.27344 4.05028 6.9711C4.05028 8.29107 4.72243 9.45574 5.74225 10.1371C5.11877 10.1163 4.53237 9.94477 4.01901 9.65968V9.70719C4.01901 11.5498 5.33086 13.0876 7.07031 13.4376C6.75161 13.5234 6.41555 13.5709 6.06789 13.5709C5.82222 13.5709 5.58464 13.5466 5.35171 13.5002C5.8361 15.0125 7.24067 16.1123 8.90483 16.1424C7.6034 17.1623 5.96243 17.7683 4.1801 17.7683C3.87301 17.7683 3.57052 17.7498 3.27271 17.7162C4.95655 18.7974 6.95561 19.4279 9.10416 19.4279C16.1026 19.4279 19.928 13.6312 19.928 8.60398L19.9153 8.11147C20.6627 7.57834 21.3094 6.90853 21.8181 6.14598Z" fill="currentColor"></path>
                                </svg>
                            </a>
                            <a className="inline-block text-palette hover:text-mint mr-6" href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.6007 2.18176H16.3992C19.3874 2.18176 21.8184 4.61276 21.8182 7.60069V16.3992C21.8182 19.3871 19.3874 21.8181 16.3992 21.8181H7.6007C4.61276 21.8181 2.18188 19.3872 2.18188 16.3992V7.60069C2.18188 4.61276 4.61276 2.18176 7.6007 2.18176ZM16.3993 20.0759C18.4267 20.0759 20.0761 18.4266 20.0761 16.3992H20.076V7.60069C20.076 5.57343 18.4266 3.924 16.3992 3.924H7.6007C5.57343 3.924 3.92412 5.57343 3.92412 7.60069V16.3992C3.92412 18.4266 5.57343 20.076 7.6007 20.0759H16.3993ZM6.85721 12.0001C6.85721 9.16418 9.16425 6.85709 12.0001 6.85709C14.8359 6.85709 17.1429 9.16418 17.1429 12.0001C17.1429 14.8358 14.8359 17.1428 12.0001 17.1428C9.16425 17.1428 6.85721 14.8358 6.85721 12.0001ZM8.62805 11.9999C8.62805 13.8592 10.1408 15.3718 12.0001 15.3718C13.8593 15.3718 15.3721 13.8592 15.3721 11.9999C15.3721 10.1405 13.8594 8.62784 12.0001 8.62784C10.1407 8.62784 8.62805 10.1405 8.62805 11.9999Z" fill="currentColor"></path>
                                </svg>
                            </a>
                            <a className="inline-block text-palette hover:text-mint" href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.2 3H4.8C3.81 3 3 3.81 3 4.8V19.2C3 20.19 3.81 21 4.8 21H19.2C20.19 21 21 20.19 21 19.2V4.8C21 3.81 20.19 3 19.2 3ZM8.4 18.3H5.7V10.2H8.4V18.3ZM7.05 8.67C6.15 8.67 5.43 7.95 5.43 7.05C5.43 6.15 6.15 5.43 7.05 5.43C7.95 5.43 8.67 6.15 8.67 7.05C8.67 7.95 7.95 8.67 7.05 8.67ZM18.3 18.3H15.6V13.53C15.6 12.81 14.97 12.18 14.25 12.18C13.53 12.18 12.9 12.81 12.9 13.53V18.3H10.2V10.2H12.9V11.28C13.35 10.56 14.34 10.02 15.15 10.02C16.86 10.02 18.3 11.46 18.3 13.17V18.3Z" fill="currentColor"></path>
                                </svg>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-3">
                {/* <div className="border-b border-gray-300">
                    <nav className="flex gap-4">
                    <a href="#" title="" className="border-b-4 border-palette py-4 text-sm font-medium text-gray-900 hover:border-mint hover:text-gray-800"> Description </a>

                    <a href="#" title="" className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                        Reviews
                        <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
                    </a>
                    </nav>
                </div> */}

                {/* <div className="mt-8 flow-root sm:mt-12">
                    <h1 className="text-3xl font-bold">Delivered To Your Door</h1>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
                    <h1 className="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
                    <p className="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
                </div> */}
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full lg:w-4/12 grid-cols-2">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="reviews">
                            Reviews
                            <span className="ml-2 block rounded-full bg-palette px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Card>
                            <CardHeader>
                                <CardTitle>About This Product</CardTitle>
                                <CardDescription>
                                    Product details Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, temporibus ducimus? Quae eum ipsum earum maiores, reiciendis iure nesciunt nemo.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquam delectus accusamus, doloribus labore blanditiis?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsum?
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="reviews">
                        <Card>
                        <CardHeader>
                            <CardTitle>Reviews</CardTitle>
                            <CardDescription>
                            Change your password here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <section className="flex items-center py-16 bg-gray-100 font-poppins dark:bg-gray-800 ">
                                    <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                            <div className="p-6 mb-6 bg-gray-50 dark:bg-gray-900">
                                                <h2 className="mb-6 text-xl font-semibold text-left font-gray-600 dark:text-gray-400">
                                                    Ratings & Reviews</h2>
                                                <div className="flex justify-start ">
                                                    <div
                                                        className="flex items-center mb-2 space-x-2 text-3xl leading-none text-gray-600 dark:text-gray-400 ">
                                                        <div className="items-center font-bold ">4.0/5</div>
                                                        <div className="items-center">
                                                            <ul className="flex items-center ">
                                                                <li>
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                            fill="currentColor"
                                                                            className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill"
                                                                            viewBox="0 0 16 16">
                                                                            <path
                                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                            </path>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                            fill="currentColor"
                                                                            className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill"
                                                                            viewBox="0 0 16 16">
                                                                            <path
                                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                            </path>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                            fill="currentColor"
                                                                            className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill"
                                                                            viewBox="0 0 16 16">
                                                                            <path
                                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                            </path>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                            fill="currentColor"
                                                                            className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill"
                                                                            viewBox="0 0 16 16">
                                                                            <path
                                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                            </path>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                            fill="currentColor"
                                                                            className="w-4 mr-1 text-palette dark:text-palette bi bi-star-half"
                                                                            viewBox="0 0 16 16">
                                                                            <path
                                                                                d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z">
                                                                            </path>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="mb-6 text-xs dark:text-gray-400">16 customer reviews</div>
                                                <div className="pb-1 mb-6">
                                                    <div className="flex items-center mb-3">
                                                        <div className="flex mr-2 text-xs text-black dark:text-gray-400">
                                                            <span className="mr-1">4</span> <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                height="16" fill="currentColor"
                                                                className="w-3 h-3 text-palette dark:text-palette bi bi-star-fill"
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <div className="w-full h-3 mr-2 bg-gray-200 md:w-80 dark:bg-gray-700">
                                                            <div className="h-3 bg-palette dark:bg-palette" style={{width: "75%"}}></div>
                                                        </div>
                                                        <div className="flex justify-end text-xs font-medium dark:text-gray-400">91% </div>
                                                    </div>
                                                    <div className="flex items-center mb-3">
                                                        <div className="flex mr-2 text-xs text-black dark:text-gray-400">
                                                            <span className="mr-1">3</span> <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                height="16" fill="currentColor"
                                                                className="w-3 h-3 text-palette dark:text-palette bi bi-star-fill"
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <div className="w-full h-3 mr-2 bg-gray-200 md:w-80 dark:bg-gray-700">
                                                            <div className="h-3 bg-palette dark:bg-palette" style={{width: "45%"}}></div>
                                                        </div>
                                                        <div className="flex justify-end text-xs font-medium dark:text-gray-400">45% </div>
                                                    </div>
                                                    <div className="flex items-center mb-3">
                                                        <div className="flex mr-2 text-xs text-black dark:text-gray-400">
                                                            <span className="mr-1">2</span> <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                height="16" fill="currentColor"
                                                                className="w-3 h-3 text-palette dark:text-palette bi bi-star-fill"
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <div className="w-full h-3 mr-2 bg-gray-200 md:w-80 dark:bg-gray-700">
                                                            <div className="h-3 bg-palette dark:bg-palette" style={{width: "25%"}}></div>
                                                        </div>
                                                        <div className="flex justify-end text-xs font-medium dark:text-gray-400">25% </div>
                                                    </div>
                                                    <div className="flex items-center ">
                                                        <div className="flex mr-2 text-xs text-black dark:text-gray-400">
                                                            <span className="mr-1">1</span> <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                height="16" fill="currentColor"
                                                                className="w-3 h-3 text-palette dark:text-palette bi bi-star-fill"
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <div className="w-full h-3 mr-2 bg-gray-200 md:w-80 dark:bg-gray-700">
                                                            <div className="h-3 bg-palette dark:bg-palette" style={{width: "14%"}}></div>
                                                        </div>
                                                        <div className="flex justify-end text-xs font-medium dark:text-gray-400">14% </div>
                                                    </div>
                                                </div>
                                                <Link href="/">
                                                    <Buttons text='Leave a Review' />
                                                </Link>
                                            </div>
                                            {/* <div className="p-6 mb-6 bg-white dark:bg-gray-900">
                                                <h2 className="mb-6 text-xl font-semibold text-left font-gray-600 dark:text-gray-400">
                                                    Leave a comment</h2>
                                                <form action="" className="">
                                                    <div className="mb-6 ">
                                                        <input type="text" placeholder="your email" 
                                                            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                                                    </div>
                                                    <div className="mb-6 ">
                                                        <textarea placeholder="write a comment" 
                                                            className="block w-full px-4 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "></textarea>
                                                    </div>
                                                    <div className="">
                                                        <button
                                                            className="px-4 py-2 text-xs font-medium text-gray-100 bg-palette hover:bg-palette dark:bg-palette dark:hover:bg-palette">
                                                            Submit comment
                                                        </button>
                                                    </div>
                                                </form>
                                            </div> */}
                                        </div>
                                        <span className="flex items-center bg-gray-50  font-poppins dark:bg-gray-800 ">
                                            <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
                                                <h2 className="mb-4 text-xl font-semibold text-left font-gray-600 dark:text-gray-400">
                                                    Recent Reviews</h2>
                                                <div className="flex flex-wrap py-4 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                                                    <div className="w-full px-4 mb-4 lg:mb-0 md:w-1/4">
                                                        <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400">
                                                            Richard David
                                                        </h2>
                                                        <p className="text-xs text-gray-600 dark:text-gray-400">Joined 12 SEP 2012. </p>
                                                    </div>
                                                    <div className="w-full px-4 mb-4 md:w-1/4 lg:mb-0">
                                                        <div className="flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"> 5.0</p>
                                                        </div>
                                                    </div>
                                                    <div className="w-full px-4 md:w-2/5">
                                                        <h2 className="mb-2 text-xl font-bold text-gray-700 dark:text-gray-300">
                                                            Quality is good than the product
                                                        </h2>
                                                        <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                            Ipsum</p>
                                                        <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">It has been the industry's standard dummy
                                                            text ever since the 1500s, when an
                                                            unknown.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap py-4 mb-6 border-b border-gray-200 dark:border-gray-700">
                                                    <div className="w-full px-4 mb-4 lg:mb-0 md:w-1/4">
                                                        <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400">
                                                            Heny Singh
                                                        </h2>
                                                        <p className="text-xs text-gray-600 dark:text-gray-400">Joined 12 SEP 2012. </p>
                                                    </div>
                                                    <div className="w-full px-4 mb-4 md:w-1/4 lg:mb-0">
                                                        <div className="flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"> 5.0</p>
                                                        </div>
                                                    </div>
                                                    <div className="w-full px-4 md:w-2/5">
                                                        <h2 className="mb-2 text-xl font-bold text-gray-700 dark:text-gray-300">
                                                            I like this product
                                                        </h2>
                                                        <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                            Ipsum</p>
                                                        <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">It has been the industry's standard dummy
                                                            text ever since the 1500s, when an
                                                            unknown.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap py-4 mb-6 border-b border-gray-200 dark:border-gray-700">
                                                    <div className="w-full px-4 mb-4 lg:mb-0 md:w-1/4">
                                                        <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400">
                                                            Jumbli lobi
                                                        </h2>
                                                        <p className="text-xs text-gray-600 dark:text-gray-400">Joined 12 SEP 2012. </p>
                                                    </div>
                                                    <div className="w-full px-4 mb-4 md:w-1/4 lg:mb-0">
                                                        <div className="flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="w-4 mr-1 text-palette dark:text-palette bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="w-4 mr-1 text-gray-400 dark:text-gray-400 bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </svg>
                                                            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"> 4.0</p>
                                                        </div>
                                                    </div>
                                                    <div className="w-full px-4 md:w-2/5">
                                                        <h2 className="mb-2 text-xl font-bold text-gray-700 dark:text-gray-300">
                                                            This product is best
                                                        </h2>
                                                        <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                            Ipsum</p>
                                                        <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">It has been the industry's standard dummy
                                                            text ever since the 1500s, when an
                                                            unknown.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                        {/* <div className="p-6 dark:bg-gray-900 bg-gray-50">
                                            <div className="flex flex-wrap items-center mb-4 space-x-2">
                                                <div className="flex self-start flex-shrink-0 cursor-pointer">
                                                    <img src="https://i.postimg.cc/JzmrHQmk/pexels-pixabay-220453.jpg" alt=""
                                                        className="object-fill w-16 h-16 rounded-full" />
                                                </div>
                                                <div className="flex items-center justify-center space-x-2 ">
                                                    <div className="block">
                                                        <div className="w-auto px-2 pb-2 ">
                                                            <div className="font-medium">
                                                                <a href="#" className="text-lg font-semibold dark:text-gray-400 hover:underline">
                                                                    <small>John Doe</small>
                                                                </a>
                                                            </div>
                                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, maiores!
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-start w-full text-xs">
                                                            <div
                                                                className="flex items-center justify-center px-2 space-x-1 font-semibold text-gray-700 dark:text-gray-400">
                                                                <a href="#" className="hover:underline">
                                                                    <span>Like</span>
                                                                </a>
                                                                <span className="self-center">.</span>
                                                                <a href="#" className="hover:underline">
                                                                    <span>Reply</span>
                                                                </a>
                                                                <span className="self-center">.</span>
                                                                <a href="#" className="hover:underline">
                                                                    <span>10m ago</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap items-center mb-4 space-x-2">
                                                <div className="flex self-start flex-shrink-0 cursor-pointer">
                                                    <img src="https://i.postimg.cc/RhQYkKYk/pexels-italo-melo-2379005.jpg" alt=""
                                                        className="object-fill w-16 h-16 rounded-full" />
                                                </div>
                                                <div className="flex items-center justify-center space-x-2 ">
                                                    <div className="block">
                                                        <div className="w-auto px-2 pb-2 ">
                                                            <div className="font-medium">
                                                                <a href="#" className="text-lg font-semibold dark:text-gray-400 hover:underline">
                                                                    <small>Adam Smith</small>
                                                                </a>
                                                            </div>
                                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, maiores!
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-start w-full text-xs">
                                                            <div
                                                                className="flex items-center justify-center px-2 space-x-1 font-semibold text-gray-700 dark:text-gray-400">
                                                                <a href="#" className="hover:underline">
                                                                    <span>Like</span>
                                                                </a>
                                                                <span className="self-center">.</span>
                                                                <a href="#" className="hover:underline">
                                                                    <span>Reply</span>
                                                                </a>
                                                                <span className="self-center">.</span>
                                                                <a href="#" className="hover:underline">
                                                                    <span>10m ago</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap items-center space-x-2">
                                                <div className="flex self-start flex-shrink-0 cursor-pointer">
                                                    <img src="https://i.postimg.cc/q7pv50zT/pexels-edmond-dant-s-4342352.jpg" alt=""
                                                        className="object-fill w-16 h-16 rounded-full" />
                                                </div>
                                                <div className="flex items-center justify-center space-x-2 ">
                                                    <div className="block">
                                                        <div className="w-auto px-2 pb-2 ">
                                                            <div className="font-medium">
                                                                <a href="#" className="text-lg font-semibold dark:text-gray-400 hover:underline">
                                                                    <small>Sedrina Set</small>
                                                                </a>
                                                            </div>
                                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, maiores!
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-start w-full text-xs">
                                                            <div
                                                                className="flex items-center justify-center px-2 space-x-1 font-semibold text-gray-700 dark:text-gray-400">
                                                                <a href="#" className="hover:underline">
                                                                    <span>Like</span>
                                                                </a>
                                                                <span className="self-center">.</span>
                                                                <a href="#" className="hover:underline">
                                                                    <span>Reply</span>
                                                                </a>
                                                                <span className="self-center">.</span>
                                                                <a href="#" className="hover:underline">
                                                                    <span>10m ago</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </section>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link href="/">
                                <Buttons text='View all Reviews' />
                            </Link>
                        </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </div>
  )
}