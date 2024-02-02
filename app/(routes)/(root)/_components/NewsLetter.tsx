import Buttons from '@/components/Buttons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React from 'react'

type Props = {}

export default function NewsLetter({}: Props) {
  return (
    <div className='w-full pt-5 '>
        <div className=" md:w-11/12 mx-auto max-w-screen-xl p-3 py-6 lg:py-8">
            <Separator className='mb-5' />
            <div className="flex flex-col gap-y-5 justify-center">
                <h1 className='lg:text-3xl md:text-2xl text-sm  font-medium  '>Subscribe to our Newsletter</h1>
                <p>Find your most trusted and reliable brands while also discovering new brands </p>
            </div>
            <div className="flex flex-col md:flex-row  w-full  items-center space-x-2">
                <form className="mx-auto mt-10 w-full flex gap-x-4">
                    <Input type="email" className='border-4 border-palette placeholder:text-palette' placeholder="Your email" />
                    <Buttons text='Submit' />
                </form>
            </div>
        </div>
    </div>
  )
}