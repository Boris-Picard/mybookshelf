import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  children: React.ReactNode;
};

export default function SignInCard({ children }: Props) {
  return (
    <Card className="w-full max-w-sm p-3 space-y-3 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription>to continue to platform</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">{children}</CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
