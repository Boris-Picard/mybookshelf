import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <div>
      <h5 className="text-white">Are you sure you want to sign out?</h5>
      <form
        action={async (formData) => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit" variant="secondary">
          Sign out
        </Button>
      </form>
    </div>
  );
}
