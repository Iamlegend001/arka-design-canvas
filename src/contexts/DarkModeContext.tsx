import React, { createContext, useContext, useEffect, useState } from "react";

interface DarkModeContextType {
  isDark: boolean;
  toggle: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined,
);

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // determine initial mode: localStorage > system > default light
  const getInitial = () => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("dark");
    if (stored !== null) return stored === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDark, setIsDark] = useState<boolean>(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("dark", isDark ? "true" : "false");
    } catch (e) {
      // localStorage may be unavailable (e.g. private mode)
      console.warn("couldn't persist theme preference", e);
    }
  }, [isDark]);

  const toggle = () => setIsDark((d) => !d);

  return (
    <DarkModeContext.Provider value={{ isDark, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext };
