import React from 'react'


type Props = {text: string}

export default function Buttons(props: Props) {
    const {text} = props
  return (
    <button  className=' relative flex px-5 py-2 font-medium group'>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-mint group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-palette border-2 border-slate-400 group-hover:bg-mint"></span>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-0 translate-y-0 bg-palette group-hover:translate-x-1 group-hover:translate-y-1"></span>
        <span className="relative text-white transition duration-200 ease-out group-hover:translate-y-1" >{text}</span>
  </button>
  )
}