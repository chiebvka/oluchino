import Logo from '@/icons/logo'
import Link from 'next/link'
import React from 'react'

type Props = {imagesrc:any, quotes: string, author: string}

export default function AuthBanner(props: Props) {
    const {imagesrc, quotes, author} = props
  return (
    <div className="relative rounded-l-lg hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
    <div className="absolute inset-0 bg-palette bg-opacity-20" />
        <img src={imagesrc}     className="object-contain w-full h-full" alt="" />
    <div className="absolute z-20  p-3 flex items-center text-lg font-medium">
        <Link href="/">
            <Logo />
        </Link>
    </div>
    <div className="relative z-20  text-opacity-100 text-extrabold text-black mt-auto">
        <blockquote className="space-y-2">
        <p className="text-lg">
            &ldquo;{quotes}&rdquo;
        </p>
        <footer className="text-sm">{author}</footer>
        </blockquote>
    </div>
    
    </div>
  )
}