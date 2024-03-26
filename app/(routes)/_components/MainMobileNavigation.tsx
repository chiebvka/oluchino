

import React from 'react'

import {  ShoppingCart } from 'lucide-react'
import Link from 'next/link'



import Buttons from '@/components/Buttons'
import SearchInput from './SearchInput'
import MobileNav from './MobileNav'
import { createClient } from '@/utils/supabase/server'
import AvatarNav from './AvatarNav'


type Props = {}

export default async function MainMobileNavigation({}: Props) {

    const supabase = createClient();
    
    const {
      data: { user },
    } = await supabase.auth.getUser();

  return (
    
    <div className='"mx-auto  md:hidden w-full items-center border-2 border-black justify-between p-3 py-6 '>
        <div className="flex w-full items-center justify-between">
            <MobileNav />
            <div className='flex space-x-2'>
                <Link href="/cart" className="text-center text-gray-700 hover:text-slate-400 mr-3 transition relative">
                    <div className="text-2xl">
                        <ShoppingCart  size={25} />
                    </div>
                    <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-palette text-white text-[10px]">0</span>
                </Link>
                {user ? 
                <AvatarNav /> :
                <Link href="/login" className='-mt-2'>
                    <Buttons text='Login' />
                </Link>
                   }
            </div>
        </div>
        <div className="mt-4">
            <SearchInput />
        </div>
    </div>
  )
}