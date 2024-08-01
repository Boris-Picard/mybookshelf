import { LucideProps } from "lucide-react";

export interface Title {
    title: string;
    categories: Category;
}

export interface Category {
    href: string[];
    name: string[];
    icon: React.FC<LucideProps>[];
}