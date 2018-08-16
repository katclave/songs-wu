import React, { Component } from 'react';
import Songs from './components/Songs/Songs.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wurrly Song List</h1>
          <h2 className="App-subHeader">Click song to see royalties</h2>
        </header>
        <Songs />
      </div>
    );
  }
}

export default App;
