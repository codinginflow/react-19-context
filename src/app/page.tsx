"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { UserProfile } from "@/components/user-profile";
import { getCurrentUser, signOut, type User } from "@/lib/auth";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [userLoading, setUserLoading] = useState(true);

  async function handleSignOut() {
    await signOut();
    setUser(null);
  }

  useEffect(() => {
    async function fetchUser() {
      const userData = await getCurrentUser();
      setUser(userData);
      setUserLoading(false);
    }

    fetchUser();
  }, []);

  return (
    <div>
      <Navbar user={user} isLoading={userLoading} onSignOut={handleSignOut} />
      <main className="container mx-auto p-6">
        <UserProfile user={user} isLoading={userLoading} />
      </main>
      <Footer />
    </div>
  );
}
