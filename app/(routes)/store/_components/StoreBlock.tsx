"use client"


import React from 'react';
import {
    Bird,
    Book,
    Bot,
    Code2,
    CornerDownLeft,
    LifeBuoy,
    ListFilter,
    Mic,
    Paperclip,
    Rabbit,
    Settings,
    Settings2,
    Share,
    // SquareTerminal,
    SquareUser,
    Star,
    Triangle,
    Turtle,
  } from "lucide-react"
  
//   import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button";
  import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
  import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label";

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Textarea } from "@/components/ui/textarea"
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import Buttons from '@/components/Buttons';
import StoreProductCard from '@/components/StoreProductCard';
import { Checkbox } from '@/components/ui/checkbox';

type Props = {}

export default function StoreBlock({}: Props) {
  return (
    <div>
        <div className="grid border-2 border-black w-full ">
      {/* <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home">
            <Triangle className="size-5 fill-foreground" />
          </Button>
        </div>
        <nav className="grid gap-1 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg bg-muted"
                aria-label="Playground"
              >
                <SquareTerminal className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Playground
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Models"
              >
                <Bot className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Models
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="API"
              >
                <Code2 className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              API
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Documentation"
              >
                <Book className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Documentation
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Settings"
              >
                <Settings2 className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Settings
            </TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="Help"
              >
                <LifeBuoy className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Help
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="Account"
              >
                <SquareUser className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Account
            </TooltipContent>
          </Tooltip>
        </nav>
      </aside> */}
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
            <h1 className="text-xl hidden md:flex items-center font-semibold">Filter     <ListFilter size={15} className='ml-2' /></h1>
            <span className="sr-only">Filter</span>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost"  className="md:hidden space-x-1">
                <span className="">Filter</span>
                <ListFilter size={12} />
                <span className="sr-only">Filter</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[80vh]">
              <DrawerHeader>
                <DrawerTitle>Configuration</DrawerTitle>
                <DrawerDescription>
                  Configure the settings for the model and messages.
                </DrawerDescription>
              </DrawerHeader>
              <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
              <fieldset className="grid gap-6 rounded-lg border border-palette p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Filter By
                </legend>
                <Separator />
                <div className="grid gap-3">
                  <Label htmlFor="model" className='text-palette'>Categories</Label>
                  <div className="flex flex-col border rounded-lg shadow-lg  h-48 overscroll-none overflow-y-auto ml-2 p-2">
                    <ul className='text-sm'>
                      <li className='cursor-pointer  text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                    </ul>
                  </div>
                </div>
                <Separator  />
                <div className="grid gap-3">
                  <Label htmlFor="model" className='text-palette'>Brands</Label>
                  <div className="flex flex-col border rounded-lg shadow-lg  h-48 overscroll-none overflow-y-auto ml-2 p-2">
                    <ul className='text-sm'>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                    </ul>
                  </div>
                </div>
                <Separator  />
                <div className="grid gap-3">
                  <Label htmlFor="model" className='text-palette'>Discounts</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                      <span className="text-xs font-medium text-palette/60 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Items on Sale
                      </span>
                  </div>
                </div>
                <Separator  />
                <div className="grid gap-3">
                  <Label htmlFor="model" className='text-palette'>Express Delivery</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                      <span className="text-xs font-medium text-palette/60 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Get Orders in 24-48 hours
                      </span>
                  </div>
                </div>
                <Separator  />
                <div className="grid gap-3">
                <Label htmlFor="temperature" className='my-3 text-palette'>Price Range</Label>
                  <div className="grid grid-cols-2 gap-4">  
                    <div className="grid gap-3">
                      <Label htmlFor="top-p" className='text-mint'>Lowest</Label>
                      <Input id="top-p" type="number" placeholder="0.7" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k" className='text-mint'>Highest</Label>
                      <Input id="top-k" type="number" placeholder="0.0" />
                    </div>
                  </div>
                </div>
              </fieldset>
              </form>
            </DrawerContent>
          </Drawer>
          <div className="flex items-center ml-auto space-x-1">
            <Label htmlFor="model" className='flex w-24 items-center'>Sort By:</Label>
            <Select defaultValue="system">
                <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="system">System</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="assistant">Assistant</SelectItem>
                </SelectContent>
            </Select>
          </div>
        </header>
        <main className="flex flex-1 border-2 space-x-1 border-green-600 overflow-auto md:p-4 ">
        {/* <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3"> */}
          <div className="relative hidden flex-col  gap-8 md:flex md:basis-3/12">
            <form className="grid w-full items-start gap-6">
              <fieldset className="grid gap-6 rounded-lg border border-palette p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Filter By
                </legend>
                <Separator />
                <div className="grid gap-3">
                  <Label htmlFor="model" className='text-palette'>Categories</Label>
                  <div className="flex flex-col border rounded-lg shadow-lg  h-48 overscroll-none overflow-y-auto ml-2 p-2">
                    <ul className='text-sm'>
                      <li className='cursor-pointer  text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                    </ul>
                  </div>
                  {/* <Select>
                    <SelectTrigger
                      id="model"
                      className="items-start [&_[data-description]]:hidden"
                    >
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="genesis">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Rabbit className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Neural{" "}
                              <span className="font-medium text-foreground">
                                Genesis
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Our fastest model for general use cases.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="explorer">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Bird className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Neural{" "}
                              <span className="font-medium text-foreground">
                                Explorer
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Performance and speed for efficiency.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="quantum">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Turtle className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Neural{" "}
                              <span className="font-medium text-foreground">
                                Quantum
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              The most powerful model for complex computations.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select> */}
                </div>
                <Separator  />
                <div className="grid gap-3">
                  <Label htmlFor="model" className='text-palette'>Brands</Label>
                  <div className="flex flex-col border rounded-lg shadow-lg  h-48 overscroll-none overflow-y-auto ml-2 p-2">
                    <ul className='text-sm'>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                      <li className='cursor-pointer my-1 text-gray-800 hover:text-palette'>Apple</li>
                    </ul>
                  </div>
                </div>
                <Separator  />
                <div className="grid gap-3">
                  <Label htmlFor="model" className='text-palette'>Discounts</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                      <span className="text-xs font-medium text-palette/60 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Items on Sale
                      </span>
                  </div>
                </div>
                <Separator  />
                <div className="grid gap-3">
                  <Label htmlFor="model" className='text-palette'>Express Delivery</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                      <span className="text-xs font-medium text-palette/60 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Get Orders in 24-48 hours
                      </span>
                  </div>
                </div>
                <Separator  />
                <div className="grid gap-3">
                <Label htmlFor="temperature" className='my-3 text-palette'>Price Range</Label>
                  <div className="grid grid-cols-2 gap-4">  
                    <div className="grid gap-3">
                      <Label htmlFor="top-p" className='text-mint'>Lowest</Label>
                      <Input id="top-p" type="number" placeholder="0.7" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k" className='text-mint'>Highest</Label>
                      <Input id="top-k" type="number" placeholder="0.0" />
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="relative flex border-2 border-dashed border-palette my-2 h-full min-h-[50vh] flex-col w-full rounded-xl bg-muted/50 md:p-4 md:basis-9/12">
            <div className="w-full grid grid-cols-2 gap-1 md:gap-3  md:grid-cols-3 ">
              {/* {Array.from({ length: 12}).map((_, index) => {
                <StoreProductCard key={index} />
              })} */}
              {Array.from({ length: 17 }).map((_, index) => (
                <StoreProductCard key={index} />
              ))}


            </div>
            <div className="flex border-2 rounded-lg my-3">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </main>
      </div>
    </div>
    </div>
  )
}