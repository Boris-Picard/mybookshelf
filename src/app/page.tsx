import Navbar from "@/components/Navbar";
import { getCurrentUser } from "@/services/utils";

export default async function Home() {
  const session = await getCurrentUser();
  console.log(session);

  return (
    <>
      <Navbar id={session?.id} />
      <main className="flex min-h-screen justify-center items-center p-24"></main>
    </>
  );
}
