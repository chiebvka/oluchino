import React from 'react'
import Buttons from '../../../../components/Buttons';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';


type Props = {}

export default function Collection({}: Props) {
  return (
    <div className='w-full pt-5 '>
      <div className=" md:w-11/12 mx-auto max-w-screen-xl p-3 py-6 lg:py-8">
        <Separator className='mb-5' />
        <div className="flex md:gap-x-5">
          <div className="hidden md:basis-2/3 md:flex  w-full relative ">
            <div className="collection-card h-full has-before flex flex-col rounded-lg w-full gap-y-5 px-5 py-2 justify-center hover:shine">
            {/* <div style={{ backgroundImage: `url('${brand.brandImg}')` }} className=' rounded-lg'></div> */}
              <div style={{backgroundImage: `url('./sofocollection1.avif')`}} className='has-bg-image rounded-lg '></div>
              <div className="absolute inset-0  bg-mint bg-opacity-20" />
              <h2 className="text-3xl text-foreground font-extrabold">Summer Collection</h2>
              <p className="text-xl text-foreground font-bold mt-2">Starting at # 170,000</p>
              <div className="w-1/4">
                <Link href="/">
                  <Buttons text='View More' />  
                </Link>
              </div>
            </div>
          </div>
          <div className="md:basis-1/3 flex md:block  w-full ">
            <div className="flex md:flex-col w-full gap-x-3 md:gap-y-4">
              <div className="collection-card h-full has-before flex flex-col rounded-lg w-full gap-y-5 md:px-5 px-2 py-8 justify-center hover:shine">
                <div style={{backgroundImage: `url('./sofocollection1.avif')`}} className='has-bg-image rounded-lg'></div>
                <div className="absolute inset-0  bg-palette  bg-opacity-20" />
                <h2 className="md:text-2xl text-base text-foreground  font-extrabold">Summer Collection</h2>
                <p className="md:text-lg text-xs text-foreground font-normal md:font-bold mt-2">Starting at # 170,000</p>
                <div className="w-full md:w-3/4">
                  <Link href="/">
                    <Buttons text='View More' />  
                  </Link>
                </div>
              </div>
              <div className="collection-card h-full has-before flex flex-col rounded-lg w-full gap-y-5 md:px-5 px-2 py-8 justify-center hover:shine">
                <div style={{backgroundImage: `url('./sofocollection1.avif')`}} className='has-bg-image rounded-lg'></div>
                <div className="absolute inset-0  bg-mint  bg-opacity-20" />
                <h2 className="md:text-2xl text-base text-foreground  font-extrabold">Summer Collection</h2>
                <p className="md:text-lg text-xs text-foreground font-normal md:font-bold mt-2">Starting at # 170,000</p>
                <div className="w-full md:w-3/4">
                  <Link href="/" className='z-20'>
                    <Buttons text='View More' />  
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}