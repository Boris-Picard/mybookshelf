import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonReadStats() {
  return (
    <div className="flex xl:justify-center justify-start">
      <div className="space-y-2 flex">
        <Skeleton className="h-20 w-[70px]" />
        <div className="flex flex-col space-y-6 mx-3">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="space-y-2 flex">
        <Skeleton className="h-20 w-[70px]" />
        <div className="flex flex-col space-y-6 mx-3">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}
