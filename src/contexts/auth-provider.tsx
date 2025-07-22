"use client";

import { getCurrentUser, signOut, User } from "@/lib/auth";
import { createContext, ReactNode, use, useEffect, useState } from "react";

interface AuthContext {
  user: User | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContext | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
  user?: User;
}

export function AuthProvider({
  children,
  user: initialUser,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(initialUser ?? null);
  const [isLoading, setIsLoading] = useState(!initialUser);

  async function handleSignOut() {
    await signOut();
    setUser(null);
  }

  useEffect(() => {
    async function fetchUser() {
      const userData = await getCurrentUser();
      setUser(userData);
      setIsLoading(false);
    }

    if (!initialUser) {
      fetchUser();
    }
  }, [initialUser]);

  const value: AuthContext = {
    user,
    isLoading,
    signOut: handleSignOut,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
}

export function useAuth() {
  const context = use(AuthContext);
  if (context === undefined) {
    throw Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
