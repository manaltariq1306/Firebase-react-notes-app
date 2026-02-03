import React, { useEffect, useState } from "react";
import { rtdb } from "../firebase";
import { ref, set, onValue } from "firebase/database";

export default function Realtime({ user }) {
  const [msg, setMsg] = useState("");
  const [liveMsg, setLiveMsg] = useState("");

  useEffect(() => {
    const msgRef = ref(rtdb, "liveMessage");
    onValue(msgRef, (snapshot) => {
      setLiveMsg(snapshot.val());
    });
  }, []);

  const updateMsg = () => {
    set(ref(rtdb, "liveMessage"), msg);
  };

  return (
    <div>
      <h3>Live Message</h3>
      <input value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button onClick={updateMsg}>Update Live Message</button>
      <p>
        <strong>Live:</strong> {liveMsg}
      </p>
    </div>
  );
}
