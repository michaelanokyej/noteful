import React from 'react';

const NoteDetailsPage = (props) => {

  // take the id from the url
  const id = props.match.params.noteId;

  // find the note who id match the one against
  const note = props.notes.find(el => el.id === id);

  // if no note, we show a 404
  if (!note) {
    return (
      <div>
        <h1>404</h1>
      </div>
    )
  }

  console.log('props', props)

  return (
    <div>
      <div>
        <div className="noteDetails">
          <h1>{note.name}</h1>
          <span>{note.modified}</span>
        </div>

        <p>{note.content}</p>
      </div>
      <button>remove</button>
    </div>
  )
}

export default NoteDetailsPage;