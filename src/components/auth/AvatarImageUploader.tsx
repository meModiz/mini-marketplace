"use client";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth, storage } from "@/app/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import UploadFile from "@/data/uploadImage";

export default function AvatarImageUploader() {
  const [file, setFile] = useState<File | null>(null);

  function UpdateAvatar() {
    const user = auth.currentUser;
    const email = user?.email;

    if (!file) {
      return;
    }

    UploadFile({ file, FullPath: `images/avatars/${email}` });

    getDownloadURL(ref(storage, `images/avatars/${email}`))
      .then((url) => {
        if (auth.currentUser === null) return;
        updateProfile(auth.currentUser, {
          photoURL: url,
        });
        window.location.reload(); // temporary way to show new avatar
      })
      .catch((error) => {
        console.log("unexpected error: " + error);
      });
  }

  // Need to add error component
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <input
        type="file"
        onChange={(event) => {
          if (event.target.files) {
            setFile(event.target.files[0]);
          }
        }}
      />
      <button
        className="bg-PrimaryColor hover:bg-PrimaryColorHover rounded-lg text-white px-5 py-2.5"
        onClick={UpdateAvatar}
      >
        Upload
      </button>
    </div>
  );
}
