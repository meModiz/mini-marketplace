"use client";
import { AuthHeadings, FooterAuth } from "@/components/AuthComponents";
import Logo from "@/components/Miscs/Logo";
import Image from "next/image";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  return (
    <div className="w-screen h-screen bg-white dark:bg-gray-900 flex flex-row">
      <div className="flex flex-col p-8 items-center justify-center w-1/2">
        <div className="flex flex-col items-start justify-between h-full">
          <Logo />
          <div className="flex flex-col gap-6">
            <AuthHeadings
              heading="Welcome back"
              subheading="Do not have an account?"
              linkText="Create an account"
              link="/signup"
            />
            <input
              name="emailInput"
              placeholder="Email"
              className="border border-gray-300 dark:border-gray-600 w-96 text-base text-gray-400 dark:text-gray-500 pl-4 py-3 rounded-lg focus:outline-none bg-transparent"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="passwordInput"
              placeholder="Password"
              className="border border-gray-300 dark:border-gray-600 w-96 text-base text-gray-400 dark:text-gray-500 pl-4 py-3 rounded-lg focus:outline-none bg-transparent"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-sm text-gray-700 dark:text-gray-200 text-right font-medium">
              Forgot password?
            </div>
            <div
              className="bg-ButtonMain w-full h-12 flex items-center justify-center text-white rounded-lg"
              onClick={handleLogin}
            >
              Sign In
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
