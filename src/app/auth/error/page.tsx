import LoginForm from "@/components/login/LoginForm";

export default async function Login() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <LoginForm />
      <small className="text-red-500">ERROR</small>
    </div>
  );
}
