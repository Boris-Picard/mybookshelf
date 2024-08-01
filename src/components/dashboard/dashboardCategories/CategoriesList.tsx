"use client";

import { Button } from "@/components/ui/button";
import { Title } from "@/types/Categories";
import Link from "next/link";

import { Palette, PenTool, House, Camera, ScanFace, NotebookPen, UserRoundPen } from "lucide-react";

const categories: Title[] = [
  {
    title: "Art et Design",
    categories: {
      href: ["/", "/", "/", "/"],
      name: ["Art", "Design", "Architecture", "Photographie"],
      icon: [Palette, PenTool, House, Camera],
    },
  },
  {
    title: "Biographies et Mémoires",
    categories: {
      href: ["/", "/", "/"],
      name: ["Biographies", "Autobiographies", "Mémoires"],
      icon: [ScanFace, NotebookPen, UserRoundPen],
    },
  },
];

const CategoriesList: React.FC = () => {
  return (
    <div className="space-y-3">
      {categories.map((item) => {
        return (
          <div className="space-y-3" key={item.title}>
            <h5 className="font-bold text-xl">{item.title}</h5>
            <div className="space-x-3">
              {item.categories.name.map((name, index) => {
                const Icon = item.categories.icon[index];
                return (
                  <Button size="lg" variant="outline" key={name}>
                    <Icon className="mr-3 h-5 w-5" />
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
