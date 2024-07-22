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

export default function Navbar() {
  return (
    <header>
      <nav className="fixed top-0 border-b border-white/20 w-full bg-background/70 backdrop-blur-[12px]">
        <div className="container flex h-[3.5rem] items-center justify-between">
          <span>brand</span>
          <ul className="flex gap-3 h-10 items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Login</Button>
            </DialogTrigger>
            <DialogContent className="p-10">
              <DialogHeader className="space-y-3">
                <DialogTitle>Sign in</DialogTitle>
                <DialogDescription>to continue to platform</DialogDescription>
                <GithubSignIn />
                <GoogleSignIn />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </header>
  );
}
