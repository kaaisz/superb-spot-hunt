import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      spots: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ spots:users }))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.spots.map(spot => <p key={spot.id}>{ spot.address.city }</p>)
        }
      </div>
    )
  }
}

export default App;