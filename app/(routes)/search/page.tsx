import PageHeadings from '@/components/PageHeadings'
import React from 'react'
import SearchBlocks from './_components/SearchBlocks'

type Props = {}

export default function page({}: Props) {
  return (
    <div  className='min-h-screen w-full relative my-auto py-16 gap-y-5 px-3 max-w-6xl xl:max-w-7xl mx-auto '>
    <PageHeadings
      title='Store Catalog' 
      description='Find your most trusted and reliable brands at the best possible prices'
    />
    <SearchBlocks />
  </div>
  )
}
