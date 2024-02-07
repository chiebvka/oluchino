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
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
import Buttons from '@/components/Buttons';
import Link from 'next/link';


type Props = {}

export default function ReviewProduct({}: Props) {
  return (
    <div className='w-full'>
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
                                </div>
                                <div className="p-6 mb-6 bg-white dark:bg-gray-900">
                                    <h2 className="mb-6 text-xl font-semibold text-left font-gray-600 dark:text-gray-400">
                                        Leave a comment</h2>
                                    <form action="" className="">
                                        <div className="flex mb-6 flex-row-reverse justify-end items-center">
                                            <input id="hs-ratings-readonly-1" type="radio" className="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="1" />
                                            <label htmlFor="hs-ratings-readonly-1" className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
                                                <svg className="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            </label>
                                            <input id="hs-ratings-readonly-2" type="radio" className="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="2" />
                                            <label htmlFor="hs-ratings-readonly-2" className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
                                                <svg className="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            </label>
                                            <input id="hs-ratings-readonly-3" type="radio" className="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="3" />
                                            <label htmlFor="hs-ratings-readonly-3" className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
                                                <svg className="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            </label>
                                            <input id="hs-ratings-readonly-4" type="radio" className="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="4" />
                                            <label htmlFor="hs-ratings-readonly-4" className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
                                                <svg className="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            </label>
                                            <input id="hs-ratings-readonly-5" type="radio" className="peer -ms-5 w-5 h-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="5" />
                                            <label htmlFor="hs-ratings-readonly-5" className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
                                                <svg className="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            </label>
                                        </div>
                                        <div className="mb-6 ">
                                            <input type="text" placeholder="Review Title" 
                                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                                        </div>
                                        <div className="mb-6 ">
                                            <textarea placeholder="Write your review" 
                                                className="block w-full px-4 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "></textarea>
                                        </div>
                                        <div className="">
                                            <Buttons text='Submit Review' />
                                        </div>
                                    </form>
                                </div>
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
                                            <p className="text-xs text-gray-600 dark:text-gray-400">24 Feb 2024 </p>
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
                                            <p className="text-xs text-gray-600 dark:text-gray-400">24 Feb 2024 </p>
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
                                            <p className="text-xs text-gray-600 dark:text-gray-400">24 Feb 2024 </p>
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
                        </div>
                    </section>
                </div>
            </CardContent>
            <CardFooter>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                        <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </CardFooter>
        </Card>
    </div>
  )
}