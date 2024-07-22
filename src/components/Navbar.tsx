"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="mt-10">
      <div className="flex justify-between items-center bg-zinc-950 p-3 rounded-3xl">
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
