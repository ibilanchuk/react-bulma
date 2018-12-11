import React, { Component } from 'react';
import 'bulma';
class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="columns">
          <div className="column">
            First column
          </div>
          <div className="column">
            Second column
          </div>
          <div className="column">
            Third column
          </div>
          <div className="column">
            Fourth column
          </div>
        </div>
      </div>
    );
  }
}

export default App;
