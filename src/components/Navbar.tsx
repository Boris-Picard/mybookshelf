import Link from "next/link";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GithubSignIn } from "@/components/login/GithubButton";
import { GoogleSignIn } from "@/components/login/GoogleButton";
import LogoutButton from "@/components/login/LogoutButton";

interface NavbarProps {
  id: string | null | undefined;
}

const Navbar: React.FC<NavbarProps> = ({ id }) => {
  return (
    <header>
      <nav className="fixed top-0 border-b border-white/20 w-full bg-background/70 backdrop-blur-[12px]">
        <div className="container flex h-[3.5rem] items-center justify-between">
          <span>brand</span>
          {id && (
            <ul className="flex gap-3 items-center">
              <li>
                <Link href={`/dashboard/${id}`}>Dashboard</Link>
              </li>
            </ul>
          )}
          {!id ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Login</Button>
              </DialogTrigger>
              <DialogContent className="p-10">
                <DialogHeader className="mb-6">
                  <DialogTitle>Sign in</DialogTitle>
                  <DialogDescription>to continue to platform</DialogDescription>
                </DialogHeader>
                <div className="space-y-3">
                  <GoogleSignIn />
                  <GithubSignIn />
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <LogoutButton />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
