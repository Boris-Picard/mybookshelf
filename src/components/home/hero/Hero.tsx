import { AnimatedButton } from "@/components/home/hero/AnimatedButton";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8 h-screen"
    >
      <ParticlesBackground />
      <div className="relative z-10">
        <AnimatedButton />
        <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          Magic UI is the new way to build landing pages.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
