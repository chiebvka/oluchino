import React from 'react';
import { Metadata } from "next";
import Link from "next/link";
import AuthBanner from '../_components/AuthBanner';
import ResetForm from './_components/ResetForm';



export const metadata: Metadata = {
    title: "Deluccis",
    description: "Reset Password",
  }


type Props = {}

export default function page({}: Props) {
  return (
    <div className='h-full border-2 w-11/12 mx-auto md:w-full border-palette rounded-lg'>
    <div className="container relative w-full h-full flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <AuthBanner imagesrc={"./reset.svg"} quotes={"I hear someone forgot their credentials. well here you let's make a new one 🗝️🏛️"} author={"The Librarian"} />

        <div className="lg:p-8  flex items-center w-full justify-center">
        <div className="mx-auto flex w-full flex-col justify-center  space-y-6 ">
            <div className="flex flex-col space-y-2 text-center">
            <Link
                href="/"
                className="absolute right-8  top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
                >
                <polyline points="15 18 9 12 15 6" />
                </svg>{" "}
                Back
            </Link>
            <h1 className="text-2xl font-semibold text-palette tracking-tight">
                Password Reset
            </h1>
            <p className="text-sm text-muted-foreground">
                Put in your new Password
            </p>
            </div>
            <ResetForm />

        </div>
        </div>
    </div>
    </div>
  )
}