"use client";

import Image from "next/image";
import Link from "next/link";
import { Package2, PanelLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { ModeToggle } from "@/components/dark-mode";
import BooksList from "./dashboardHome/BooksList";
import {
  Sidebar,
  SidebarSheet,
} from "@/components/dashboard/navigation/SideBar";
import { LogoutDashBoardButton } from "@/components//login/LogoutButton";
import { User } from "next-auth";
import { usePathname } from "next/navigation";
import FavoriteList from "@/components/dashboard/dashboardFavorites/FavoriteList";
import CategoriesList from "@/components/dashboard/dashboardCategories/CategoriesList";
import DetailedPage from "@/components/dashboard/dashboardDetailedPage/DetailedPage";
import BookReadStats from "@/components/dashboard/dashboardHome/BookReadStats";
import SearchBar from "@/components/dashboard/search/Searchbar";
import BreadCrumb from "@/components/dashboard/Breadcrumb";

interface DashboardProps {
  user?: User;
  category?: string;
  bookId?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ user, category, bookId }) => {
  const url = usePathname();

  if (!user?.id) return null;
  if (!user) return null;

  const isHome = url.startsWith(`/dashboard/${user.id}`);
  const isFavorites = url.startsWith(`/dashboard/favorites/${user.id}`);
  // const isCategory = url.startsWith(
  //   `/dashboard/categories/${user.id}/${category}`
  // );
  const isCategories = url.startsWith(`/dashboard/categories/${user.id}`);
  const isDetailed = url.startsWith(`/dashboard/book/${user.id}/${bookId}`);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Sidebar user={user} />
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <SidebarSheet user={user} />
              </nav>
            </SheetContent>
          </Sheet>
          <BreadCrumb
            userId={user.id}
            isHome={isHome}
            isFavorites={isFavorites}
            isCategories={isCategories}
            isDetailed={isDetailed}
          />
          <SearchBar userId={user.id} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src={user.image ?? ""}
                  loading="lazy"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <ModeToggle />
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogoutDashBoardButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {isHome && (
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 sm:grid-cols-1 grid-cols-1 xl:grid-cols-2">
            <BooksList userId={user.id} />
            <BookReadStats />
          </main>
        )}
        {isFavorites && (
          <main className="grid grid-cols-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <FavoriteList userId={user.id} />
          </main>
        )}
        {isCategories && (
          <main className="grid grid-cols-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <CategoriesList user={user} category={category} />
          </main>
        )}
        {isDetailed && bookId && (
          <main className="grid gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <DetailedPage bookId={bookId} />
          </main>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
