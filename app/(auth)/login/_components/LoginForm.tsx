"use client"

import React from 'react';

import { cn } from "@/lib/utils";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import signIn from '@/actions/auth/login';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import LoginButton from './LoginButton';
import AuthGoogle from '../../signup/_components/AuthGoogle';

type Props = {}
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function LoginForm({ className, ...props }: UserAuthFormProps) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter()
    const {toast} = useToast()
    
;
  const resetParams = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("status");
    router.replace(`${pathname}?${params.toString()}`);
  }, [pathname, router, searchParams]);

  useEffect(() => {
    const status = searchParams.get("status");
    if (status) {
      if (status === "error") {
        toast({
          title: "Error",
          description: "Could not authenticate user.",
          variant: "destructive",
        });

        resetParams();
      } else {
        toast({
          title: "Success",
          description: "Check your email to complete sign up process",
        });
        resetParams();
      }
    }
  }, [resetParams, searchParams, toast]);


  return (
    <div className={cn("grid gap-6", className)} {...props}>
    <form action={signIn}>
      <div className="grid gap-5">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="grid gap-1 ">
          <Label className="sr-only" htmlFor="email">
            Password
          </Label>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <LoginButton />
      </div>
    </form>
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
    </div>

    <AuthGoogle />
    <p className="px-8 text-center flex flex-col gap-y-3 text-sm text-muted-foreground">
      <Link href="/signup" className="underline underline-offset-4 hover:text-primary" >
        New User? Sign up
      </Link>{" "}
      <Link href="/forgot-password" className="underline underline-offset-4 hover:text-primary">
          Forgot Password?
      </Link>.
    </p>
  </div>
  )
}