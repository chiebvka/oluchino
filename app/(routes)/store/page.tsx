import React from 'react'
import StoreBlock from './_components/StoreBlock'
import PageHeadings from '@/components/PageHeadings'

type Props = {}

export default function page({}: Props) {
  return (
    <div  className='min-h-screen w-full relative my-auto py-16 gap-y-5 px-3 max-w-6xl xl:max-w-7xl mx-auto '>
      <PageHeadings
        title='Store Catalog' 
        description='Find your most trusted and reliable brands at the best possible prices'
      />
      <StoreBlock />
    </div>
  )
}