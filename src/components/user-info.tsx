/* eslint-disable @next/next/no-img-element */
import { User } from "@/lib/auth";

interface UserInfoProps {
  user: User;
}

export function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={user.avatar}
        alt={`${user.firstName} ${user.lastName}`}
        className="h-16 w-16 rounded-full object-cover"
      />
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">
          {user.firstName} {user.lastName}
        </h3>
        <p className="text-muted-foreground text-sm">{user.email}</p>
        <p className="text-muted-foreground text-xs">
          Member since {user.createdAt.toDateString()}
        </p>
      </div>
    </div>
  );
}
