"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";
  import { Button } from "@/components/ui/button"

import React from 'react'
import Link from "next/link";
import { PenLine } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Profile from "@/types/Profile";

type Props = {}
interface ProtectedSettingsProfileProps {
    user: Profile;
  }

export default function ProfileCard({user}: ProtectedSettingsProfileProps) {
    const email = user?.email || ""
    const name = user?.firstName ||  "Your First Name"
  return (
        <Card className="w-full border-2 border-palette hover:shadow-2xl shadow-lg p-2 rounded-lg">
            <Link href="/profile/edit">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>User Profile</CardTitle>
                        <CardDescription>
                        Here are your profile details 
                        </CardDescription>
                    </div>
                    <div className="border-2 border-palette rounded-full p-1">
                        <PenLine className="text-palette" />
                    </div>
                </CardHeader>
                <Separator />
                <CardContent className="grid my-2 gap-6">
                    <div className="flex items-center justify-between space-x-4">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                            <AvatarImage src="/avatars/01.png" />
                            <AvatarFallback>{email.charAt(0).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                            <p className="text-sm font-medium leading-none">{name}</p>
                            <p className="text-sm text-muted-foreground">{email}</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Link>
        </Card>
  )
}