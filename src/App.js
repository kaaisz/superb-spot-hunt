import React from 'react';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box-component';
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
    // here can apply function to add some features to the initial state
    const { spots, searchField } = this.state;
    const filteredSpots = spots.filter(
      spot => spot.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <SearchBox
          placeholder="Search Spots"
          handleChange={event => 
            this.setState({searchField: event.target.value})
          }
        />
        <CardList spots={filteredSpots}>
        </CardList>
      </div>
    )
  }
}

export default App;