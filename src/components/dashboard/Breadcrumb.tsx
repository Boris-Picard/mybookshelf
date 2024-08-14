import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

const BreadCrumb = ({
  userId,
  isHome,
  isFavorites,
  isCategories,
  isDetailed,
}: {
  userId: string;
  isHome: boolean;
  isFavorites: boolean;
  isCategories: boolean;
  isDetailed: boolean;
}) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((path) => path);

  const isDetailedCategory =
    segments.length > 3 &&
    pathname.includes(`/dashboard/categories/${userId}/${segments[3]}`);

  return (
    <Breadcrumb className="hidden lg:block">
      {isHome && (
        <BreadcrumbItem>
          <BreadcrumbPage>Dashboard</BreadcrumbPage>
        </BreadcrumbItem>
      )}
      {isFavorites && (
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/dashboard/${userId}`}>
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Favoris</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      )}
      {isCategories && !isDetailedCategory && (
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/dashboard/${userId}`}>
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Catégories</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      )}
      {isCategories && isDetailedCategory && (
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/dashboard/${userId}`}>
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/dashboard/categories/${userId}`}>
              Catégories
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="capitalize">
              {segments[3]}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      )}
      {isDetailed && (
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/dashboard/${userId}`}>
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Détail</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      )}
    </Breadcrumb>
  );
};

export default BreadCrumb;
