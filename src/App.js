import React, { useState, useEffect } from "react";
import Auth from "./components/Auth";
import Notes from "./components/Notes";
import Realtime from "./components/Realtime";
import { messaging } from "./firebase";
import { onMessage } from "firebase/messaging";
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);

  // 🔔 Request Permission for Notifications
  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("🔓 Notification permission granted.");
      } else {
        console.warn("❌ Notification permission denied.");
      }
    });
  }, []);

  // ✉️ Listen for Foreground Messages
  useEffect(() => {
    // Corrected Foreground Listener
    onMessage(messaging, (payload) => {
      console.log("📩 Foreground message received:", payload);

      // Optional: Display notification
      if (payload.notification) {
        alert(`New Message: ${payload.notification.title} - ${payload.notification.body}`);
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>Firebase React App</h1>
      <Auth onUserChange={setUser} />
      {user && (
        <>
          <Notes user={user} />
          <Realtime user={user} />
        </>
      )}
    </div>
  );
}
