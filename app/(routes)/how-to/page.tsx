import PageHeadings from '@/components/PageHeadings'
import React from 'react'
import HowTabs from './_components/HowTabs'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='min-h-screen w-full relative my-auto py-16 gap-y-5 px-3  max-w-6xl xl:max-w-7xl mx-auto'>
      <PageHeadings 
        title='How To'
        description='Learn how navigate and explore the deluccis website to place orders, get top deals, track your orders and much more.'
      />
      <div className="mx-auto">
        <HowTabs />
      </div>
    </div>
  )
}