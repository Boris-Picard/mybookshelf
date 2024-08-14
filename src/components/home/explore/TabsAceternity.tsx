"use client";

import Image from "next/image";
import { TabsAceternity } from "@/components/ui/tabsAceternity";

import dashboardImage from "/public/dashboard-home.png";
import favoritesImage from "/public/favorites.png";
import categoriesImage from "/public/categories.png";
import detailedPageImage from "/public/page.png";

export function TabsExplore() {
  const tabs = [
    {
      title: "Homepage",
      value: "Homepage",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold bg-gradient-to-br from-primary to-violet-900">
          <p>HomePage Tab</p>
          <Image
            src={dashboardImage}
            alt="dashboard"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Favorites",
      value: "Favorites",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold bg-gradient-to-br from-primary to-violet-900">
          <p>Favorites tab</p>
          <Image
            src={favoritesImage}
            alt="favoris"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Catégories",
      value: "Catégories",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold bg-gradient-to-br from-primary to-violet-900">
          <p>Catégories tab</p>
          <Image
            src={categoriesImage}
            alt="catégories"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Page",
      value: "Page",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold bg-gradient-to-br from-primary to-violet-900">
          <p>Page tab</p>
          <Image
            src={detailedPageImage}
            alt="page détail"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20">
      <TabsAceternity tabs={tabs} />
    </div>
  );
}
