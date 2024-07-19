import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { signIn } from "@/auth";

export default async function SignInForm() {
  return (
    <Card className="mx-auto w-1/5">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>
          Sign in with your Email or with Github or Google
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <Button className="w-full" type="submit">
              Signin with GitHub
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
