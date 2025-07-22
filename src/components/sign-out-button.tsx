import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { User } from "@/lib/auth";

interface SignOutButtonProps {
  user: User | null;
  isLoading: boolean;
  onSignOut: () => void;
}

export function SignOutButton({
  user,
  isLoading,
  onSignOut,
}: SignOutButtonProps) {
  if (isLoading) {
    return <Skeleton className="h-9 w-23" />;
  }

  if (!user) {
    return null;
  }

  return (
    <Button onClick={onSignOut} variant="outline">
      Sign Out
    </Button>
  );
}
