import { GithubSignIn } from "@/components/login/GithubButton";
import { GoogleSignIn } from "@/components/login/GoogleButton";
import SignInCard from "@/components/login/SignInCard";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth()

  if(session?.user) return redirect("/dashboard")
  
  return (
    <main className="flex min-h-screen justify-center items-center p-24">
      <SignInCard>
        <GithubSignIn />
        <GoogleSignIn />
      </SignInCard>
    </main>
  );
}
