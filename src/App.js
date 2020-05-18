import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wikiSearchTerms: '',
    }
  }

  useWikiSearchEngine = () => {

  }

  changeWikiSearchTerms = (e) => {
    this.setState({
      WikiSearchTerms: e.target.value
    });
  }

  render() {
    let wikiSearchResults = [];

    return (
      <div className="App">
        <h1>Hi Roon Labs! What's on your mind?</h1>
        <form action="">
          <input type="text" value={this.state.WikiSearchTerms} onChange={this.changeWikiSearchTerms} placeholder="Search..." />
          <button type="submit" onClick={this.useWikiSearchEngine}>Search</button>
        </form>
        {wikiSearchResults}
      </div>
    );
  }
}

export default App;
