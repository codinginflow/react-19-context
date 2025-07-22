import { Skeleton } from "@/components/ui/skeleton";
import { User } from "@/lib/auth";

interface GreetingProps {
  user: User | null;
  isLoading: boolean;
}

export function Greeting({ user, isLoading }: GreetingProps) {
  if (isLoading) {
    return <Skeleton className="h-6 w-34" />;
  }

  return (
    <span className="text-lg font-medium">
      Hello, {user ? `${user.firstName} ${user.lastName}` : "Guest"}!
    </span>
  );
}
