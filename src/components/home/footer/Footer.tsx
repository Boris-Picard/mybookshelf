import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full m-auto pb-6 border-t-2">
      <div className="container">
        <div className="sm:p-24 flex flex-col gap-4 justify-between sm:flex-row sm:gap-10">
          <div className="flex items-start gap-2 flex-col mt-6 min-h-full justify-center">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/static/img/logo.svg"
                  height={56}
                  width={56}
                  alt="logo mybookshelf"
                  loading="lazy"
                  className="dark:invert"
                />
                <span className="text-2xl hover:text-primary">myBookShelf</span>
              </div>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4 grid-cols-2">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2 mt-6">Navigation</h3>
              <Link href="/" className="mr-auto hover:text-primary transition">
                Home
              </Link>
              <Link
                href="#features"
                className="mr-auto hover:text-primary transition"
              >
                Features
              </Link>
              <Link
                href="#explore"
                className="mr-auto hover:text-primary transition"
              >
                Explore
              </Link>
              <Link
                href="#faq"
                className="mr-auto hover:text-primary transition"
              >
                FAQ
              </Link>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2 mt-6">Information</h3>
              <span className="mr-auto hover:text-primary transition">
                Nous contacter
              </span>
              <span className="mr-auto hover:text-primary transition">
                Mentions légales
              </span>
              <span className="mr-auto hover:text-primary transition">
                Conditions d'utilisation
              </span>
              <span className="mr-auto hover:text-primary transition">
                Politique de confidentialité
              </span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2 mt-6">A propos</h3>
              <Link
                href="https://github.com/Boris-Picard"
                target="_blank"
                className="mr-auto hover:text-primary transition"
              >
                Github
              </Link>
              <Link
                href="https://www.linkedin.com/in/boris-picard-2906029b/"
                target="_blank"
                className="mr-auto hover:text-primary transition"
              >
                Linkedin
              </Link>
              <Link
                href="https://boris-picard.fr/"
                target="_blank"
                className="mr-auto hover:text-primary transition"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
