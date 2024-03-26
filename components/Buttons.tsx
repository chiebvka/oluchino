import React from 'react'
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"


type Props = {text: string}

const buttonVariants = cva(
  "inline-flex items-center relative  justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-palette text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // deluccis: 
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export default function Buttons(props: Props) {
    const {text} = props
  return (
    <button  className=' relative inline-flex  md:px-3 px-2 py-2 font-medium group'>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-mint group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-palette border-2 border-slate-400 group-hover:bg-mint"></span>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-0 translate-y-0 bg-palette group-hover:translate-x-1 group-hover:translate-y-1"></span>
        <span className="relative text-white transition text-[8px] md:text-xs lg:text-sm duration-200 ease-out group-hover:translate-y-1" >{text}</span>
    </button>

  )
}