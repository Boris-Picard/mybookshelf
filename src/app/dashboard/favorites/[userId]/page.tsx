"use server";

import Dashboard from "@/components/dashboard/Dashboard";
import UserService from "@/services/UserService";


export default async function FavoriteDashboard({
  params,
}: {
  params: { userId: string };
}) {
  const userService = new UserService();
  const user = await userService.verifyUser(params.userId);

  if (!user) return null;

  return (
    <>
      <Dashboard user={user}  />
    </>
  );
}
