import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonSearch() {
  return (
    <div className="flex flex-col space-y-3 bg-slate-50 dark:bg-zinc-950">
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <Skeleton className="h-[200px] w-full rounded-xl" />
    </div>
  );
}
