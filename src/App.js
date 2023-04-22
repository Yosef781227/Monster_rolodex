import { Component } from "react";

import CardList from "./Component/Card-List/Card-list.component";
import SearchBox from "./Component/SearchBox/Search-Box.component";
import './App.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      Monsters: [],
      searchValue: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ Monsters: users }));
  }

  onchangebutton = (event) => {
    

    const searchFild = event.target.value.toLowerCase();

    this.setState({ searchValue: searchFild });
  };

  render() {

  const {Monsters, searchValue} = this.state;
  const {onchangebutton} = this;
  console.log('app')


    const filteredMosters = Monsters.filter((Monster) => {
      return Monster.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
      
        <SearchBox  searchBoxhandler ={onchangebutton}  searchholder={'Search Monster'}  namedclass={"Monster search"}/>
        
      <CardList monsters= {filteredMosters} />  
      </div>
    );
  }
}

export default App;
