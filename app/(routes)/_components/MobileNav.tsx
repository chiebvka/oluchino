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

import Buttons from '@/components/Buttons'
import SearchInput from './SearchInput'
import navigationLink from '@/config/navigationConfig'
import Logo from '@/icons/logo'

type NavigationItem = {
    title: string;
    href: string;
};

type Props = {}


export default function MobileNav({}: Props) {
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
        <div className='flex'>
            <Sheet>
                <SheetTrigger>
                    <AlignLeft />
                </SheetTrigger>
                <SheetContent side="left" className=' p-0   w-[350px]'>
                    <Link href="/" className='p-6 '>
                        <Logo  />
                    </Link>
                    <div className="my-5 flex flex-col gap-y-4">
                        {navigationLink.map((navigation: NavigationItem) => (
                            <SheetClose key={navigation.title}  asChild >
                                <Link 
                                    href={navigation.href}
                                    className={cn(
                                        "flex items-center py-3 pl-6 text-foreground text-sm font-[500] transition-all hover:text-slate-600 hover:bg-slate-300/20 ",
                                        isActive(navigation.href) && "text-palette border-r-4 border-r-palette bg-indigo-200/20 hover:bg-indigo-200/20 hover:text-palette"
                                    )}
                                >

                                {navigation.title}
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
  )
}