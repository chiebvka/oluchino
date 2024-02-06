import Buttons from '@/components/Buttons'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function EmptyWishlist({}: Props) {
  return (
    <div className='h-full w-full mx-auto md:w-full py-5  rounded-lg'>
      <div className="h-2/3 border-2 border-dashed border-palette">
          <img src="./wishlist.png" alt="" className="object-contain w-full h-full" />
      </div>
      <div className="flex flex-col items-center gap-y-4 mt-5 justify-center">
          <h2 className='font-extrabold text-lg md:text-3xl'>You haven't added anything...yet!</h2>
          <p className='text-center text-sm md:text-base'>Once you do, it'll show up here so you can complete your purchases.</p>
          <Link href="/">
              <Buttons text='Discover Products' />
          </Link>
          
      </div>
    </div>
  )
}