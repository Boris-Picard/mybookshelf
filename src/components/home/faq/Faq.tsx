import AccordionSection from "@/components/home/faq/Accordion";

const Faq = () => {
  return (
    <section
      id="faq"
      className="lg:py-24 relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8 h-full"
    >
      <h2 className="mb-2 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        FAQ
      </h2>
      <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Vous avez des questions sur MyBookshelf ? Trouvez ici les réponses aux
        questions les plus fréquemment posées sur la navigation sur notre site,
        la gestion de votre bibliothèque et plus encore. Si vous avez besoin
        d'informations supplémentaires, n'hésitez pas à nous contacter.
      </h3>
      <div className="sm:p-24 py-12">
        <AccordionSection />
      </div>
    </section>
  );
};

export default Faq;
