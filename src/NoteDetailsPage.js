import React from 'react';
import './MainBody.css';
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
    <div className="noteDiv">
        <div className="noteDetails">
          <div>
            <div>
              <h1 className="note-folder-Header">{note.name}</h1>
            </div>
            <div className="modified">
              Modified <span> {note.modified}</span>
            </div>
          </div>
          <button className="removeButton">remove</button>
        </div>
        <p>{note.content}</p>
    </div>
  )
}

export default NoteDetailsPage;