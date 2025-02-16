import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Title:', title, 'Content:', content);

    try {
      await axios.post('http://localhost:3000/api/notes', { title, content });
      setTitle('');
      setContent('');
      onAddNote();
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
