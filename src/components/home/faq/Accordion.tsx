import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type AccordionSection = {
  title: string;
  description: string;
};

const accordionSection: AccordionSection[] = [
  {
    title:
      "Comment puis-je ajouter un livre à ma liste de favoris sur MyBookshelf ?",
    description:
      "Vous pouvez ajouter un livre à vos favoris en cliquant sur l'icône étoile située sur la carte du livre dans votre dashboard ou sur la page de détail du livre. Cela permettra de recevoir des recommandations similaires.",
  },
  {
    title: "Peut-on lire des livres directement sur MyBookshelf ?",
    description:
      "MyBookshelf fournit des liens pour acheter ou télécharger des livres via Google Books. Bien que la lecture directe ne soit pas disponible sur notre site, nous facilitons l'accès à vos lectures chez nos partenaires.",
  },
  {
    title: "Comment les recommandations de livres sont-elles générées ?",
    description:
      "Les recommandations sur MyBookshelf sont générées en utilisant votre historique de lecture et vos favoris pour vous proposer des livres qui correspondent à vos intérêts littéraires. Plus vous interagissez avec le système, plus les recommandations deviennent précises.",
  },
  {
    title: "Comment puis-je supprimer un livre de ma bibliothèque ?",
    description:
      "Pour supprimer un livre de votre bibliothèque, allez à votre collection de livres, cliquez sur le livre que vous souhaitez supprimer, et sélectionnez l'option 'Supprimer ce livre' dans le menu des actions.",
  },
  {
    title: "Est-il possible de récupérer un livre marqué comme 'lu' ?",
    description:
      "Oui, vous pouvez gérer votre liste de livres lus à tout moment en accédant à la section 'Livres Lus' de votre compte. Vous pouvez marquer un livre comme non-lu ou le supprimer de la liste.",
  },
  {
    title:
      "Quelles sont les options de recherche disponibles sur MyBookshelf ?",
    description:
      "Sur MyBookshelf, vous pouvez rechercher des livres par titre, auteur, genre ou même mots-clés spécifiques. Utilisez la barre de recherche pour trouver rapidement ce que vous cherchez.",
  },
];

const AccordionSection = () => {
  return accordionSection.map(({ title, description }) => {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{description}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  });
};

export default AccordionSection;
