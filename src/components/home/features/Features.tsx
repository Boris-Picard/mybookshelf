import { WobleCardsFeatures } from "./WobbleCards";

const Features = () => {
  return (
    <section
      id="section"
      className="lg:py-24 relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8 h-screen"
    >
      <h2 className="mb-2 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        Features
      </h2>
      <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quam sed
        accusantium accusamus eum corrupti minus non itaque, et sapiente aliquam
        nihil odit ab quidem tempora incidunt, laborum alias veritatis.
      </h3>
      <div className="xl:py-24 py-12">
        <WobleCardsFeatures />
      </div>
    </section>
  );
};

export default Features;
