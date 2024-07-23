"use client"
// import LogoutButton from "@/components/login/LogoutButton";

import { DashboardMainPage } from "@/components/dashboard/DashboardMainPage";
import useSearchBooks from "@/hooks/useSearchBooks";

export default function Dashboard() {
  const { books } = useSearchBooks();
  console.log(books);
  return <DashboardMainPage />;

  /* <LogoutButton /> */
}
