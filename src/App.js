import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import SideBarPage from "./SideBarPage";
import noteAndFolderContext from "./context/noteAndFolderContext";

class App extends React.Component {
  state = {
    notes: [],
    folders: []
  };

  // function to delete notes
  deleteNote = noteId => {
    const options = {
      method: "Delete",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer f47169ff-d5ef-4a8c-8668-e8d7102d06de"
      })
    };

    fetch(`https://mynewnotefulserver.herokuapp.com/api/notes/${noteId}`, options)
      .then(res => {
        this.setState({ notes: this.state.notes.filter(n => n.id != noteId) });
      })
      .catch(err => {
        this.setState({ notes: this.props.store.notes });
      });
  };

  // function to add notes
  addNote = noteBody => {
    const newNote = {
      folder_id: Number(noteBody.folder_id),
      content: noteBody.content,
      note_name: noteBody.note_name
    }

    // Post note
    fetch(`https://mynewnotefulserver.herokuapp.com/api/notes`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(newNote)
    })
      .then(res => {
        console.log("newNote folder_id", newNote.folder_id)
        console.log("added note", res)
        if(!res.ok){
          return res.json().then(e => Promise.reject(e))
        } 
        // return res;
        // return res.json()
        this.fetchNotes();
      })
      // .then(res => {
      //   if(res.status === 201) {
      //     this.setState({ notes: [...this.state.notes, newNote]  })
      //     console.log("Updated state", this.state)
      //   }
      // })
      .catch(err => {
        // this.setState({ notes: this.props.store.notes });
        console.error({err})
      });
  };

  // function to add folder 
  addFolder = folder => {

    // console.log("folder", folder);

    // const bodyToBeadded = {

    // }

    // if (folder.length === 0) {
    //   console.log("folder is empty")
    // }

    const options = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer f47169ff-d5ef-4a8c-8668-e8d7102d06de"
      }),
      body: JSON.stringify({
        folder_name: folder,
      })
    };

    // Post Folder
    fetch(`https://mynewnotefulserver.herokuapp.com/api/folders`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        folder_name: folder,
      })
    })
    .then(res => {
      // console.log("newFolder name", folder)
      console.log("added folder", res)
      if(!res.ok){
        return res.json().then(e => Promise.reject(e))
      }
      this.fetchNotes();
      this.fetchFolders();
    })
    // .then(res => {
    //   if(res.status === 201) {
    //     res.send("added note")
    //   }
    // })
      .catch(err => {
        // this.setState({ notes: this.props.store.folders });
        console.error({err})

      });
    // fetch(`https://mynewnotefulserver.herokuapp.com/api/notes`, options)
    //   .then(res => {
    //     this.setState({ notes: this.state.notes.filter(n => n.id != noteId) });
    //   })
    //   .catch(err => {
    //     this.setState({ notes: this.props.store.notes });
    //   });
  };

  // After a delete button is clicked, should I use a useEffect
  // method to match a another fetch to the API with
  // the delete method to update the state?

  // function to handle back button
  // handleBackButon = () => {
  //       this.props.history.push('/')
  //     }

  fetchFolders = () => {
    const options = {
      method: "Get",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer f47169ff-d5ef-4a8c-8668-e8d7102d06de"
      })
    };
    fetch(`https://mynewnotefulserver.herokuapp.com/api/folders`, {
      method: "Get",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer f47169ff-d5ef-4a8c-8668-e8d7102d06de"
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ folders: res });
      })
      .catch(err => {
        this.setState({ folders: this.props.store.folders });
      });
  };

  fetchNotes = () => {
    const options = {
      method: "Get",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer f47169ff-d5ef-4a8c-8668-e8d7102d06de"
      })
    };

    fetch(`https://mynewnotefulserver.herokuapp.com/api/notes`, {
      method: "Get",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer f47169ff-d5ef-4a8c-8668-e8d7102d06de"
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ notes: res });
      })
      .catch(err => {
        this.setState({ notes: this.props.store.notes });
      });
  };

  componentDidMount() {
    this.fetchNotes();
    this.fetchFolders();
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
      addNote: this.addNote,
      addFolder: this.addFolder

      // handleBackButon: this.handleBackButon
    };
    return (
      <div className="App">
        <noteAndFolderContext.Provider value={contextValue}>
          <SideBarPage />
          {/* Previously
        <SideBarPage folders={this.state.folders} notes={this.state.notes} /> */}

          <header className="App__header">
            <h1>
              <Link to="/">Noteful</Link>{" "}
            </h1>
          </header>
          <MainPage />
          {/* Previously
        <MainPage notes={this.state.notes} folders={this.state.folders} /> */}
        </noteAndFolderContext.Provider>
      </div>
    );
  }
}

export default App;
