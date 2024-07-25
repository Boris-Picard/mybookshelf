import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function CardList() {
  return (
    <Card className="p-6">
      <div className="flex flex-col sm:flex-row items-center">
        <CardHeader className="p-0 sm:pr-6 pb-6 sm:pb-0">
          <Image
            src="/assets/4TARc7mw.jpg"
            alt="test"
            width="500"
            height="400"
            className="rounded-xl"
          ></Image>
        </CardHeader>
        <div className="flex flex-col space-y-3">
          <CardTitle>JK Rowling</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut enim
            ipsam blanditiis aliquid ipsum illo laudantium natus sunt quidem
            tempora. Iste eaque, quibusdam a odit voluptas id! Autem, sit
            dolorum.
          </CardDescription>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
