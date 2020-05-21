import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import Search from "./components/search/search.component";

class App extends Component {
  state = {
    monsters: [],
    query: "",
  };

  handleSearch = (query) => {
    this.setState({ query });
  };

  componentDidMount = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ monsters: data });
  };

  render() {
    const { monsters, query } = this.state;
    const filteredResults = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(query.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search
          onSearch={(event) => this.handleSearch(event.target.value)}
          query={query}
          placeholder="Search monsters"
        />
        <CardList monsters={filteredResults} />
      </div>
    );
  }
}

export default App;
