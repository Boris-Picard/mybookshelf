"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
import { LogoutHomeButton } from "@/components/login/LogoutButton";
import Image from "next/image";
import { useState } from "react";

interface NavbarProps {
  id: string | null | undefined;
}

const Navbar: React.FC<NavbarProps> = ({ id }) => {
  const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const handleLoadingState = (button: string | null) => {
    setLoadingButton(button);
  };

  return (
    <header>
      <nav className="fixed top-0 border-b border-white/20 w-full bg-background/70 backdrop-blur-[12px] z-20">
        <div className="container flex h-[3.5rem] items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.svg"
              height={56}
              width={56}
              alt="logo mybookshelf"
              loading="lazy"
              className="dark:invert"
            />
          </Link>
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
                  <GoogleSignIn
                    isLoading={loadingButton === "google"}
                    onSignIn={() => handleLoadingState("google")}
                    disabled={
                      loadingButton !== null && loadingButton !== "google"
                    }
                  />
                  <GithubSignIn
                    isLoading={loadingButton === "github"}
                    onSignIn={() => handleLoadingState("github")}
                    disabled={
                      loadingButton !== null && loadingButton !== "github"
                    }
                  />
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <LogoutHomeButton />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
