import { Separator } from '@/components/ui/separator'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Advertorials({}: Props) {
  return (
    <div className='w-full pt-5 '>
        <div className="md:w-11/12 mx-auto max-w-screen-xl p-4 md:p-3 py-6 lg:py-8">
        <Separator className='mb-5' />
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col justify-center md:basis-1/3 h-96  rounded-lg collection-card has-before hover:shine gap-y-5  md:px-5 px-2 py-8 relative">
                    <div style={{backgroundImage: `url('./collection2.jpg')`}} className='has-bg-image '></div>
                    <div className="absolute inset-0  bg-mint  bg-opacity-20" />
                    <h2 className=" md:text-2xl text-base text-foreground  font-extrabold ">Summer Collection</h2>
            
                    <p className="card-text">Starting at $17.99</p>

                    <span className="flex z-20 items-center  border-l-4  border-l-slate-600 pl-2 pt-1">

                        <Link href="/" className="span mr-1 -mt-1 text-sm">Shop Now</Link>

                        <ArrowRight size={20} />
                    </span>
                </div>
                <div className="flex flex-col justify-center md:basis-1/3 h-96  rounded-lg collection-card has-before hover:shine gap-y-5  md:px-5 px-2 py-8 relative">
                    <div style={{backgroundImage: `url('./collection1.jpg')`}} className='has-bg-image '></div>
                    <div className="absolute inset-0  bg-palette  bg-opacity-20" />
                    <h2 className=" md:text-2xl text-base text-foreground  font-extrabold ">Summer Collection</h2>
            
                    <p className="card-text">Starting at $17.99</p>

                    <span className="flex z-20 items-center  border-l-4  border-l-slate-600 pl-2 pt-1">

                        <Link href="/" className="span mr-1 -mt-1 text-sm">Shop Now</Link>

                        <ArrowRight size={20} />
                    </span>
                </div>
                <div className="flex flex-col justify-center md:basis-1/3 h-96  rounded-lg collection-card has-before hover:shine gap-y-5  md:px-5 px-2 py-8 relative">
                    <div style={{backgroundImage: `url('./collection3.jpg')`}} className='has-bg-image '></div>
                    <div className="absolute inset-0  bg-mint  bg-opacity-20" />
                    <h2 className=" md:text-2xl text-base text-foreground  font-extrabold ">Summer Collection</h2>
            
                    <p className="card-text">Starting at $17.99</p>

                    <span className="flex z-20 items-center  border-l-4  border-l-slate-600 pl-2 pt-1">

                        <Link href="/" className="span mr-1 -mt-1 text-sm">Shop Now</Link>

                        <ArrowRight size={20} />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}