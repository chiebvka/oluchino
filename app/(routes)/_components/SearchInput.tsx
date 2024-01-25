"use client";



import qs from "query-string";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useDebounce } from "@/hooks/useDebounce";
import { Input } from "@/components/ui/input";
import Link from "next/link";

type Props = {}

export default function SearchInput({}: Props) {

    const [value, setValue] = useState("")
    const debouncedValue = useDebounce(value);

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const isActiveLink = (href: string) => {
        return pathname === href;
      };
  
    // const currentCategoryId = searchParams.get("categoryId");

    useEffect(() => {
   if (debouncedValue.trim() !== "") {
    const url = qs.stringifyUrl(
      {
        url: "/store", 
        query: {
          title: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }
}, [debouncedValue, router]);

  return (
    <div className="flex flex-col">
        <div className="relative">
            <Search
                className="h-4 w-4 absolute top-3 left-3 text-slate-600"
            />
            <Input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className="w-full md:w-[500px] pl-9 rounded-lg border-2 border-palette bg-slate-100 focus-visible:ring-palette"
                placeholder="Search for a product, brand or category"
            />
        </div>
        <div className="flex border-2 border-mint items-center justify-center gap-x-6">
        <Link href="/" 
        passHref 
         className={`relative inline-flex items-center rounded-full px-4 py-1.5 text-base font-semibold tracking-tight ${
            isActiveLink("/") ? "text-mint" : "text-gray-500"
          } antialiased ring-1 ring-transparent transition duration-200  active:scale-[96%] active:ring-black/20`}
        >
            New Arrivals
        </Link>
        <Link href="/store" 
            passHref
            className={`relative inline-flex items-center rounded-full px-4 py-1.5 text-base font-semibold tracking-tight ${
                isActiveLink("/store") ? "text-mint" : "text-gray-500"
              } antialiased ring-1 ring-transparent transition duration-200  active:scale-[96%] active:ring-black/20`}
        >
            Store
        </Link>
        </div>
    </div>
  )
}