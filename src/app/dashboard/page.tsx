import { auth } from "@/auth";
import LogoutButton from "@/components/login/LogoutButton";
import { notFound } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  const user = session?.user;

  if (!user) return notFound();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col space-y-3">
      <LogoutButton />
      <h1 className="text-xl text-white font-bold">Connected as</h1>
      <p className="text-white">{session?.user?.name}</p>
    </div>
  );
}
