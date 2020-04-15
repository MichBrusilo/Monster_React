import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box-component';

// import { Try } from './components/try/try-component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
      // greenPieces: 'Ulala'
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  };
  render() {
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
      return (
        
        <div className="App">
          {/* <input type="search" placeholder="search monster" onChange={e => this.setState({ searchField: e.target.value})}/> */}
          <h1>Monsters Rolodex</h1>
          <SearchBox 
            placeholder="search monster"
            handleChange={this.handleChange}
          />
          <CardList monsters={filteredMonsters} />
          {/* <Try greenPieces={this.state.greenPieces} /> */}
          
        
        </div>
      
      );
    
  }
}

export default App;
