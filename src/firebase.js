import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
export const messaging = getMessaging(app);

getToken(messaging, { vapidKey: "BDVOYdsL3sb8yLAxfnU7T6uu9k-r9ocEWtVXYspB0pP-LUgE2DDM55IpUaj84M0LRBf35nwhhx32d-nmn4TZWjo" })
  .then((token) => {
    if (token) {
      console.log("Token:", token);
    } else {
      console.warn("No token received");
    }
  })
  .catch(console.error);

// Listen for messages
onMessage(messaging, (payload) => {
  console.log("Foreground message:", payload);
});