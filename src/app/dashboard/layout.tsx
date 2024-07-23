"use client";
import useUserVerification from "@/hooks/useUserVerification";
import { redirect } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userData, error } = useUserVerification();
  console.log(userData);

  if (!userData) return redirect("/");

  return <div>{children}</div>;
}
