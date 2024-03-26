import Buttons from '@/components/Buttons';
import { Button } from '@/components/ui/button';
import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
 } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
 } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Profile from '@/types/Profile';
import React from 'react'

type Props = {}

interface ProtectedSettingsProfileProps {
    user: Profile;
}

export default function ProfileForm({}: Props) {
  return (
    <div className='w-full border-2 border-red-600'>
            <Card>
      <CardHeader>
        <CardTitle>Report an issue</CardTitle>
        <CardDescription>
          What area are you having problems with?
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="area">First Name</Label>
            <Input type='text' placeholder='First Name' />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="security-level">Last Name</Label>
            <Input type='text' placeholder='Last Name' />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="area">Email</Label>
            <Input type='text' placeholder='Email' />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="security-level">Mobile Number</Label>
            <Input type='text' placeholder='Mobile Number' />
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        {/* <Button variant="ghost">Cancel</Button> */}
        <Buttons text='Update'/>
      </CardFooter>
    </Card>
    </div>
  )
}