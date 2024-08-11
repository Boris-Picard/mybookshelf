import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCardFavorites() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex space-x-3">
        <Skeleton className="h-8 w-[180px]" />
        <Skeleton className="h-8 w-[180px]" />
      </div>
      <Skeleton className="h-[200px] w-full rounded-xl" />
    </div>
  );
}
