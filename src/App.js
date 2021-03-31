import React from 'react';
import { CardList } from './components/card-list/card-list-component';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      spots: [],
      searchField: ''
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
        <input type="search" placeholder="search spots" onChange={event => {
            this.setState({searchField: event.target.value});
            // console.log(this.state);
          }}
        />
        <CardList spots={this.state.spots}>
        </CardList>
      </div>
    )
  }
}

export default App;