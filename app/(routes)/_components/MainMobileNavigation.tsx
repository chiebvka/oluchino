"use client"

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignLeft, Heart, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import Logo from '@/components/logo'
import Buttons from '@/components/Buttons'
import SearchInput from './SearchInput'
import navigationLink from '@/config/navigationConfig'

type NavigationItem = {
    title: string;
    href: string;
  };


type Props = {}

export default function MainMobileNavigation({}: Props) {

    const pathname = usePathname();
    const router = useRouter();

    const isActive = (href: string) =>
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

    const onClick = (href: string) => {
        router.push(href);
    };

  return (
    
    <div className='"mx-auto  lg:hidden w-full items-center border-2 border-black justify-between px-2 py-4 '>
        <div className="flex w-full items-center justify-between">
            <div className='flex'>
                <Sheet>
                    <SheetTrigger>
                        <AlignLeft />
                    </SheetTrigger>
                    <SheetContent side="left" className='w-[350px]'>
                        <Link href="/" >
                            <Logo />
                        </Link>
                        <div className="border-2 border-black my-5 flex flex-col gap-y-4">
                            {navigationLink.map((navigation: NavigationItem) => (
                                <SheetClose key={navigation.title}  asChild>
                                    <Link 
                                        href={navigation.href}
                                        className={cn(
                                            "flex items-center py-3 text-foreground text-sm font-[500] transition-all hover:text-slate-600 hover:bg-slate-300/20 ",
                                            isActive(navigation.href) && "text-palette bg-indigo-200/20 hover:bg-indigo-200/20 hover:text-palette"
                                        )}
                                    >

                                    {navigation.title}
                                    {/* <div className={cn("ml-auto flex h-[500] opacity-0 border-2 border-palette tarnsition-all",
                                        isActive(navigation.href) && "opacity-100")}/> */}
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
                <Link href="/" className="ml-4" >
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
        <div className="mt-4">
            <SearchInput />
        </div>
    </div>
  )
}