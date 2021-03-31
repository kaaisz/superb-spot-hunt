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
        <CardList spots={this.state.spots}>
        </CardList>
      </div>
    )
  }
}

export default App;