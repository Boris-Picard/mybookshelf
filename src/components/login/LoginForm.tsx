"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoogleSignIn } from "@/components/login/GoogleButton";
import { GithubSignIn } from "@/components/login/GithubButton";
import { useState } from "react";

export default function LoginForm() {
  const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const handleLoadingState = (button: string | null) => {
    setLoadingButton(button);
  };

  return (
    <Card className="p-3 md:w-1/2 lg:w-1/3 xl:w-1/4 w-full">
      <CardHeader className="space-y-3 mb-6">
        <CardTitle className="text-3xl">Sign in</CardTitle>
        <CardDescription>to continue to platform</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <GoogleSignIn
          isLoading={loadingButton === "google"}
          onSignIn={() => handleLoadingState("google")}
          disabled={loadingButton !== null && loadingButton !== "google"}
        />
        <GithubSignIn
          isLoading={loadingButton === "github"}
          onSignIn={() => handleLoadingState("github")}
          disabled={loadingButton !== null && loadingButton !== "github"}
        />
      </CardContent>
    </Card>
  );
}
