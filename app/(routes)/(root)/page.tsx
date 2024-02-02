
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import AuthButton from "@/components/AuthButton";
import DeployButton from "@/components/DeployButton";
import { Button } from "@/components/ui/button";
import Buttons from "@/components/Buttons";
import Hero from "./_components/Hero";
import Collection from "./_components/Collections";
import ProductList from "./_components/ProductList";
import Advertorials from "./_components/Advertorials";
import Brands from "./_components/Brands";
import Why from "./_components/Why";
import Discover from "./_components/Discover";
import NewsLetter from "./_components/NewsLetter";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <>
      <Hero />
      <Advertorials />
      <ProductList />
      <Collection />
      <ProductList />
      <Brands />
      <Why />
      <Discover />
      <NewsLetter />
    </>
  );
}
