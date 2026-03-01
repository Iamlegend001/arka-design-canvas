import React from "react";
import { useDarkMode } from "@/contexts/useDarkMode";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const { isDark, toggle } = useDarkMode();

  return (
    <button
      type="button"
      onClick={toggle}
      className="dark-mode-toggle"
      aria-label="Toggle dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun size={20} strokeWidth={1.5} />
      ) : (
        <Moon size={20} strokeWidth={1.5} />
      )}
    </button>
  );
};

export default DarkModeToggle;
