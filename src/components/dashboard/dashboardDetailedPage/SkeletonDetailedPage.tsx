import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDetailedPage() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex justify-center mb-5">
        <Skeleton className="h-8 w-[250px]" />
      </div>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <Skeleton className="h-[700px] w-[500px] rounded-xl" />
          <div className="flex mt-3 space-x-3">
            <Skeleton className="h-8 w-[245px]" />
            <Skeleton className="h-8 w-[245px]" />
          </div>
          <Skeleton className="h-8 w-[245px] mt-3" />
        </div>
        <div className="col-span-3 mt-5">
          <div className="flex flex-col space-y-6">
            <Skeleton className="h-8 w-[245px]" />
            <Skeleton className="h-[500px] w-full" />
          </div>
          <Skeleton className="h-0.5 w-full mt-6" />
          <div className="flex flex-col">
            <Skeleton className="h-4 w-1/2 mt-6" />
            <Skeleton className="h-4 w-1/2 mt-6" />
            <Skeleton className="h-4 w-1/2 mt-6" />
            <Skeleton className="h-4 w-1/2 mt-6" />
            <Skeleton className="h-4 w-1/2 mt-6" />
            <Skeleton className="h-4 w-1/2 mt-6" />
            <Skeleton className="h-4 w-1/2 mt-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
