"use client"

import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useFormStatus } from 'react-dom'

type Props = {}

export default function AuthButtons({}: Props) {

    const {pending} = useFormStatus()
  return (
    <Button  type="submit">
          {pending ?  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : "Sign Up"}
    </Button>
  )
}