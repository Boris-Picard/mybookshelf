import { AnimatedButton } from "@/components/home/hero/AnimatedButton";
import ParticlesBackground from "@/components/home/hero/ParticlesBackground";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { BorderBeamHero } from "@/components/home/hero/BorderBeamHero";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative mx-auto py-12 lg:py-24 w-full px-6 text-center md:px-8 min-h-full"
    >
      <ParticlesBackground />
      <div className="relative z-10 max-w-[80rem] mx-auto">
        <AnimatedButton />
        <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          MyBookshelf : Gérez vos livres préférés en un clic.
        </h1>
        <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
          Découvrez une bibliothèque personnalisée avec des recommandations sur
          mesure.
          <br className="hidden md:block" />
          Suivez vos lectures, explorez de nouvelles catégories, et trouvez vos
          prochains coups de cœur littéraires.
        </p>
        <Link href="/auth/login">
          <Button variant="secondary">
            Commencez votre aventure littéraire
            <ArrowRightIcon className="ml-1 size-3" />
          </Button>
        </Link>
        <BorderBeamHero />
      </div>
    </section>
  );
};

export default Hero;
