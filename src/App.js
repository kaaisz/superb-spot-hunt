import React from 'react';
import { CardList } from './components/card-list/card-list-component';
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
        <CardList name="Kaai">
          {
            this.state.spots.map(spot => <p key={spot.id}>{ spot.address.city }</p>)
          }
        </CardList>
      </div>
    )
  }
}

export default App;