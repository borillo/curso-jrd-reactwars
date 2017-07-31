import React, { Component } from 'react';
import './App.css';

import Films from './films/Films';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Films />
      </div>
    );
  }
}

export default App;
