import { Greeting } from "@/components/greeting";
import { SignOutButton } from "@/components/sign-out-button";

export function Navbar() {
  return (
    <nav className="border-b p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Greeting />
        <SignOutButton />
      </div>
    </nav>
  );
}
