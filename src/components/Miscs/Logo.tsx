import Image from "next/image";
import { themeContext } from "@/components/ThemeProvider";
import { useContext } from "react";

export default function Logo() {
  const { theme } = useContext(themeContext);
  return (
    <Image
      alt="Company logo"
      src={theme == "dark" ? "/Logo_Dark.png" : "/Logo.png"}
      width={140}
      height={40}
    />
  );
}
