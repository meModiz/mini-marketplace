import * as admin from "firebase-admin";
import { cert } from "firebase-admin/app";

// Prevent multiple initializations
if (!admin.apps.length) {
  admin.initializeApp({
    credential: cert(require("../serviceAccountKey.json")), // Ensure correct path
  });
}

export const authAdmin = admin.auth();
export const dbAdmin = admin.firestore();
