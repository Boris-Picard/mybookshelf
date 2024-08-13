import { WobleCardsFeatures } from "./WobbleCards";

const Features = () => {
  return (
    <section
      id="section"
      className="lg:py-24 relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8 h-full"
    >
      <h2 className="mb-2 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        Features
      </h2>
      <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Explorez MyBookshelf, votre plateforme personnelle pour organiser,
        découvrir et suivre vos lectures favorites. Grâce à une interface
        intuitive et des fonctionnalités avancées, gérez facilement votre
        bibliothèque, trouvez des recommandations personnalisées et
        connectez-vous avec des milliers de livres et auteurs en quelques clics.
      </h3>
      <div className="py-12">
        <WobleCardsFeatures />
      </div>
    </section>
  );
};

export default Features;
