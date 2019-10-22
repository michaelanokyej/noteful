import React from "react";
import { Link, Route } from "react-router-dom";
// import Note from './Note';

const MainBody = props => {
  const notes = props.notes.map((note, index) => {
    return (
      // My map 
      // <li key={note.id} className="noteLi">
      //   <div className="noteInfo">
      //     <h3>
      //       <Link to={`/notes/${note.id}`} className="note-folder-Header">
      //         {note.name}
      //       </Link>
      //     </h3>
      //     <div className="modified">
      //       Modified <span>{note.modified}</span>
      //     </div>
      //   </div>
      //   <button className="removeButton">remove</button>
      // </li>

<li key={note.id}>
<div className='Note'>
<h2 className='Note__title'>
  <Link to={`/notes/${note.id}`}>
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
</li>

    );
  });

  return (
    // My return 
    // <div className="mainPage">
    //   <ul>{notes}</ul>
    //   <button className="addNoteButton">+ Note</button>
    // </div>



// Thinkful's return 
<section className='NoteListMain'>
<ul>{notes}</ul>
<button className="addNoteButton">+ Note</button>
</section>
  );
};

export default MainBody;
