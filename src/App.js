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

  componentDidMount() {
    // fake date loading from API call
    setTimeout((
      // fetch call might go here
    ) => this.setState(this.props.store), 600);
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders
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
        </noteAndFolderContext.Provider >
      </div>
    );
  }
}

export default App;
