import Explore from "@/components/home/explore/Explore";
import Features from "@/components/home/features/Features";
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
      </main>
    </>
  );
}
