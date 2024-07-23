"use server";
import { getCurrentUser } from "@/services/utils";
import { redirect } from "next/navigation";

import UserService from "@/services/UserService";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userService = new UserService();
  const session = await getCurrentUser();

  if (!session) return redirect("/");

  try {
    const user = await userService.getUser(session.id);

    if (user?.id !== session.id) {
      return redirect("/");
    }
    
    if (!user) {
      return redirect("/");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return redirect("/");
  }

  return <div>{children}</div>;
}
