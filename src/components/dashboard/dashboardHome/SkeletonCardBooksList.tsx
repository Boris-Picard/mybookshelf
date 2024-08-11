import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCardBooksList() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <div className="space-y-2 flex justify-between">
        <Skeleton className="h-8 w-[250px]" />
        <Skeleton className="h-8 w-[250px]" />
      </div>
    </div>
  );
}
