"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import { CheckCheck, Heart, Trash2, X } from 'lucide-react'
import { Input } from '@/components/ui/input';
import { formatPrice } from '@/lib/format';
import Image from 'next/image';



interface cartProps {imageSrc: string, productName: string, inStock: boolean, pickup: boolean, price: number, newPrice: number }

export default function CartProduct({imageSrc, productName, inStock, pickup, price, newPrice}: cartProps) {
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
    <div className="border-2 rounded-lg shadow-md flex flex-col md:flex-row h-full  lg:min-h-56 lg:max-h-56 ">
        <Link href='/' className="flex w-full basis-2/6 rounded-lg">
        <Image src={imageSrc} alt={productName} className='object-cover  rounded-l-lg min-h-44 max-h-44  md:min-h-48 md:max-h-48 lg:min-h-56 lg:max-h-56 h-full w-full' width={500} height={500}  />
        </Link>
        <div className="w-full  basis-3/6   p-2 gap-y-2 flex flex-col">
            <Link href="/">
                <h2 className=' font-bold underline text-sm line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium earum? Aperiam, pariatur vitae. Laboriosam vitae aut magni, rem fuga aperiam animi iure cumque, nam modi saepe dolor in! Quisquam eum doloribus iure modi nostrum magni, aperiam, impedit necessitatibus quibusdam eius aspernatur quod, sed fugit sequi perspiciatis consectetur ullam soluta. Fuga laudantium nobis corrupti? Sequi reiciendis ab placeat magnam a?</h2>
            </Link>
            <div className="flex flex-col">
                <span className='flex gap-x-2 items-center'>
                    {inStock === true ?  <CheckCheck className='text-mint' size={16} /> : <X className='text-red-600' size={16} /> }
                {/* <CheckCheck className='text-mint' size={16} /> */}
                <h4 className='text-xs'>In Stock</h4>
                </span>
                <span className='flex gap-x-2 items-center'>
                {pickup === true ?  <CheckCheck className='text-mint' size={16} /> : <X className='text-red-600' size={16} /> }
                {/* <X className='text-red-600' size={16} /> */}
                <h4 className='text-xs'>Available for pickup</h4>
                </span>
            </div>
            <div className="flex mt-2 ">
                <form className='flex gap-x-2 items-center justify-center w-full md:w-9/12 lg:w-5/12'>
                    <label htmlFor="quantity"></label>
                    <button onClick={(e) => decrease(e)} className=' bg-palette basis-2/6 rounded-lg text-white hover:text-palette hover:bg-mint h-full cursor-pointer outline-none'>
                        <span className=' text-xl font-thin'>-</span>
                    </button>
                    <Input 
                        type="number" 
                        value={value}
                        readOnly
                        name='quantity'
                        className='flex items-center justify-center text-center basis-3/6 ' 
                    />
                    <button onClick={(e) => increase(e)} className=' bg-palette basis-2/6 rounded-lg text-white hover:text-palette hover:bg-mint h-full cursor-pointer outline-none'>
                        <span className='text-xl rounded-lg font-thin'>+</span>
                    </button>
                </form>
            </div>
            <div className="flex  gap-x-2">
                <span className='flex gap-x-1 items-center cursor-pointer'>
                    <Trash2 className='text-palette' size={18} />
                    <h4 className='text-sm md:text-xs lg:text-sm '>Remove</h4>
                </span>
                <span className='flex gap-x-1 items-center cursor-pointer'>
                    <Heart  className='text-palette' size={18} />
                    <h4 className='text-sm md:text-xs lg:text-sm '>Add to wishlist</h4>
                </span>
            </div>
        </div>
        <div className=" w-full basis-1/6 flex flex-col md:items-end  p-2 gap-y-2 ">
            <div className="flex font-bold text-sm">{formatPrice(newPrice)}</div>
            <div className="flex font-light text-xs line-through ">{formatPrice(price)}</div>
        </div>
    </div>
  )
}