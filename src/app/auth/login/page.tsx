import LoginForm from "@/components/login/LoginForm";
import { getCurrentUser } from "@/services/CurrentUser";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getCurrentUser();
  if (session) return redirect("/");

  return (
    <div className="flex min-h-screen justify-center items-center">
      <LoginForm />
    </div>
  );
}
