"use client";

import { useEffect, useState } from "react";

import darkModeIcon from "@/../public/dark_mode.svg";
import lightModeIcon from "@/../public/light_mode.svg";

import Image from "next/image";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.theme);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  }

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, []);

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
