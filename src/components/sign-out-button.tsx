import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/contexts/auth-provider";

export function SignOutButton() {
  const { user, isLoading, signOut } = useAuth();

  if (isLoading) {
    return <Skeleton className="h-9 w-23" />;
  }

  if (!user) {
    return null;
  }

  return (
    <Button onClick={signOut} variant="outline">
      Sign Out
    </Button>
  );
}
