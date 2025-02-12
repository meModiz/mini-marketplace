"use client";
import { useState } from "react";
import { auth, storage } from "@/app/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
export default function AvatarImageUploader() {
  const [file, setFile] = useState<File | null>(null);

  function UploadFile() {
    if (!file) {
      return;
    }

    if (file.type != "image/jpeg" && file.type != "image/png") {
      return;
    }

    const user = auth.currentUser;
    const email = user?.email;
    const storageRef = ref(storage, `images/avatars/${email}`);
    try {
      uploadBytes(storageRef, file).then(() => {
        console.log("Uploaded a blob or file!");
      });
    } catch (exp) {
      console.log("unexpected error: " + exp);
    }

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
        className="bg-ButtonMain rounded-lg text-white px-5 py-2.5"
        onClick={UploadFile}
      >
        Upload
      </button>
    </div>
  );
}
