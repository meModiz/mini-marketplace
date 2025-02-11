import authenticationLight from "@/../public/authenticationLight.svg";
import authenticationDark from "@/../public/authenticationDark.svg";
import Image from "next/image";
import { themeContext } from "@/utils/ThemeProvider";
import { useContext } from "react";

export default function Authentication() {
  const { theme } = useContext(themeContext);
  return (
    <div>
      <Image
        src={theme === "dark" ? authenticationDark : authenticationLight}
        alt="Authentication icon"
        width={24}
        height={24}
      />
    </div>
  );
}
