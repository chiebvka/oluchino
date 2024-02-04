import Buttons from '@/components/Buttons'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SearchInput from './SearchInput'
import navigationLink from '@/config/navigationConfig'
import Logo from '@/icons/logo'

type Props = {}

export default function MainDesktopNavigation({}: Props) {
  return (
    <>
        <nav className="mx-auto hidden max-w-7xl w-full items-center border-2 border-black justify-between p-4 py-6 md:flex">
          <Link
            href="/"
            className=" rounded-md no-underline   text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
          >
            <div className="p-6 border">
                <Logo />
            </div>
          </Link>
          <div className="border-2 flex flex-col gap-y-2 border-black">
            <SearchInput />
            <div className="flex border-2 border-mint mt-2 items-center justify-center gap-x-6">
              {navigationLink.map((navigation) => (
                <Link key={navigation.title} href={navigation.href}>
                  {navigation.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex">
            <div className="flex mx-4 space-x-4">
              <Link href="/wishlist" className="text-center text-gray-700 hover:text-slate-400 transition relative">
                  <div className="text-2xl">
                      <Heart  size={25} />
                  </div>
                  <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-palette text-white text-[10px]">0</span>
              </Link>
              <Link href="/cart" className="text-center text-gray-700 hover:text-slate-400 transition relative">
                  <div className="text-2xl">
                      <ShoppingBag size={25} />
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