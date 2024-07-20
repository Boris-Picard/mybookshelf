import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export function GithubSignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit" variant="secondary" className="w-full gap-3">
        <FaGithub className="h-6 w-6" />
        Login with GitHub
      </Button>
    </form>
  );
}
