import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      // Fetch data from the API
      const response = await axios.get('http://localhost:3000/api/notes');

      // Extract the rows (actual notes) from the response
      const { rows } = response.data;
      console.log(rows);
      setNotes(rows);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  return (
    <div>
      <h2>Notes</h2>
      {notes.length > 0 ? (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <small>Created At: {new Date(note.created_at).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
};

export default NoteList;
