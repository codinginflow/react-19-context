"use client";

import { createContext, ReactNode } from "react";

export const ExampleContext = createContext("This is the default value");

interface ExampleProviderProps {
  children: ReactNode;
  value: string;
}

export function ExampleProvider({ children, value }: ExampleProviderProps) {
  return <ExampleContext value={value}>{children}</ExampleContext>;
}
