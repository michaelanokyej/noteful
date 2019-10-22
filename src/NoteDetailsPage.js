import React from 'react';
import { Link, Route } from "react-router-dom";
import './MainBody.css';
import './NoteDetailsPage.css';

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
    // My initial way 
    // <div className="noteDiv">
    //     <div className="noteDetails">
    //       <div>
    //         <div>
    //           <h1 className="note-folder-Header">{note.name}</h1>
    //         </div>
    //         <div className="modified">
    //           Modified <span> {note.modified}</span>
    //         </div>
    //       </div>
    //       <button className="removeButton">remove</button>
    //     </div>
    //     <p>{note.content}</p>
    // </div>



<section className='NotePageMain'>
<div className='Note'>
      <h2 className='Note__title'>
        <Link to={`/note/${note.id}`}>
        {note.name}
        </Link>
      </h2>
      <button className='Note__delete' type='button'>
        remove
      </button>
      <div className='Note__dates'>
        <div className='Note__dates-modified'>
          Modified
          {' '}
          <span className='Date'>
          {note.modified}
          </span>
        </div>
      </div>
    </div>
<div className='NotePageMain__content'>
  {note.content.split(/\n \r|\n/)}
</div>
</section>
  )
}

export default NoteDetailsPage;