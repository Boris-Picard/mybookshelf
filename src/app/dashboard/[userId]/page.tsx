"use server";

import DashboardBase from "@/components/dashboard/DashboardBase";
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
      <DashboardBase user={user} />
    </>
  );
}
