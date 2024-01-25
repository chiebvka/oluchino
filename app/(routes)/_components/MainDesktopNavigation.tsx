import Buttons from '@/components/Buttons'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SearchInput from './SearchInput'

type Props = {}

export default function MainDesktopNavigation({}: Props) {
  return (
    <>
        <nav className="mx-auto hidden max-w-7xl w-full items-center border-2 border-black justify-between px-2 py-4 md:flex">
          <Link
            href="/"
            className=" rounded-md no-underline   text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
          >
            <div className="p-6 border">
                <Logo />
            </div>
          </Link>
          <div className="">
            <SearchInput />
          </div>
          <div className="flex">
            <div className="flex mx-4 space-x-4">
              <Link href="/cart" className="text-center text-gray-700 hover:text-slate-400 transition relative">
                  <div className="text-2xl">
                      <Heart  size={25} />
                  </div>
                  <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-palette text-white text-[10px]">0</span>
              </Link>
              <Link href="/cart" className="text-center text-gray-700 hover:text-slate-400 transition relative">
                  <div className="text-2xl">
                      <ShoppingCart size={25} />
                  </div>
                  <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-palette text-white text-[10px]">0</span>
              </Link>
            </div>
            <div className="flex -mt-2 ml-4">
              <Link href="/login">
                <Buttons text='Login' />
              </Link>
            </div>
          </div>
        </nav>
    </>
  )
}