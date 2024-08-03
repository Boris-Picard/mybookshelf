"use server";

import Dashboard from "@/components/dashboard/Dashboard";
import { verifyUser } from "@/services/VerifyUser";

export default async function Categories({
  params,
}: {
  params: { userId: string };
}) {
  const user = await verifyUser(params.userId);

  if (!user) return null;

  return (
    <>
      <Dashboard user={user} />
    </>
  );
}
