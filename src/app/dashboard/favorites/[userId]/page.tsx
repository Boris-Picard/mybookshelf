"use server";

import UserService from "@/services/UserService";
import { User } from "next-auth";
import { redirect } from "next/navigation";

export default async function FavoriteDashboard({
  params,
}: {
  params: { userId: string };
}) {
    console.log(params);
    
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
      <h1 className="text-xl font-bold">Favoris</h1>
    </>
  );
}
