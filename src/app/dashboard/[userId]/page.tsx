"use server";

import DashboardHome from "@/components/dashboard/DashboardHome";
import UserService from "@/services/UserService";
import { User } from "next-auth";
import { redirect } from "next/navigation";

export default async function HomeDashboard({
  params,
}: {
  params: { userId: string };
}) {
  const userService = new UserService()
  const user: User | null = await userService.getUser();

  if (!user) return redirect("/");

  if (user.id !== params.userId) return redirect("/");

  return (
    <>
      <DashboardHome user={user} />
    </>
  );
}
