"use server";

import UserService from "@/services/UserService";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userObject = new UserService();

  const user = await userObject.verifyUser();
  if (!user) return redirect("/");
  console.log(user);
  

  return <div>{children}</div>;
}
