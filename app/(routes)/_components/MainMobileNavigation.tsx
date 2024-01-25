import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignLeft, Heart, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import Logo from '@/components/logo'
import Buttons from '@/components/Buttons'
import SearchInput from './SearchInput'

type Props = {}

export default function MainMobileNavigation({}: Props) {
  return (
    <div className='"mx-auto flex lg:hidden w-full items-center border-2 border-black justify-between px-2 py-4 '>
        <div className="flex w-full items-center justify-between">
            <div className='flex space-x-2'>
                <Sheet>
                    <SheetTrigger>
                        <AlignLeft />
                    </SheetTrigger>
                </Sheet>
                <Link href="/" className="" >
                    <Logo />
                </Link>
            </div>
            <div className='flex space-x-2'>
                <Link href="/cart" className="text-center text-gray-700 hover:text-slate-400 mr-3 transition relative">
                    <div className="text-2xl">
                        <ShoppingCart  size={25} />
                    </div>
                    <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-palette text-white text-[10px]">0</span>
                </Link>
                <Link href="/login" className='-mt-2'>
                    <Buttons text='Login' />
                </Link>

            </div>
        </div>
        <SearchInput />
    </div>
  )
}