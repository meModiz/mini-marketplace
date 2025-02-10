import Image from "next/image";

export default function Logo() {
  return <Image alt="Company logo" src={"/logo.png"} width={140} height={40} />;
}
