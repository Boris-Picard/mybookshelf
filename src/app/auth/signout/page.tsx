import { handleSignOut } from "@/components/login/actions/logout-action";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignOutPage() {
  return (
    <div className="flex mx-auto min-h-screen items-center justify-center ">
      <div className="flex flex-col items-center space-y-6">
        <h5>Êtes-vous sûr de vouloir vous déconnecter ?</h5>
        <form action={handleSignOut}>
          <Button type="submit" variant="outline">
            Se déconnecter
          </Button>
        </form>
        <div className="flex items-center w-full">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">OU</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <Link href="/">
          <Button variant="secondary">Retourner à l'accueil</Button>
        </Link>
      </div>
    </div>
  );
}
