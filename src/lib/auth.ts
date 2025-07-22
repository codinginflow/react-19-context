export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  createdAt: Date;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const mockUser: User = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  createdAt: new Date("2023-01-15"),
};

export async function getCurrentUser(): Promise<User> {
  // Simulate network delay
  await delay(800);
  return mockUser;
}

export async function signOut() {
  await delay(300);
  // In a real app, this would clear tokens, cookies, etc.
}
