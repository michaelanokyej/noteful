import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";

class App extends React.Component {
  state = {
    notes: this.props.store.notes,
    folders: this.props.store.folders
  };

  render() {
    return (
      // <Route>
      <div className="App">
        <header className="appHeader">
          <Link to="/">
            <h1>Noteful</h1>
          </Link>
        </header>
        <MainPage 
        notes={this.state.notes} 
        folders={this.state.folders}
        />
      </div>
    );
  }
}

export default App;
