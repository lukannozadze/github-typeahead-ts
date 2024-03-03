import { Skeleton } from "../ui/skeleton";
function LoadingSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 bg-[#1E2A47] rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-[#1E2A47]" />
        <Skeleton className="h-4 w-[200px] bg-[#1E2A47]" />
      </div>
    </div>
  );
}

export default LoadingSkeleton;
