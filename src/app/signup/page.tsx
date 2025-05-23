"use client";
import { FooterAuth, AuthHeadings } from "@/components/auth/AuthComponents";
import Logo from "@/components/common/Logo";
import Image from "next/image";
import { auth } from "@/app/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleRegistration() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user); // temporary
        if (auth.currentUser !== null) {
          const username = email.split("@")[0];
          updateProfile(auth.currentUser, {
            displayName: username,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          });
        }
        router.push("/marketplace", { scroll: false });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  return (
    <div className="w-screen h-screen flex flex-row">
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
              className="bg-PrimaryColor hover:bg-PrimaryColorHover w-full h-12 flex items-center justify-center text-white rounded-lg"
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
