"use client"
import React from 'react';
import Link from 'next/link';
import {  ShoppingBag, Trash2, X } from 'lucide-react';
import { formatPrice } from '@/lib/format';


interface wishlistProps  {
    imageSrc: string, 
    productName: string, 
    price:number, 
    newPrice: number
}

export default function WishlistProduct({imageSrc, productName, price, newPrice}: wishlistProps) {
  return (
    <div className="border-2 rounded-lg shadow-md flex flex-col md:flex-row h-full  lg:min-h-56 lg:max-h-56 ">
    <Link href='/' className="flex w-full  md:5/12 lg:w-4/12 rounded-lg">
    <img src={imageSrc} alt={productName} className='object-cover  rounded-lg h-full w-full'  />
    </Link>
    <div className="w-full  lg:w-6/12  p-2 gap-y-2 flex justify-between flex-col">
        <Link href="/">
            <h2 className=' font-bold underline line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium earum? Aperiam, pariatur vitae. Laboriosam vitae aut magni, rem fuga aperiam animi iure cumque, nam modi saepe dolor in! Quisquam eum doloribus iure modi nostrum magni, aperiam, impedit necessitatibus quibusdam eius aspernatur quod, sed fugit sequi perspiciatis consectetur ullam soluta. Fuga laudantium nobis corrupti? Sequi reiciendis ab placeat magnam a?</h2>
        </Link>
        <div className="flex mb-4 gap-x-2">
            <span className='flex gap-x-1 items-center cursor-pointer'>
                <Trash2 className='text-palette' size={18} />
                <h4 className='text-sm md:text-xs lg:text-sm '>Remove</h4>
            </span>
            <span className='flex gap-x-1 items-center cursor-pointer'>
                <ShoppingBag  className='text-palette' size={18} />
                <h4 className='text-sm md:text-xs lg:text-sm '>Add to Cart</h4>
            </span>
        </div>
    </div>
    <div className=" w-full md:w-2/12 p-2  gap-y-2 ">
        <div className="flex font-extrabold  lg:text-sm">{formatPrice(newPrice)}</div>
        <div className="flex font-light text-sm lg:text-xs line-through ">{formatPrice(price)}</div>
    </div>
</div>
  )
}