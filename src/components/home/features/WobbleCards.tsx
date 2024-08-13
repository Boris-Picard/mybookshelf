"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function WobleCardsFeatures() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-2 h-full bg-gradient-to-tr from-primary to-violet-900">
        <div className="sm:max-w-xs min-w-full">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
            Recommandations personnalisées
          </h2>
          <p className="mt-4 text-left text-base/6">
            Découvrez de nouveaux livres basés sur vos lectures précédentes et
            vos favoris. Notre algorithme adapte les suggestions pour toujours
            correspondre à vos goûts littéraires.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-2 bg-gradient-to-l from-primary to-violet-900">
        <div className="sm:max-w-xs min-w-full">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
            Votre bibliothèque, votre empire
          </h2>
          <p className="mt-4 text-left text-base/6">
            Ajoutez, organisez et suivez tous vos livres en un seul endroit.
            Marquez les livres comme lus, à lire ou favoris et gardez une trace
            de votre progrès de lecture.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-2 bg-gradient-to-b from-primary to-violet-900">
        <div className="sm:max-w-xs min-w-full">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
            Authentification facile
          </h2>
          <p className="mt-4 text-left  text-base/6">
            Connectez-vous en toute simplicité via Google ou GitHub pour accéder
            à votre bibliothèque personnalisée et partager vos lectures avec la
            communauté.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-4 bg-gradient-to-t from-primary to-violet-900">
        <div className="sm:max-w-xs min-w-full">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
            Aperçu de Vos Lectures
          </h2>
          <p className="mt-4 xl:max-w-[26rem] text-left text-base/6">
            Visualisez facilement tous les livres que vous avez lus et ceux en
            cours dans votre bibliothèque personnelle. Profitez d'un accès
            rapide à vos favoris et retrouvez vos dernières découvertes en un
            coup d'œil.
          </p>
        </div>
        <Image
          src="/assets/favorites.png"
          width={500}
          height={500}
          alt="image des favoris"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-5 object-contain rounded-2xl hidden xl:block"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-2 bg-gradient-to-r from-primary to-violet-900">
        <div className="sm:max-w-xs min-w-full">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
            Accès direct à des ressources
          </h2>
          <p className="mt-4 text-left text-base/6">
            Obtenez des liens pour acheter des livres, les télécharger ou les
            lire en ligne directement depuis Google Books, enrichissant ainsi
            votre expérience de lecture sans effort.
          </p>
        </div>
      </WobbleCard>
    </div>
  );
}
