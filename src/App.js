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
    const newNotes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({
      notes: newNotes
    });
  };

  // After a delete button is clicked, should I use a useEffect
  // method to match a another fetch to the API with
  // the delete method to update the state?

  // function to handle back button
  // handleBackButon = () => {
  //       this.props.history.push('/')
  //     }

  fetchFolders = () => {
    // console.log(this.props)
    fetch(`http://localhost:9090/folders`)
      .then(res => res.json())
      .then(res => {
        this.setState({ folders: res });
      })
      .catch(err => {
        this.setState({ folders: this.props.store.folders });
      });
  };

  fetchNotes = () => {
    fetch(`http://localhost:9090/notes`)
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
      deleteNote: this.deleteNote
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
