import Buttons from '@/components/Buttons'
import { Link } from 'lucide-react'
import React from 'react'

type Props = {}

export default function EmptyCart({}: Props) {
  return (
    <div className='h-full w-full mx-auto py-5 rounded-lg'>
        <div className="h-2/3 border-2 border-dashed border-palette">
            <img src="./bag.png" alt="" className="object-contain w-full h-full" />
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