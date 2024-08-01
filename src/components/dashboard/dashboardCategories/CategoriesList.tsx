"use client";

import { Button } from "@/components/ui/button";
import { Title } from "@/types/Categories";
import Link from "next/link";

const category: Title[] = [
  {
    title: "Art et Design",
    categories: {
      href: ["/", "/"],
      name: ["art", "Design"],
    },
  },
];

const CategoriesList: React.FC = () => {
  return (
    <div className="space-y-3">
      {category.map((item) => {
        return (
          <div className="space-y-3" key={item.title}>
            <h5 className="font-bold text-xl">{item.title}</h5>
            <div className="space-x-3">
              {item.categories.name.map((name, index) => {
                return (
                  <Button key={name}>
                    <Link href={item.categories.href[index]}>{name}</Link>
                  </Button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesList;
