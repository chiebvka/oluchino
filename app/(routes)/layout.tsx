
import Footer from "@/components/Footer";
import MainBanner from "./_components/MainBanner";
import MainHeader from "./_components/MainHeader";


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <>
        <MainBanner />
        <MainHeader />
        <main className="min-h-screen max-w-7xl  mx-auto">
          {children}
          <Footer />
        </main>
      </>
  );
}
