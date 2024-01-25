import React from 'react'
import MainDesktopNavigation from './MainDesktopNavigation'

type Props = {}

export default function MainHeader({}: Props) {
  return (
    <div className="border-y-1 flex sticky top-0 z-50 border-black/5 bg-gray-50/60 shadow-sm shadow-gray-300 backdrop-blur-lg">
        <MainDesktopNavigation />
   
    </div>
  )
}