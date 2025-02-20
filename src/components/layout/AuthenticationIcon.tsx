import authenticationLight from "@/../public/authenticationLight.svg";
import authenticationDark from "@/../public/authenticationDark.svg";
import Image from "next/image";
import { themeContext } from "@/components/layout/ThemeProvider";
import { useContext, useState } from "react";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebase";
export default function Authentication() {
  const { theme } = useContext(themeContext);
  const [isLogged, setLogged] = useState<boolean>(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid); // temporary
      setLogged(true);
    } else {
      setLogged(false);
    }
  });
  return (
    <Link href={isLogged ? "/account" : "/signin"}>
      <Image
        src={theme === "dark" ? authenticationDark : authenticationLight}
        alt="Authentication icon"
        width={24}
        height={24}
      />
    </Link>
  );
}
