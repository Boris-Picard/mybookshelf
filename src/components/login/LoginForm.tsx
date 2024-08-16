import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoogleSignIn } from "@/components/login/GoogleButton";
import { GithubSignIn } from "@/components/login/GithubButton";

export default function LoginForm() {
  return (
    <Card className="p-3 md:w-1/2 lg:w-1/3 xl:w-1/4 w-full">
      <CardHeader className="space-y-3 mb-6">
        <CardTitle className="text-3xl">Sign in</CardTitle>
        <CardDescription>to continue to platform</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <GoogleSignIn />
        <GithubSignIn />
      </CardContent>
    </Card>
  );
}
