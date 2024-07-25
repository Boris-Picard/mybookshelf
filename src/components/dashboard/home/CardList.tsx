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
      <div className="flex items-center">
        <CardHeader className="p-0 pr-6">
          <Image
            src="/assets/4TARc7mw.jpg"
            alt="test"
            width="250"
            height="250"
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
