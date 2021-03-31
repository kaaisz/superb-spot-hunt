import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      spots: [
        {
          name: 'andarsia',
          id: 'and1'
        },
        {
          name: 'antelope',
          id: 'ant1'
        },
        {
          name: 'everest',
          id: 'evr1'
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.spots.map(spot => <p key={spot.id}>{ spot.name }</p>)
        }
      </div>
    )
  }
}

export default App;