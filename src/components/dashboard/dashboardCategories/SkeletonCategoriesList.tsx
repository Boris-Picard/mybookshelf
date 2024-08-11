import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCategoriesList() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex justify-center">
        <Skeleton className="h-8 w-[250px]" />
      </div>
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <Skeleton className="h-[200px] w-full rounded-xl" />
    </div>
  );
}
