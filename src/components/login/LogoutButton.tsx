"use client";

import { handleSignOut } from "@/actions/logout.action";
import { Button } from "@/components/ui/button";

const LogoutHomeButton = () => {
  return (
    <form action={handleSignOut}>
      <Button type="submit" variant="outline">
        Logout
      </Button>
    </form>
  );
};

const LogoutDashBoardButton = () => {
  return (
    <form action={handleSignOut} className="flex w-full">
      <button type="submit" className="w-full text-start">Logout</button>
    </form>
  );
};

export { LogoutHomeButton, LogoutDashBoardButton };
