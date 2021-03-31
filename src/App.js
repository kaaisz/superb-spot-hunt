import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: 'Hello Kaai'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.string}</p>
          <button onClick={()=>this.setState({ string: 'Hello Suzuki' })}>Change text</button>
        </header>
      </div>
    )
  }
}

export default App;