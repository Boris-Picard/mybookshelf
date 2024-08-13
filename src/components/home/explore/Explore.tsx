import { TabsExplore } from "./TabsAceternity";

const Explore = () => {
  return (
    <section
      id="explore"
      className="lg:py-24 relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8 h-full"
    >
      <h2 className="mb-2 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        Explorez votre dashboard
      </h2>
      <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Naviguez à travers les différentes fonctionnalités de MyBookshelf pour
        une gestion optimale de votre bibliothèque personnelle. De la gestion de
        vos livres à l'accès aux recommandations personnalisées, découvrez
        comment chaque outil enrichit votre expérience de lecture.
      </h3>
      <TabsExplore />
    </section>
  );
};

export default Explore;
