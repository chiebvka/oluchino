import React from 'react';
import Link from 'next/link';

import { deluccisLinks, legalLinks, sociaLinks } from '@/config/footer';
import Logo from '@/icons/logo';
import { Mails, PhoneCall } from 'lucide-react';
import { Separator } from './ui/separator';


type Props = {}

export default function Footer({}: Props) {
    const years = new Date()
  return (
    <footer className=" w-full pt-5 text-foreground">
      <Separator className='mt-5' />
      <div className="mx-auto w-11/12 max-w-screen-xl p-3 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
                <Link href="/">
                    <Logo />
                </Link>
              <span className="flex flex-col gap-[18px]">
                <p className='mt-4'>Your personal travel guide</p>
                <div className="flex mt-4 space-x-5  sm:mt-0">
                {sociaLinks.map((socials) =>(
                    <Link target='_blank' key={socials.id} href={socials.link} className="text-palette hover:text-mint dark:hover:text-white">
                        <socials.icon />
                        <span className="sr-only">{socials.title}</span>
                    </Link>
                    ))}
                </div>
              </span>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-6 grid-cols-2">
              <div>
                  <h2 className="mb-6 text-base font-bold text-gray-900 capitalize dark:text-white">Deluccis </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    {deluccisLinks.map((deluccis) => (
                        <li className="mb-4" key={deluccis.title}>
                            <Link href={deluccis.link} className=" text-base hover:underline">{deluccis.title}</Link>
                        </li>
                    ))}
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-base font-bold text-gray-900 capitalize dark:text-white">Legal & Support</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    {legalLinks.map((legal) => (
                        <li className="mb-4" key={legal.title}>
                            <Link href={legal.link} className=" text-base hover:underline">{legal.title}</Link>
                        </li>
                    ))}
                  </ul>
              </div>
              <div className=' hidden lg:flex flex-col '>
                  <h2 className="mb-6 text-base font-bold text-gray-900 capitalize dark:text-white">Contact Us</h2>
                  <ul className="text-gray-500 dark:text-gray-400  font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline flex items-center">
                            <PhoneCall size={22} />
                            <span className='text-base ml-1'> +2348144266124</span>
                          </a>
                      </li>
                      <li className="mb-4">
                          <a href="mailto:hello@deluccis.com" className="hover:underline  flex items-center">
                            <Mails size={22} />
                            <span className='text-base ml-1'> hello@deluccis.com</span>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
          <div className='mt-5 lg:hidden'>
                  <h2 className="mb-6 text-base font-bold text-gray-900 capitalize dark:text-white">Contact Us</h2>
                  <ul className="text-gray-500 dark:text-gray-400   font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline flex items-center">
                            <PhoneCall size={25} />
                            <span className='text-base ml-1'> +2348144266124</span>
                          </a>
                      </li>
                      <li className="mb-4">
                          <a href="mailto:hello@deluccis.com" className="hover:underline flex items-center">
                            <Mails size={25} />
                            <span className='lg:text-base ml-1'> hello@deluccis.com</span>
                          </a>
                      </li>
                  </ul>
          </div>
        </div>
        <hr className="my-6  border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex flex-end sm:items-center sm:justify-end">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> © {years.getFullYear()} All Rights Reserved | Developed by  <a href="https://www.bexoni.com/" target='_blank' className="text-palette hover:underline">Bexoni labs</a> </span>
        </div>
      </div>
    </footer>

        
  )
}