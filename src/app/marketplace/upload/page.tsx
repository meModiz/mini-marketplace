"use client";
import { storage } from "@/app/firebase";
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export default function UploadListingImages() {
  const [imagesURL, setImagesURL] = useState<string[]>([]);
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const [imageCount, setImageCount] = useState<number>(0);
  const searchParams = useSearchParams();
  const ListingID = searchParams.get("id");
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const router = useRouter();

  async function fetchImages(ListingID: string) {
    try {
      const folderRef = ref(storage, `images/listings/${ListingID}/`);

      const result = await listAll(folderRef);

      const urls = await Promise.all(
        result.items.map((item) => getDownloadURL(item))
      );

      setImagesURL(urls);
      setImageCount(result.items.length);

      return result.items.length;
    } catch (error) {
      console.error("Error fetching images:", error);
      return 0;
    }
  }

  useEffect(() => {
    if (ListingID) {
      fetchImages(ListingID);
    }
  }, []);

  async function HandleImageUpload() {
    if (!currentFile) {
      return;
    }

    const uniqueID = uuidv4();
    const filePath = `images/listings/${ListingID}/${uniqueID}`;
    const fileRef = ref(storage, filePath);

    try {
      await uploadBytes(fileRef, currentFile);
      console.log("File uploaded successfully!");

      const url = await getDownloadURL(fileRef);
      console.log("Download URL:", url);

      setImagesURL((prev) => [...(prev ?? []), url]);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }

  function HandleImageRemove(imgURL: string) {
    const fileName = imgURL.split("%2F").pop()?.split("?")[0];
    const delPath = ref(storage, `images/listings/${ListingID}/${fileName}`);

    deleteObject(delPath)
      .then(() => {
        setImagesURL((prev) => prev.filter((url) => url !== imgURL));
      })
      .catch((error) => {});
  }

  function HandleSave() {
    // Hahaha its already saved=)))))))))

    router.push(`/marketplace`);
  }

  return (
    <div className="flex flex-col px-80 py-3 gap-6 h-screen bg-white dark:bg-gray-900 ">
      <div className="flex flex-col items-start gap-0 text-gray-900 dark:text-white">
        <h1 className="text-H2 font-medium">Upload images for your listing</h1>
        <h2 className="text-lg">
          Name: <span className="font-bold">{name}</span>
        </h2>
        <h2 className="text-lg">
          Price: <span className="font-bold">{price}$</span>
        </h2>
        <h3 className="text-sm">
          Unique id: <span className="font-bold">{ListingID}</span>
        </h3>
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <input
          type="file"
          onChange={(event) => {
            if (event.target.files) {
              setCurrentFile(event.target.files[0]);
            }
          }}
        />
        <div className="flex flex-row gap-3">
          <button
            onClick={HandleImageUpload}
            className="bg-PrimaryColor hover:bg-PrimaryColorHover rounded-lg text-white px-5 py-2.5"
          >
            Upload
          </button>
          <button
            onClick={HandleSave}
            className="bg-PrimaryColor hover:bg-PrimaryColorHover rounded-lg text-white px-5 py-2.5"
          >
            Save
          </button>
        </div>
        <div className="flex flex-row gap-2">
          {imagesURL.map((imgURL, id) => (
            <Image
              key={id}
              alt="Avatar"
              src={imgURL}
              width={100}
              height={100}
              className="rounded-lg object-cover hover:scale-105 hover:opacity-65"
              style={{ width: "100px", height: "100px" }} // Temporary fixed imnage size (idk tbh how to do it nextjs)
              onClick={() => HandleImageRemove(imgURL)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
