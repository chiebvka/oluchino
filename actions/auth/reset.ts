"use server";


import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function  reset(formData: FormData) {


    const password = formData.get("password") as string;

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    
    const { error } = await supabase.auth.updateUser({
        password,
    });


    if (error) {
      return redirect("/reset-password?status=error");
    }

    return redirect("/");
  };