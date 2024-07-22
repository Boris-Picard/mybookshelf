"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
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
        <Button variant="secondary">
          <Link href="auth/login">Login</Link>
        </Button>
      </div>
    </nav>
  );
}
