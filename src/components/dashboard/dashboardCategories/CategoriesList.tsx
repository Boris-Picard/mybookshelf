"use client";

import { Button } from "@/components/ui/button";
import { Title } from "@/types/Categories";
import Link from "next/link";

import {
  Palette,
  PenTool,
  House,
  Camera,
  ScanFace,
  NotebookPen,
  UserRoundPen,
  Briefcase,
  DollarSign,
  ShoppingCart,
  PiggyBank,
  BookOpen,
  BarChart,
  Cpu,
  Shield,
  FileText,
  Utensils,
  Wine,
  Baby ,
  Presentation,
  Book,
  HandCoins,
  FileEdit,
  Heart,
  BriefcaseMedical,
  Dumbbell,
  Activity,
  Globe,
  Landmark,
  Bed,
  Hammer,
  Flower,
  Shapes,
  Gamepad,
  Trophy,
  NotebookTabs,
  Sun,
  Moon,
  Microscope,
  FlaskConical,
  Calculator,
  Rocket,
  Wand,
  Sword,
  Map,
  Plane,
  VenetianMask,
  Skull,
} from "lucide-react";

const categories: Title[] = [
  {
    title: "Art et Design",
    categories: {
      href: ["/art", "/design", "/architecture", "/photographie"],
      name: ["Art", "Design", "Architecture", "Photographie"],
      icon: [Palette, PenTool, House, Camera],
    },
  },
  {
    title: "Biographies et Mémoires",
    categories: {
      href: ["/biographies", "/autobiographies", "/memoires"],
      name: ["Biographies", "Autobiographies", "Mémoires"],
      icon: [ScanFace, NotebookPen, UserRoundPen],
    },
  },
  {
    title: "Affaires et Économie",
    categories: {
      href: ["/economie", "/gestion", "/marketing", "/finances-personnelles"],
      name: ["Économie", "Gestion", "Marketing", "Finances personnelles"],
      icon: [Briefcase, DollarSign, ShoppingCart, PiggyBank],
    },
  },
  {
    title: "Bande Dessinée et Romans Graphiques",
    categories: {
      href: ["/manga", "/comics", "/romans-graphiques"],
      name: ["Manga", "Comics", "Romans graphiques"],
      icon: [BookOpen, BookOpen, BookOpen],
    },
  },
  {
    title: "Informatique et Internet",
    categories: {
      href: [
        "/programmation",
        "/reseaux",
        "/securite-informatique",
        "/intelligence-artificielle",
      ],
      name: [
        "Programmation",
        "Réseaux",
        "Sécurité informatique",
        "Intelligence artificielle",
      ],
      icon: [Cpu, Cpu, Shield, Cpu],
    },
  },
  {
    title: "Cuisine et Boissons",
    categories: {
      href: [
        "/recettes",
        "/cuisine-internationale",
        "/nutrition",
        "/vins-et-boissons",
      ],
      name: [
        "Recettes",
        "Cuisine internationale",
        "Nutrition",
        "Vins et boissons",
      ],
      icon: [Utensils, Globe, Activity, Wine],
    },
  },
  {
    title: "Enseignement et Pédagogie",
    categories: {
      href: ["/methodes-enseignement", "/pedagogie", "/developpement-enfant"],
      name: [
        "Méthodes d'enseignement",
        "Pédagogie",
        "Développement de l'enfant",
      ],
      icon: [Presentation, Book, Baby ],
    },
  },
  {
    title: "Fiction et Littérature",
    categories: {
      href: ["/romans", "/poesie", "/theatre", "/nouvelles"],
      name: ["Romans", "Poésie", "Théâtre", "Nouvelles"],
      icon: [BookOpen, HandCoins, FileText, FileText],
    },
  },
  {
    title: "Santé et Bien-être",
    categories: {
      href: ["/medecine", "/nutrition", "/developpement-personnel", "/fitness"],
      name: ["Médecine", "Nutrition", "Développement personnel", "Fitness"],
      icon: [BriefcaseMedical, Sword, Heart, Dumbbell],
    },
  },
  {
    title: "Histoire",
    categories: {
      href: [
        "/histoire-mondiale",
        "/histoire-regionale",
        "/biographies-historiques",
      ],
      name: [
        "Histoire mondiale",
        "Histoire régionale",
        "Biographies historiques",
      ],
      icon: [Globe, Landmark, Book],
    },
  },
  {
    title: "Maison et Jardin",
    categories: {
      href: ["/jardinage", "/bricolage", "/decoration-interieure"],
      name: ["Jardinage", "Bricolage", "Décoration intérieure"],
      icon: [Flower, Hammer, Bed],
    },
  },
  {
    title: "Jeunesse",
    categories: {
      href: ["/livres-enfants", "/litterature-jeune-adulte", "/education"],
      name: ["Livres pour enfants", "Littérature jeune adulte", "Éducation"],
      icon: [Shapes, Book, Shapes],
    },
  },
  {
    title: "Loisirs et Passions",
    categories: {
      href: ["/sports", "/jeux", "/loisirs-creatifs"],
      name: ["Sports", "Jeux", "Loisirs créatifs"],
      icon: [Trophy, Gamepad, PenTool],
    },
  },
  {
    title: "Religion et Spiritualité",
    categories: {
      href: ["/religion", "/spiritualite", "/philosophie"],
      name: ["Religion", "Spiritualité", "Philosophie"],
      icon: [NotebookTabs, Sun, Moon],
    },
  },
  {
    title: "Sciences",
    categories: {
      href: ["/physique", "/chimie", "/biologie", "/mathematiques"],
      name: ["Physique", "Chimie", "Biologie", "Mathématiques"],
      icon: [Microscope, FlaskConical, Microscope, Calculator],
    },
  },
  {
    title: "Science-fiction et Fantasy",
    categories: {
      href: ["/science-fiction", "/fantasy", "/horreur"],
      name: ["Science-fiction", "Fantasy", "Horreur"],
      icon: [Rocket, Wand, Skull],
    },
  },
  {
    title: "Voyages et Guides",
    categories: {
      href: ["/guides-voyage", "/recits-voyage", "/cartes-plans"],
      name: ["Guides de voyage", "Récits de voyage", "Cartes et plans"],
      icon: [Map, Plane, Map],
    },
  },
  {
    title: "Policiers et Thrillers",
    categories: {
      href: ["/romans-policiers", "/thrillers", "/mysteres"],
      name: ["Romans policiers", "Thrillers", "Mystères"],
      icon: [VenetianMask, Skull, VenetianMask],
    },
  },
];

const CategoriesList: React.FC = () => {
  return (
    <div className="space-y-3">
      {categories.map((item) => {
        return (
          <div key={item.title}>
            <h5 className="font-bold text-xl">{item.title}</h5>
            <div className="space-y-3">
              {item.categories.name.map((name, index) => {
                const Icon = item.categories.icon[index];
                return (
                  <Button
                    size="lg"
                    variant="outline"
                    key={name}
                    className="rounded-full mr-3"
                  >
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
