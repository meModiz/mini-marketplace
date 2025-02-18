"use client";

import { useContext } from "react";

import darkModeIcon from "@/../public/dark_mode.svg";
import lightModeIcon from "@/../public/light_mode.svg";

import Image from "next/image";
import { themeContext } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(themeContext);
  return (
    <div>
      <Image
        src={theme === "dark" ? darkModeIcon : lightModeIcon}
        alt="Theme Toggler Icon"
        width={24}
        height={24}
        onClick={toggleTheme}
      />
    </div>
  );
}
