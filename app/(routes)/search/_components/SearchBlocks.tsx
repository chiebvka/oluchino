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

export default function SearchBlocks({}: Props) {
  return (
    <div>
        <div className="grid border-2 border-black w-full ">
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
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Settings
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="model">Model</Label>
                    <Select>
                      <SelectTrigger
                        id="model"
                        className="items-start [&_[data-description]]:hidden"
                      >
                        <SelectValue placeholder="Select a model" />
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
                                The most powerful model for complex
                                computations.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="temperature">Temperature</Label>
                    <Input id="temperature" type="number" placeholder="0.4" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="top-p">Top P</Label>
                    <Input id="top-p" type="number" placeholder="0.7" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="top-k">Top K</Label>
                    <Input id="top-k" type="number" placeholder="0.0" />
                  </div>
                </fieldset>
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Messages
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="role">Role</Label>
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
                  <div className="grid gap-3">
                    <Label htmlFor="content">Content</Label>
                    <Textarea id="content" placeholder="You are a..." />
                  </div>
                </fieldset>
              </form>
            </DrawerContent>
          </Drawer>
          {/* <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
          >
            <Share className="size-3.5" />
            Share
          </Button> */}
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
        <main className="flex flex-1 border-2 space-x-1 border-green-600 overflow-auto p-4 ">
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
                  <div className="flex flex-col ml-2">
                    <ul className='text-sm'>
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
                  <div className="flex flex-col ml-2">
                    <ul className='text-sm'>
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
                        Accept terms and conditions
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
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Messages
                </legend>
                <div className="grid gap-3">
                  <Label htmlFor="role">Role</Label>
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
                <div className="grid gap-3">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    placeholder="You are a..."
                    className="min-h-[9.5rem]"
                  />
                </div>
              </fieldset>
            </form>
          </div>
          <div className="relative flex border-2 border-dashed border-palette h-full min-h-[50vh] flex-col w-full rounded-xl bg-muted/50 p-4 md:basis-9/12">
            <div className="w-full grid grid-cols-2 gap-1 md:gap-3  md:grid-cols-3 ">
              {/* {Array.from({ length: 12}).map((_, index) => {
                <StoreProductCard key={index} />
              })} */}
              {Array.from({ length: 14 }).map((_, index) => (
                <StoreProductCard key={index} />
              ))}


            </div>

          </div>
        </main>
      </div>
    </div>
    </div>
  )
}