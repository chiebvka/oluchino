import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react';
import MainBanner from '../(routes)/_components/MainBanner';
import MainHeader from '../(routes)/_components/MainHeader';
import Footer from '@/components/Footer';


type Props = {}

export default async function ProtectedLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const supabase = createClient();


    const {
      data: { user },
    } = await supabase.auth.getUser();
  
    if (!user) {
      return redirect("/login");
    }
  
  return (
    <div className='w-full'>
      <MainBanner />
      <MainHeader />     
      <main className="min-h-screen  mx-auto">
        {children}
        <Footer />
      </main>
    </div>
  )
}