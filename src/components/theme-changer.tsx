"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="flex items-center gap-2"
        >
          <SunIcon /> Light Theme
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="flex items-center gap-2"
        >
          <MoonIcon /> Dark Theme
        </button>
      )}
    </>
  );
};
