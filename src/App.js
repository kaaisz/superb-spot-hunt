import React from 'react';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box-component';
import './app.scss';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      spots: [],
      searchField: ''
    };

    // needs to bind it because JS by default doesn't set scope of this functions
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ spots:users }))
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value});
  };

  render() {
    // here can apply function to add some features to the initial state
    const { spots, searchField } = this.state;
    const filteredSpots = spots.filter(
      spot => spot.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Breathtaking Sceneries</h1>
        <SearchBox
          placeholder="Search Spots"
          // needs to specify with this since handleChange is inside this class
          handleChange={this.handleChange}
        />
        <CardList spots={filteredSpots}>
        </CardList>
      </div>
    )
  }
}

export default App;