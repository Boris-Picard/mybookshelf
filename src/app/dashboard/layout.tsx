"use server";

import { getCurrentUser } from "@/services/CurrentUser";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) return redirect("/");

  return <div>{children}</div>;
}
