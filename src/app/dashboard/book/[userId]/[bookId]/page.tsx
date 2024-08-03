"use server";

import Dashboard from "@/components/dashboard/Dashboard";
import { verifyUser } from "@/services/VerifyUser";


export default async function BookId({
  params,
}: {
  params: { userId: string; book: string };
}) {
  const user = await verifyUser(params.userId);

  if (!user) return null;

  return (
    <>
      <Dashboard user={user} />
    </>
  );
}
