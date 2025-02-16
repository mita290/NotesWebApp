import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshNotes = () => setRefresh(!refresh);

  return (
    <div>
      <h1>Notes App</h1>
      <NoteForm onAddNote={refreshNotes} />
      <NoteList key={refresh} />
    </div>
  );
};

export default App;
