import Explore from "@/components/home/explore/Explore";
import Faq from "@/components/home/faq/Faq";
import Features from "@/components/home/features/Features";
import Footer from "@/components/home/footer/Footer";
import Hero from "@/components/home/hero/Hero";
import Navbar from "@/components/home/Navbar";
import { getCurrentUser } from "@/services/CurrentUser";

export default async function Home() {
  const session = await getCurrentUser();

  return (
    <>
      <Navbar id={session?.id} />
      <main className="mx-auto flex-1 overflow-hidden">
        <Hero />
        <Features />
        <Explore />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
