"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Title {
  title: string;
  categories: Category;
}

interface Category {
  href: string[];
  alt: string[];
  name: string[];
}

const category: Title[] = [
  {
    title: "Art et Design",
    categories: {
      href: ["/"],
      alt: ["test"],
      name: ["art", "Design"],
    },
  },
];

const CategoriesList: React.FC = () => {
  return (
    <div className="space-y-3">
      {category.map((item) => {
        return (
          <div className="space-y-3" key={item.categories.name}>
            <h5 className="font-bold text-xl">{item.title}</h5>
            <div className="space-x-3">
              <Button>
                <Link href={item.categories.href} alt={item.categories.href}>
                  {item.categories.name}
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
