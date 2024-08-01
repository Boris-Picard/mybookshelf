"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Category {
  title: string;
  href: string[];
  alt: string[];
  name: string[];
}

const category: Category[] = [
  {
    title: "Art et Design",
    href: ["/"],
    alt: ["test"],
    name: ["art", "Design"],
  },
];

const CategoriesList: React.FC = () => {
  return (
    <div className="space-y-3">
      {category.map((item) => {
        return (
          <div className="space-y-3" key={item.name}>
            <h5 className="font-bold text-xl">{item.title}</h5>
            <div className="space-x-3">
              <Button>
                <Link href={item.href} alt={item.href}>
                  {item.name}
                </Link>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesList;
