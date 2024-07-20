import { signIn } from "@/auth";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

export function GoogleSignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button type="submit" variant="outline" className="w-full gap-3">
        <FcGoogle className="h-6 w-6" />
        Continue with Google
      </Button>
    </form>
  );
}
