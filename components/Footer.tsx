import React from 'react';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

import { sociaLinks } from '@/config/footer';
import Logo from '@/icons/logo';


type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className=" w-full  pt-5 text-foreground">
    <div className="mx-auto w-11/12 max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
                <Link href="/">
                    <Logo />
                </Link>
              <span className="flex flex-col gap-[18px]">
                <p className='mt-4'>Your personal travel guide</p>
                <div className="flex mt-4 space-x-5  sm:mt-0">
                {sociaLinks.map((socials) =>(
                    <Link target='_blank' key={socials.id} href={socials.link} className="text-palette hover:text-foreground dark:hover:text-white">
                        <socials.icon />
                        <span className="sr-only">{socials.title}</span>
                    </Link>
                    ))}
                </div>
              </span>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-6 grid-cols-2">
              <div>
                  <h2 className="mb-6 text-base font-bold text-gray-900 capitalize dark:text-white">About</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="https://flowbite.com/" className=" text-base hover:underline">Home</Link>
                      </li>
                      <li className="mb-4">
                          <Link href="https://tailwindcss.com/" className=" text-base hover:underline">Travel</Link>
                      </li>
                      <li className="mb-4">
                          <Link href="https://tailwindcss.com/" className=" text-base hover:underline">Reviews</Link>
                      </li>
                      <li className="mb-4">
                          <Link href="https://tailwindcss.com/" className=" text-base hover:underline">Posts</Link>
                      </li>
                      <li className="mb-4">
                          <Link href="https://tailwindcss.com/" className=" text-base hover:underline">FAQs</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-base font-bold text-gray-900 capitalize dark:text-white">Support</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="https://github.com/themesberg/flowbite" className="text-base hover:underline ">Getting Started</Link>
                      </li>
                      <li className="mb-4">
                          <Link href="https://github.com/themesberg/flowbite" className="text-base hover:underline ">Help Center</Link>
                      </li>
                      <li className="mb-4">
                          <Link href="https://github.com/themesberg/flowbite" className="text-base hover:underline ">Server Status</Link>
                      </li>
                      <li className="mb-4">
                          <Link href="https://github.com/themesberg/flowbite" className="text-base hover:underline ">Report Bug</Link>
                      </li>
                      <li className="mb-4">
                          <Link href="https://github.com/themesberg/flowbite" className="text-base hover:underline ">Chat Support</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-base font-bold text-gray-900 capitalize dark:text-white">Contact Us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="#" className="hover:underline flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
                                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                            </svg>
                            <span className='text-base ml-1'> +2348144266124</span>
                          </Link>
                      </li>
                      <li className="mb-4">
                          <Link href="#" className="hover:underline flex items-center">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  width="24" height="24" viewBox="0 0 50 50">
                                <path d="M14.241,18.4c3.754,2.568,7.761,4.558,11.872,6.464c6.938-2.519,13.185-5.886,19.438-9.408 c2.351-1.325,4.713-2.664,7.107-3.993c-2.977-2.531-11.679-1.219-14.154-1.219c-7.089,0.01-14.176,0-21.275-0.01 c-2.05-0.122-4.19-0.174-6.189,0.01H8.896c-1.436,0.007-3.418-0.117-5.006,0.408c2.233,1.421,4.267,3.08,6.326,4.719 C11.526,16.413,12.848,17.446,14.241,18.4z"></path> <path d="M11.406,20.105c-3.33-2.417-6.32-5.187-9.86-7.298c-0.617,1.664-0.282,3.875-0.492,5.422 c-0.009,0.061,0.011,0.112,0.011,0.163c-0.643,2.744-0.643,5.752-0.715,8.404c-0.073,2.57-0.613,6.271-0.188,9.468 c-0.039,1.539-0.054,3.155,0.283,4.508c6.607-5.211,13.631-10.385,20.712-14.902C17.772,24.189,14.505,22.354,11.406,20.105z"></path> <path d="M53.884,20.758c0.112-2.091,0.399-4.383,0.044-6.505c-6.632,3.681-12.99,7.452-19.807,10.593 c3.883,3.246,7.842,6.352,11.729,9.555c1.641,1.352,3.268,2.725,4.871,4.133c0.581,0.509,1.155,1.027,1.728,1.548 c0.176-0.348,0.338-0.713,0.465-1.12c0.715-2.251,0.427-4.944,0.251-7.444c0.023-0.549,0.049-1.101,0.075-1.655 C53.437,26.83,53.725,23.806,53.884,20.758z"></path> <path d="M31.06,26.188c-1.508,0.635-3.035,1.249-4.607,1.808c-0.579,0.206-1.054,0.062-1.38-0.254 c-0.244-0.113-0.488-0.229-0.731-0.343c-0.094,0.099-0.197,0.192-0.327,0.273C16.54,32.346,9.06,37.833,2.109,43.331 c0.608,0.388,1.395,0.623,2.427,0.635c4.545,0.055,9.098,0.021,13.65-0.022C26.056,44.156,33.94,44,41.808,44.185 c3.041,0.069,6.359-0.134,8.658-1.776c-6.157-5.604-12.762-10.553-19.125-15.911C31.224,26.4,31.137,26.295,31.06,26.188z"></path>
                            </svg>

                            <span className='text-base ml-1'>hello@deluccis.com</span>
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
    </div>
    <hr className="my-6  border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex flex-end sm:items-center sm:justify-end">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> All Rights Reserved | <a href="https://google.com/" className="text-palette hover:underline">Terms and Conditions</a> |  <a href="https://google.com/" className="text-palette hover:underline">Privacy Policies</a>
        </span>
    </div>
  </div>
</footer>

        
  )
}