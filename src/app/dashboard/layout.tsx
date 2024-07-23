"use server";
import DashboardBase from "@/components/dashboard/DashboardBase";
import { getCurrentUser } from "@/services/utils";
import { redirect } from "next/navigation";

import UserService from "@/services/UserService";

export default async function DashboardLayout() {
  const userService = new UserService();
  
  const session = await getCurrentUser();
  const user = await userService.getUser(session?.id)
  console.log(user);
  

  if (!session) return redirect("/");

  return <DashboardBase />;
}
