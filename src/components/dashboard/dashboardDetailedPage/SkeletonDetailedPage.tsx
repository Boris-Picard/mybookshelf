import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDetailedPage() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex justify-center mb-5">
        <Skeleton className="h-8 w-[60%] max-w-[250px]" />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 py-8 gap-4">
        <div className="flex justify-center lg:justify-start col-span-1">
          <div className="w-full max-w-[500px]">
            <Skeleton className="h-[500px] w-full rounded-xl" />
            <div className="flex mt-3 space-x-3">
              <Skeleton className="h-8 w-full max-w-[245px]" />
              <Skeleton className="h-8 w-full max-w-[245px]" />
            </div>
            <div className="flex justify-center lg:justify-start">
              <Skeleton className="h-8 w-full max-w-[245px] mt-3" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 mt-5 lg:mt-0 col-span-1">
          <div className="flex flex-col space-y-6">
            <Skeleton className="h-8 w-[50%] max-w-[245px]" />
            <Skeleton className="h-[500px] w-full" />
          </div>
          <Skeleton className="h-0.5 w-full mt-6" />
          <div className="flex flex-col">
            <Skeleton className="h-4 w-[50%] max-w-[245px] mt-6" />
            <Skeleton className="h-4 w-[50%] max-w-[245px] mt-6" />
            <Skeleton className="h-4 w-[50%] max-w-[245px] mt-6" />
            <Skeleton className="h-4 w-[50%] max-w-[245px] mt-6" />
            <Skeleton className="h-4 w-[50%] max-w-[245px] mt-6" />
            <Skeleton className="h-4 w-[50%] max-w-[245px] mt-6" />
            <Skeleton className="h-4 w-[50%] max-w-[245px] mt-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
