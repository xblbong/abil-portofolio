"use client";
/**
 * Providers.tsx
 * ─────────────────────────────────────────
 * Client-side providers wrapper.
 * Kept as a separate file so root layout stays
 * a Server Component (better for Next.js perf).
 *
 * Add any other context providers here (e.g. SWR,
 * React Query, Modal root) to keep layout.tsx clean.
 */
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"       // adds class="dark" / class="light" to <html>
      defaultTheme="dark"     // start dark
      enableSystem={false}    // don't follow OS preference (user chooses manually)
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
}
