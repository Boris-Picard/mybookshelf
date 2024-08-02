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
  Baby,
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
import { User } from "next-auth";
import CardCategoriesTemplateList from "@/components/dashboard/dashboardCategories/CardCategoriesTemplateList";
import useCategoriesBooks from "@/hooks/useCategoriesBooks";
import { useFavorites } from "@/store/favorites";
import { useEffect } from "react";
import { getFavorites } from "../dashboardHome/actions/favorite-action";

const CategoriesList = ({
  user,
  category,
}: {
  user: User;
  category: string | undefined;
}) => {
  const url = `/dashboard/categories/${user.id}/`;

  const categories: Title[] = [
    {
      title: "Art et Design",
      categories: {
        href: [
          `${url}art`,
          `${url}design`,
          `${url}architecture`,
          `${url}photographie`,
        ],
        name: ["Art", "Design", "Architecture", "Photographie"],
        icon: [Palette, PenTool, House, Camera],
      },
    },
    {
      title: "Biographies et Mémoires",
      categories: {
        href: [`${url}biographies`, `${url}autobiographies`, `${url}memoires`],
        name: ["Biographies", "Autobiographies", "Mémoires"],
        icon: [ScanFace, NotebookPen, UserRoundPen],
      },
    },
    {
      title: "Affaires et Économie",
      categories: {
        href: [
          `${url}economie`,
          `${url}gestion`,
          `${url}marketing`,
          `${url}finances-personnelles`,
        ],
        name: ["Économie", "Gestion", "Marketing", "Finances personnelles"],
        icon: [Briefcase, DollarSign, ShoppingCart, PiggyBank],
      },
    },
    {
      title: "Bande Dessinée et Romans Graphiques",
      categories: {
        href: [`${url}manga`, `${url}comics`, `${url}romans-graphiques`],
        name: ["Manga", "Comics", "Romans graphiques"],
        icon: [BookOpen, BookOpen, BookOpen],
      },
    },
    {
      title: "Informatique et Internet",
      categories: {
        href: [
          `${url}programmation`,
          `${url}reseaux`,
          `${url}securite-informatique`,
          `${url}intelligence-artificielle`,
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
          `${url}recettes`,
          `${url}cuisine-internationale`,
          `${url}nutrition`,
          `${url}vins-et-boissons`,
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
        href: [
          `${url}methodes-enseignement`,
          `${url}pedagogie`,
          `${url}developpement-enfant`,
        ],
        name: [
          "Méthodes d'enseignement",
          "Pédagogie",
          "Développement de l'enfant",
        ],
        icon: [Presentation, Book, Baby],
      },
    },
    {
      title: "Fiction et Littérature",
      categories: {
        href: [
          `${url}romans`,
          `${url}poesie`,
          `${url}theatre`,
          `${url}nouvelles`,
        ],
        name: ["Romans", "Poésie", "Théâtre", "Nouvelles"],
        icon: [BookOpen, HandCoins, FileText, FileText],
      },
    },
    {
      title: "Santé et Bien-être",
      categories: {
        href: [
          `${url}medecine`,
          `${url}nutrition`,
          `${url}developpement-personnel`,
          `${url}fitness`,
        ],
        name: ["Médecine", "Nutrition", "Développement personnel", "Fitness"],
        icon: [BriefcaseMedical, Sword, Heart, Dumbbell],
      },
    },
    {
      title: "Histoire",
      categories: {
        href: [
          `${url}histoire-mondiale`,
          `${url}histoire-regionale`,
          `${url}biographies-historiques`,
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
        href: [
          `${url}jardinage`,
          `${url}bricolage`,
          `${url}decoration-interieure`,
        ],
        name: ["Jardinage", "Bricolage", "Décoration intérieure"],
        icon: [Flower, Hammer, Bed],
      },
    },
    {
      title: "Jeunesse",
      categories: {
        href: [
          `${url}livres-enfants`,
          `${url}litterature-jeune-adulte`,
          `${url}education`,
        ],
        name: ["Livres pour enfants", "Littérature jeune adulte", "Éducation"],
        icon: [Shapes, Book, Shapes],
      },
    },
    {
      title: "Loisirs et Passions",
      categories: {
        href: [`${url}sports`, `${url}jeux`, `${url}loisirs-creatifs`],
        name: ["Sports", "Jeux", "Loisirs créatifs"],
        icon: [Trophy, Gamepad, PenTool],
      },
    },
    {
      title: "Religion et Spiritualité",
      categories: {
        href: [`${url}religion`, `${url}spiritualite`, `${url}philosophie`],
        name: ["Religion", "Spiritualité", "Philosophie"],
        icon: [NotebookTabs, Sun, Moon],
      },
    },
    {
      title: "Sciences",
      categories: {
        href: [
          `${url}physique`,
          `${url}chimie`,
          `${url}biologie`,
          `${url}mathematiques`,
        ],
        name: ["Physique", "Chimie", "Biologie", "Mathématiques"],
        icon: [Microscope, FlaskConical, Microscope, Calculator],
      },
    },
    {
      title: "Science-fiction et Fantasy",
      categories: {
        href: [`${url}science-fiction`, `${url}fantasy`, `${url}horreur`],
        name: ["Science-fiction", "Fantasy", "Horreur"],
        icon: [Rocket, Wand, Skull],
      },
    },
    {
      title: "Voyages et Guides",
      categories: {
        href: [
          `${url}guides-voyage`,
          `${url}recits-voyage`,
          `${url}cartes-plans`,
        ],
        name: ["Guides de voyage", "Récits de voyage", "Cartes et plans"],
        icon: [Map, Plane, Map],
      },
    },
    {
      title: "Policiers et Thrillers",
      categories: {
        href: [`${url}romans-policiers`, `${url}thrillers`, `${url}mysteres`],
        name: ["Romans policiers", "Thrillers", "Mystères"],
        icon: [VenetianMask, Skull, VenetianMask],
      },
    },
  ];

  const { categoriesBooks } = useCategoriesBooks({ category });
  const { favorites, addFavoriteBook } = useFavorites();

  useEffect(() => {
    const fetchFavorites = async () => {
      if (categoriesBooks.length > 0) {
        try {
          const response = await getFavorites();
          if (typeof response !== "string") {
            response.map((item) => addFavoriteBook(item));
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchFavorites();
  }, [categoriesBooks]);

  if (category) {
    if (categoriesBooks.length === 0) {
      return (
        <h1 className="text-muted-foreground text-xl">
          Pas livres trouvés dans cette catégorie !
        </h1>
      );
    }
    return (
      <div className="space-y-3">
        <h1 className="text-center text-3xl font-bold uppercase mb-10">{category}</h1>
        {categoriesBooks.map((books) => (
          <CardCategoriesTemplateList
            key={books.id}
            books={books}
            favorites={favorites}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {categories.map((item) => {
        return (
          <div key={item.title}>
            <h5 className="font-bold text-xl">{item.title}</h5>
            <div>
              {item.categories.name.map((name, index) => {
                const Icon = item.categories.icon[index];
                return (
                  <Link href={item.categories.href[index]}>
                    <Button
                      size="lg"
                      variant="outline"
                      key={name}
                      className="rounded-full mr-3 mt-3"
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {name}
                    </Button>
                  </Link>
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
