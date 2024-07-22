import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <Button type="submit" variant="secondary">
        Logout
      </Button>
    </form>
  );
}
