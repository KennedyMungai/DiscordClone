"use client";
import React, { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = { children: ReactNode };

const ThemeProvider = ({ children }: Props) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="discord-theme"
    >
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
