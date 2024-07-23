import Navbar from "@/components/Navbar";
import { getCurrentUser } from "@/services/CurrentUser";

export default async function Home() {
  const session = await getCurrentUser();
  
  return (
    <>
      <Navbar id={session?.id} />
      <main className="flex min-h-screen justify-center items-center p-24"></main>
    </>
  );
}
