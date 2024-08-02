"use server";

import Dashboard from "@/components/dashboard/Dashboard";
import UserService from "@/services/UserService";
import { User } from "next-auth";
import { redirect } from "next/navigation";

export default async function Categories({
  params,
}: {
  params: { userId: string; category: string };
}) {
  const userService = new UserService();
  const user: User | null = await userService.getUser();

  if (!user) {
    return redirect("/");
  }

  if (user.id !== params.userId) {
    return redirect("/");
  }

  return (
    <>
      <Dashboard user={user} category={params.category} />
    </>
  );
}