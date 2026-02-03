import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function Notes({ user }) {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const snapshot = await getDocs(collection(db, "notes"));
    setNotes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  const addNote = async () => {
    if (!note.trim()) return;
    await addDoc(collection(db, "notes"), {
      text: note,
      user: user.email,
    });
    setNote("");
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, "notes", id));
    fetchNotes();
  };

  const updateNote = async (id, newText) => {
    await updateDoc(doc(db, "notes", id), { text: newText });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h3>Notes</h3>
<div className="notes-input-container">
  <input
    value={note}
    onChange={(e) => setNote(e.target.value)}
    placeholder="Write something..."
  />
  <button className="add-note-btn" onClick={addNote}>
    Add Note
  </button>
</div>

<ul className="notes-list">
  {notes.map((n) => (
    <li key={n.id} className="note-item">
      <div className="note-text">{n.text} ({n.user})</div>
      <div className="note-actions">
        <button
          className="edit-btn"
          onClick={() => updateNote(n.id, prompt("New text:", n.text))}
        >
          Edit
        </button>
        <button className="delete-btn" onClick={() => deleteNote(n.id)}>
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>
    </div>
  );
}
