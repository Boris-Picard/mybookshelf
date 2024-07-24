"use server";

import DashboardBase from "@/components/dashboard/DashboardBase";
import UserService from "@/services/UserService";

export default async function HomeDashboard({
  params,
}: {
  params: { userId: string };
}) {
  const id = params.userId;
  const user = new UserService();

  // const verifyUser = await user.verifyUser(id);

  return (
    <>
      <DashboardBase />
    </>
  );
}
