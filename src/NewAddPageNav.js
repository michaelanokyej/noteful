import React from "react";
import { Link, Route } from "react-router-dom";
import './MainBody.css';

const NewAddPageNav = (props) => {
  return (
    <div className="NotePageNav">
      <Link to="/">
        <button className="NavCircleButton NotePageNav__back-button">
          Back
        </button>
      </Link>
    </div>
  )
}

export default NewAddPageNav;