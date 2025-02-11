"use client";
import { FooterAuth, AuthHeadings } from "@/components/AuthComponents";
import Logo from "@/components/Miscs/Logo";
import Image from "next/image";
import { auth } from "@/app/firebase";
import {
  createUserWithEmailAndPassword,
  validatePassword,
} from "firebase/auth";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleRegistration() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  return (
    <div className="w-screen h-screen bg-white flex flex-row">
      <div className="flex flex-col p-8 items-center justify-center w-1/2">
        <div className="flex flex-col items-start justify-between h-full">
          <Logo />
          <div className="flex flex-col gap-6">
            <AuthHeadings
              heading="Create an Account"
              subheading="I already have an account"
              linkText="Sign In"
              link="/signin"
            />
            <input
              name="emailInput"
              placeholder="Email"
              className="border border-gray-300 w-96 text-base text-gray-400 pl-4 py-3 rounded-lg focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="passwordInput"
              placeholder="Password"
              className="border border-gray-300 w-96 text-base text-gray-400 pl-4 py-3 rounded-lg focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="bg-ButtonMain w-full h-12 flex items-center justify-center text-white rounded-lg"
              onClick={handleRegistration}
            >
              Sign up
            </div>
            {error && (
              <div className="text-sm text-red-600 max-w-80">{error}</div>
            )}
          </div>
          <FooterAuth
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            hendrerit."
          />
        </div>
      </div>
      <div className="p-10">
        <Image alt="Woman image" src={"/woman.png"} width={850} height={850} />
      </div>
    </div>
  );
}
