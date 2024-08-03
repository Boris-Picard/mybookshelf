"use server";

import Dashboard from "@/components/dashboard/Dashboard";
import UserService from "@/services/UserService";


export default async function BookId({
  params,
}: {
  params: { userId: string; bookId: string };
}) {
  const userService = new UserService();
  const user = await userService.verifyUser(params.userId);

  if (!user) return null;

  return (
    <>
      <Dashboard user={user} bookId={params.bookId} />
    </>
  );
}
