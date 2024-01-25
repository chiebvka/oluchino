import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Logo({}: Props) {
  return (
        <Image 
            height={120}
            width={120}
            alt='logo'
            src="/logo.svg"
        />
  )
}