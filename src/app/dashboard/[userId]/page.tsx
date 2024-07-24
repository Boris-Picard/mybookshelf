"use server";

import DashboardBase from "@/components/dashboard/DashboardBase";

export default async function HomeDashboard({
  params,
}: {
  params: { userId: string };
}) {
  return (
    <>
      <DashboardBase />
    </>
  );
}
