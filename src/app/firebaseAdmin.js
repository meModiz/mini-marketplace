import * as admin from "firebase-admin";
import { cert } from "firebase-admin/app";

const serverFirebaseConfig = {
  type: process.env.FIREBASE_SERVER_TYPE,
  project_id: process.env.FIREBASE_SERVER_PROJECT_ID,
  private_key_id: process.env.FIREBASE_SERVER_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_SERVER_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  client_email: process.env.FIREBASE_SERVER_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_SERVER_CLIENT_ID,
  auth_uri: process.env.FIREBASE_SERVER_AUTH_URI,
  token_uri: process.env.FIREBASE_SERVER_TOKEN_URI,
  auth_provider_x509_cert_url:
    process.env.FIREBASE_SERVER_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_SERVER_CLIENT_X509_CERT_URL,
  universe_domain: process.env.FIREBASE_SERVER_UNIVERSE_DOMAIN,
};

// Prevent multiple initializations
if (!admin.apps.length) {
  admin.initializeApp({
    credential: cert(serverFirebaseConfig), // Ensure correct path
  });
}

export const authAdmin = admin.auth();
export const dbAdmin = admin.firestore();
