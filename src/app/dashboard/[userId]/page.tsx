"use server";

import DashboardHome from "@/components/dashboard/DashboardHome";
import { getCurrentUser } from "@/services/CurrentUser";
import { User } from "next-auth";
import { redirect } from "next/navigation";

export default async function HomeDashboard({
  params,
}: {
  params: { userId: string };
}) {
  const user: User | null = await getCurrentUser();

  if (!user) return redirect("/");

  if (user.id !== params.userId) return redirect("/");

  return (
    <>
      <DashboardHome user={user} />
    </>
  );
}
