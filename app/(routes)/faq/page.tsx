import PageHeadings from '@/components/PageHeadings'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {}

export default function page({}: Props) {
  return (
    <div className='min-h-screen w-full relative my-auto py-16 gap-y-5 px-3  max-w-6xl xl:max-w-7xl mx-auto '>
      <PageHeadings 
        title='Frequently Asked Questions'
        description='Get all the answers to the most frequently asked questions (FAQs) regarding some of our popular categories and a whole lot more from premium brands as well as managing your account, payment, vouchers and much, much more.'
      />
      <div className='flex gap-y-5 items-start relative justify-center shadow-lg gap-6 rounded-lg p-5 md:p-8 h-full  w-full border border-palette'>
        
        <div className="absolute inset-0 bg-palette -z-10 bg-opacity-10" />
        <Accordion type="single" collapsible className="w-full ">
          <AccordionItem value="item-1">
            <AccordionTrigger className='font-bold'>Can I buy in bulk?</AccordionTrigger>
            <AccordionContent>
              For all your Corporate Procurement, Gift Vouchers and Consumer Promotion Activities, please contact us on <a href="tel:+2349040361226" className='text-palette'>09040361226</a> or email us at <a href="mailto:hello@deluccis.com" className='text-palette'>hello@deluccis.com</a>  or visit the Bulk Purchase Page to learn more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className='font-bold'>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className='font-bold'>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}