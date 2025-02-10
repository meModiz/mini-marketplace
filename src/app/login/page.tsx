"use client";
import { auth } from "@/app/firebase";
import Logo from "@/components/Logo";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";

export default function Auth() {
  function getRegistered() {
    createUserWithEmailAndPassword(auth, "modis@gmail.com", "123456")
      .then((userCredential) => {
        console.log("User registered:", userCredential.user);
      })
      .catch((error) => {
        console.error("Error:", error.code, error.message);
      });
  }

  return (
    <div className="w-screen h-screen bg-white flex flex-row">
      <div className="flex flex-col justify-start p-8 items-center w-1/2">
        <Logo />
      </div>
      <div className="p-10">
        <Image alt="Company logo" src={"/woman.png"} width={850} height={850} />
      </div>
    </div>
  );
}
