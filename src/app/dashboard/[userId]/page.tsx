"use client";

import DashboardBase from "@/components/dashboard/DashboardBase";

export default function HomeDashboard({
  params,
}: {
  params: { userId: string };
}) {
  const id = params.userId;
  console.log(id);

  return (
    <>
      <h1>{id}</h1>
      <DashboardBase />
    </>
  );
}
