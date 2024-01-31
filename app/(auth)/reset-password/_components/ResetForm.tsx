"use client"

import React from 'react';
import { cn } from "@/lib/utils";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import reset from '@/actions/auth/reset';
import ResetButton from './ResetButton';
import AuthGoogle from '../../signup/_components/AuthGoogle';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ResetForm({ className, ...props }: UserAuthFormProps) {



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
          description: "Password updated successfully",
        });
        resetParams();
      }
    }
  }, [resetParams, searchParams, toast]);

  


  return (
    <div className={cn("grid gap-6", className)} {...props}>
    <form action={reset}>
      <div className="grid gap-5">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="password">
            Password
          </Label>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <ResetButton />
      </div>
    </form>
  </div>
  )
}