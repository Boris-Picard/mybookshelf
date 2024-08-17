"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const LogoutHomeButton = () => {
  return (
    <Link href="/auth/signout">
      <Button type="button" variant="outline">
        Logout
      </Button>
    </Link>
  );
};

const LogoutDashBoardButton = () => {
  return (
    <Link href="/auth/signout">
      <button type="button" className="w-full text-start">
        Logout
      </button>
    </Link>
  );
};

export { LogoutHomeButton, LogoutDashBoardButton };
