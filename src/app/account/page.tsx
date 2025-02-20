"use client";
import { auth, storage } from "@/app/firebase";
import ImageUploader from "@/components/auth/AvatarImageUploader";
import {
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, ref } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AccountPage() {
  const router = useRouter();
  // undefined required, because in some cases still loading auth state.
  const [user, setUser] = useState(auth.currentUser || undefined || null);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [avatarURL, setAvatarURL] = useState<string>("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setName(user?.displayName || "no_name");
        setEmail(user?.email || "no_email");
        getDownloadURL(ref(storage, `images/avatars/${user?.email}`))
          .then((url) => {
            setAvatarURL(url);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setUser(null);
      }
    });
  }, []);

  if (user === undefined) {
    <div className="flex flex-col px-80 py-3 gap-6">
      <h1 className="text-H2 text-gray-900">Loading...</h1>
    </div>;
  }

  if (user === null) {
    return (
      <div className="flex flex-col px-80 py-3 gap-6">
        <h1 className="text-H2 text-gray-900">No access</h1>
      </div>
    );
  }

  function SaveUser() {
    if (auth.currentUser === null) {
      return;
    }
    updateProfile(auth.currentUser, {
      displayName: name,
    });

    updateEmail(auth.currentUser, email);
  }

  function SignOutUser() {
    signOut(auth)
      .then(() => {
        router.push("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function SendVerificationEmail() {
    if (auth.currentUser === null) {
      return;
    }
    sendEmailVerification(auth.currentUser);
  }

  return (
    <div className="flex flex-col py-3 gap-6 bg-white dark:bg-gray-900 h-screen pl-72">
      <h1 className="text-H2 text-gray-900">Account settings</h1>
      {!user.emailVerified && (
        <div className="flex flex-row items-center gap-2">
          <h2 className="text-PrimaryButtonColor text-lg font-bold">
            Email not verified!
          </h2>
          <button
            className="bg-PrimaryColor hover:bg-PrimaryColorHover rounded-lg text-white px-3 py-2.5"
            onClick={SendVerificationEmail}
          >
            Send verification email
          </button>
        </div>
      )}
      <div className="flex flex-col gap-5 items-start w-fit">
        <div className="flex flex-row items-center gap-5">
          <div className="flex flex-col items-start gap-2">
            <label className="text-sm text-gray-900 flex flex-col">
              Name
              <input
                name="nameImput"
                className="border border-gray-300 dark:border-gray-600 w-96 text-base text-gray-900 dark:text-white pl-4 py-3 rounded-lg focus:outline-none bg-transparent"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>
            <label className="text-sm text-gray-900 flex flex-col">
              Email
              <input
                name="EmailImput"
                className="border border-gray-300 dark:border-gray-600 w-96 text-base text-gray-900 dark:text-white pl-4 py-3 rounded-lg focus:outline-none bg-transparent"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
          </div>
          <div className="flex flex-row gap-2">
            {avatarURL !== "" && (
              <label className="text-sm text-gray-900 flex flex-col">
                Current avatar:
                <Image
                  alt="Avatar"
                  src={avatarURL}
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                  style={{ width: "100px", height: "100px" }} // Temporary fixed imnage size (idk tbh how to do it nextjs)
                />
              </label>
            )}
            <ImageUploader />
          </div>
        </div>
        <div className="flex flex-row items-center gap-10">
          <button
            className="bg-PrimaryColor hover:bg-PrimaryColorHover rounded-lg text-white px-7 py-2.5"
            onClick={SaveUser}
          >
            Save
          </button>
          <button
            className="bg-SecondaryColor hover:bg-SecondaryColorHover dark:bg-gray-500 dark:hover:bg-gray-400 rounded-lg text-white px-7 py-2.5"
            onClick={SignOutUser}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
