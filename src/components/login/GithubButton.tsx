import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export function GithubSignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <Button type="submit" variant="outline" className="w-full gap-3">
        <FaGithub className="h-6 w-6 dark:invert invert-0" fill="current" />
        Continue with GitHub
      </Button>
    </form>
  );
}
