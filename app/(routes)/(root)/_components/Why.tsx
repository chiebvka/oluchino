"use client"

import { Separator } from '@/components/ui/separator';
import { Clock3, ShieldHalf,  Wallet } from 'lucide-react';
import React from 'react';

type Props = {}

export default function Why({}: Props) {
  return (
    <div className='w-full pt-5 '>
        <div className="md:w-11/12 mx-auto max-w-screen-xl p-4 md:p-3 py-6 lg:py-8">
            <Separator className='mb-5' />
            <div className="flex flex-col gap-y-5 justify-center">
                <h1 className='lg:text-3xl md:text-2xl text-sm  font-medium  '>Why Deluccis</h1>
                <p>Find your most trusted and reliable brands while also discovering new brands </p>
            </div>
            <div className="flex flex-col mt-3 md:flex-row gap-6">
                <div className="flex flex-col justify-center items-center md:basis-1/3 h-96 border-2 border-palette rounded-lg collection-card has-before hover:shine gap-y-5  md:px-5 px-2 py-8 relative">
                    {/* <div style={{backgroundImage: `url('./collection2.jpg')`}} className='has-bg-image '></div> */}
                    <div className="absolute inset-0  bg-palette  bg-opacity-20" />
                    <ShieldHalf size={48} className='text-palette' />
                    <h2 className=" md:text-2xl text-base text-foreground  font-extrabold ">100% Top Quality</h2>
            
                    <p className="text-center">Only the finest materials, machines and people will be involved in fulfilling your order</p>
                </div>
                <div className="flex flex-col justify-center items-center md:basis-1/3 h-96 border-2 border-mint rounded-lg collection-card has-before hover:shine gap-y-5  md:px-5 px-2 py-8 relative">
                    {/* <div style={{backgroundImage: `url('./collection2.jpg')`}} className='has-bg-image '></div> */}
                    <div className="absolute inset-0  bg-mint  bg-opacity-20" />
                    <Clock3 size={48} className='text-palette' />
                    <h2 className=" md:text-2xl text-base text-foreground  font-extrabold ">Fast Turnaround Within Days</h2>
            
                    <p className="text-center">Your order gets to you within 3-7 working days via DHL or our very own Deluccis Direct.</p>
                </div>
                <div className="flex flex-col justify-center items-center md:basis-1/3 h-96 border-2 border-palettes rounded-lg collection-card has-before hover:shine gap-y-5  md:px-5 px-2 py-8 relative">
                    {/* <div style={{backgroundImage: `url('./collection2.jpg')`}} className='has-bg-image '></div> */}
                    <div className="absolute inset-0  bg-palettes  bg-opacity-20" />
                    <Wallet size={48} className='text-palette' />
                    <h2 className=" md:text-2xl text-base text-foreground  font-extrabold ">Pocket Friendly</h2>
            
                    <p className="text-center">All products are adequately priced to ensure you get value for your money at all times.</p>
                </div>
            </div>
        </div>
    </div>
  )
}