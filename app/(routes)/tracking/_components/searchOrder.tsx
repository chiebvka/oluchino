"use client"

import React from 'react';

import qs from "query-string";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useDebounce } from '@/hooks/useDebounce';
import { Button } from '@/components/ui/button';

type Props = {}

export default function SearchOrder({}: Props) {

    const [value, setValue] = useState("")
    const debouncedValue = useDebounce(value);

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // useEffect(() => {
    //     if (debouncedValue.trim() !== "") {
    //      const url = qs.stringifyUrl(
    //        {
    //          url: `/order/${id}`, 
    //          query: {
    //            title: debouncedValue,
    //          },
    //        },
    //        { skipEmptyString: true, skipNull: true }
    //      );
     
    //      router.push(url);
    //    }
    //  }, [debouncedValue, router]);

  return (
    <div className="flex  w-full">
        <div className="relative w-full flex space-x-3 ">
        <label htmlFor="" className="sr-only">Search</label>
                <div className="relative flex w-full">
                    <Input type="text" className="bg-gray-50 border  px-10  text-gray-900 text-sm rounded-l block w-full  p-2.5  "
                        placeholder="Enter your order number " required />
                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 bi bi-mic"
                            viewBox="0 0 16 16">
                            <path
                                d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z">
                            </path>
                            <path
                                d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z">
                            </path>
                        </svg>
                    </button>
                </div>
                <Button type="submit" className=" ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                        className="w-3 h-3 mr-2 -ml-1 bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                        </path>
                    </svg>
                    Search
                </Button>
            {/* <Search
                className="h-4 w-4 absolute top-3 left-3 text-slate-600"
            />
            <Input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className="w-full md:w-[500px] pl-9 rounded-lg border-2 border-palette bg-slate-100 focus-visible:ring-palette"
                placeholder="Search for Order status"
            /> */}
        </div>
    </div>
  )
}