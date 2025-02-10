import authenticationLight from "@/../public/authenticationLight.svg";
import authenticationDark from "@/../public/authenticationDark.svg";
import Image from "next/image";
export default function Authentication() {
  return (
    <div>
      <Image
        src={authenticationDark}
        alt="Authentication icon"
        width={24}
        height={24}
      />
    </div>
  );
}
