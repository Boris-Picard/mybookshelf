"use client";
import { Links } from "@/types/Links";
import { Home, Heart, Library } from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { User } from "next-auth";

interface SiderbarProps {
  user: User;
}

const Sidebar: React.FC<SiderbarProps> = ({ user }) => {
  const pathname = usePathname();

  const links: Links[] = [
    {
      title: "Home",
      href: `/dashboard/${user.id}`,
      icon: Home,
    },
    {
      title: "Favoris",
      href: `/dashboard/favorites/${user.id}`,
      icon: Heart,
    },
    {
      title: "Categories",
      href: `/dashboard/categories/${user.id}`,
      icon: Library,
    },
  ];

  return (
    <>
      {links.map(({ title, href, icon: Icon }) => (
        <TooltipProvider key={title}>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname.startsWith(href)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{title}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{title}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </>
  );
};

const SidebarSheet: React.FC<SiderbarProps> = ({ user }) => {
  const pathname = usePathname();

  const links: Links[] = [
    {
      title: "Home",
      href: `/dashboard/${user.id}`,
      icon: Home,
    },
    {
      title: "Favoris",
      href: `/dashboard/favorites/${user.id}`,
      icon: Heart,
    },
  ];

  return (
    <>
      {links.map(({ title, href, icon: Icon }: Links) => {
        return (
          <Link
            key={title}
            href={href}
            className={cn(
              "flex items-center gap-4 px-2.5",
              pathname.startsWith(href)
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="h-5 w-5" />
            {title}
          </Link>
        );
      })}
    </>
  );
};

export { Sidebar, SidebarSheet };
