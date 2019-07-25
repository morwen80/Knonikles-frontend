export function fetchAllNotes() {
  return (dispatch) => { dispatch({ type: 'LOAD_NOTES' });

    return fetch('http://localhost:3000/notes/')
      .then(response => response.json())
      .then(notes => dispatch({ type: 'FETCH_NOTES_SUCCESS', payload: notes }));
  }
};

export function addNewNote(newNote) {
  const noteCreated = {
    title: newNote.title,
    note: newNote.body
  }
  return (dispatch) => {
    dispatch({ type: 'LOAD_NOTES' });

    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(noteCreated)
    })
    .then(response => response.json())
    .then(notes => {
      dispatch({ type: 'ADD_NEW_NOTE_SUCCESS', payload: notes })
    })
      .catch(error => dispatch({ type: 'ADD_NEW_NOTE_ERROR', error: error.message }));
  }
};

export function deleteNote(id) {
  return (dispatch) => {
    dispatch({ type: 'DELETE_NOTE', payload: id });

    return fetch(`http://localhost:3000/notes/${id}`, {
      method: 'DELETE'}
    )
    .then(response => response.json())
  }
};

export function editNote(note) {
  return (dispatch) => { dispatch({ type: 'EDIT_NOTE_ATTEMPT' });

    return fetch(`http://localhost:3000/notes/${note.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
        })
        .then(resp => resp.json())
        .then(notes => dispatch({ type: 'EDIT_NOTE_SUCCESS', payload: notes}))
        .catch(error => dispatch({ type: 'EDIT_NOTE_ERROR', error: error.message }));
    }
};
