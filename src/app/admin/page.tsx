"use client";
import { useState } from "react";
import { storage } from "@/app/firebase";
import { ref, uploadBytes } from "firebase/storage";

function App() {
  const [file, setFile] = useState<File | null>(null);

  function UploadFile() {
    if (!file) {
      return;
    }

    if (file.type != "image/jpeg" && file.type != "image/png") {
      return;
    }

    const storageRef = ref(storage, `images/${Date.now()}-${file.name}`);

    try {
      uploadBytes(storageRef, file).then(() => {
        console.log("Uploaded a blob or file!");
      });
    } catch (exp) {
      console.log("unexpected error: " + exp);
    }
  }

  return (
    <div className="App">
      <center>
        <input
          type="file"
          onChange={(event) => {
            if (event.target.files) {
              setFile(event.target.files[0]);
              console.log(event.target.files[0].type);
            }
          }}
        />
        <button onClick={UploadFile}>Upload</button>
      </center>
    </div>
  );
}

export default App;
