"use client";

import DashboardBase from "@/components/dashboard/DashboardBase";

export default function HomeDashboard({params}:{ params: { userId: string } }) {

  console.log(params);

  return <DashboardBase />;
}
