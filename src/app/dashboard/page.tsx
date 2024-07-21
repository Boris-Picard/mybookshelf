import { auth } from "@/auth";
// import LogoutButton from "@/components/login/LogoutButton";
import { notFound } from "next/navigation";

import { DashboardMainPage } from "@/components/dashboard/DashboardMainPage";

export default async function Dashboard() {
  const session = await auth();
  const user = session?.user;

  if (!user) return notFound();

  return <DashboardMainPage />;

  /* <LogoutButton /> */
}
