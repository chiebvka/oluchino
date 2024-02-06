import Buttons from '@/components/Buttons'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function EmptyBlog({}: Props) {
  return (
    <div className='h-full w-full mx-auto md:w-full py-5  rounded-lg'>
        <div className="h-2/3 border-2 border-dashed border-palette">
            <img src="./emptyblog.png" alt="" className="object-contain w-full h-full" />
        </div>
        <div className="flex flex-col items-center gap-y-4 mt-5 justify-center">
            <h2 className='font-extrabold text-lg md:text-3xl'>Hey there sorry but we haven't made our first post yet</h2>
            <p className='text-center text-sm md:text-base'>But if you have an idea of what you think our first post should be and want to contribute to that effect feel free to send your suggestions below</p>
            <Link href="/contact">
                <Buttons text='Submit Suggestions' />
            </Link>
            
        </div>
    </div>
  )
}