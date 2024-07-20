import { GithubSignIn } from "@/components/login/github-button";
import SignInCard from "@/components/login/signin-card";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center p-24">
      <SignInCard>
        <GithubSignIn />
      </SignInCard>
    </main>
  );
}
