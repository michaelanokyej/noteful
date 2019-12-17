import React from "react";
import { Link } from "react-router-dom";
import noteAndFolderContext from "./context/noteAndFolderContext";

class RemoveButton extends React.Component {
  static contextType = noteAndFolderContext;

  // use this.props.id in place of noteid 
  // deleteBookmarkRequest(noteId, callback) {
  //   const url = `http://localhost:9090/notes/`
  //   fetch(url + `${noteId}`, {
  //     method: 'DELETE',
  //   })
  //     .then(res => {
  //       if (!res.ok) {
  //         // get the error message from the response,
  //         return res.json().then(error => {
  //           // then throw it

  //           throw error
  //         })
  //       }
  //       return res.json()
  //     })
  //     .then(data => {
  //       // call the callback when the request is successful
  //       // this is where the App component can remove it from state
  //       callback(noteId)
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }

  // how to get the note-id to use it in my fetch on line 8

  render() {

    const id = this.props.id;
    // console.log("context", this.context)
    // console.log("props", this.props);
    return (
      <button
        className="Note__delete"
        type="button"
        onClick={() => {
          // console.log("id to remove", this.context);
          this.context.deleteNote(id);
        }}
      >
        {/* This links to the root  */}
        <Link to="/">remove</Link>
        {/* remove */}
      </button>
    );
  }
}

export default RemoveButton;
