import PageHeadings from '@/components/PageHeadings'
import React from 'react'
import ProfileForm from './_component/ProfileCard'
import ProfileCard from './_component/ProfileCard'
import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'
import Profile from '@/types/Profile'

type Props = {}
async function getUserId() {
    const supabase = createClient()
    const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
    
      if (error) {
        console.log("Error has occured while getting UserId!");
        console.log("Error message : ", error.message);
        return null;
      }
    
      return user ? user.id : null;
}

export default async function page({}: Props) {
    const supabase = createClient()
    const userId = await getUserId();
    const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .match({ id: userId })
    .single<Profile>();

  if (error) {
    console.log(error);
    throw Error;
  }

  if (!data) {
    notFound;
    console.log("Cound't find User profile.");
  }
  return (
    <div className='min-h-screen w-full relative my-auto py-16 gap-y-5 px-3 max-w-6xl xl:max-w-7xl mx-auto'>
        <PageHeadings
            title='Your Profile' 
            description="Let's help you set up and manage your account settings and other preferences"
        />
        <div className="flex flex-col md:flex-row w-full border-2 space-x-3 border-black">
            <div className="flex md:basis-1/2 my-2 ">
                <ProfileCard user={data} />
            </div>
            <div className="flex border-2 md:basis-1/2 my-2 border-green-600"></div>
        </div>
    </div>
  )
}