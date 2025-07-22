import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function UserProfileLoader() {
  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-5 w-24" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-22" />
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
