import { storage } from "@/app/firebase";
import { ref, uploadBytes } from "firebase/storage";

export default function UploadFile({
  file,
  FullPath,
}: {
  file: File;
  FullPath: string;
}) {
  if (!file) {
    return;
  }

  if (file.type != "image/jpeg" && file.type != "image/png") {
    return;
  }

  const storageRef = ref(storage, FullPath);
  try {
    uploadBytes(storageRef, file).then(() => {
      console.log("Uploaded a blob or file!");
    });
  } catch (exp) {
    console.log("unexpected error: " + exp);
  }
}
