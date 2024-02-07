import PageHeadings from '@/components/PageHeadings'
import React from 'react'
import ContactCard from './_components/ContactCard'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='min-h-screen w-full relative my-auto py-16 gap-y-5 px-3 max-w-7xl mx-auto '>
      <PageHeadings 
        title='Contact Us' 
        description="We'd love to hear from you. Start a chat with our customer friendly team"
      />
      <div className='flex gap-x-6 gap-y-5 items-start justify-center gap-6 rounded-lg p-5 md:p-8 h-full w-full border-2 border-black'>
        <div className="flex w-full">
          <ContactCard /> 
        </div>
      </div>
    </div>
  )
}