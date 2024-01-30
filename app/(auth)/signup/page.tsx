import React from 'react'
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { cn } from '@/lib/utils'
import AuthForm from '../_components/AuthForm'
import Logo from '@/icons/logo'



type Props = {}


export const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
  }



export default function page({}: Props) {

  return (
    <div className='h-full my-auto border-2 border-palette rounded-lg'>
        <div className="container relative  h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative rounded-l-lg hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
            <div className="absolute inset-0 bg-black bg-opacity-20" />
                <img src="/sinup.svg" alt="" />
            <div className="absolute z-20 border-2 border-palette p-3 flex items-center text-lg font-medium">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <div className="relative z-20 text-opacity-100 text-extrabold mt-auto">
                <blockquote className="space-y-2">
                <p className="text-lg">
                    &ldquo;Word on the street is that signing up here is like entering the enchanted forest of discounts. Even the talking trees approve! 🌳💸 🛍️💡.&rdquo;
                </p>
                <footer className="text-sm">A wise man</footer>
                </blockquote>
            </div>
            
            </div>

            <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Create an account
                </h1>
                <p className="text-sm text-muted-foreground">
                    Enter your email below to create your account
                </p>
                </div>
                <AuthForm />
                <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                    href="/terms"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Privacy Policy
                </Link>
                .
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}