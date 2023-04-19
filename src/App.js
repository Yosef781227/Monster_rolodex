import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      Monsters:[ ],
      searchValue:''
    }
  }
//component did mount is a lifecycle method
//it is called when the component is mounted
//it is called only once
componentDidMount(){  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({Monsters:users}))
}

  render()  {

    const filteredMosters = this.state.Monsters.filter((Monster)=>{
      return Monster.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
    })

  return (
    <div className="App">
      <input type="search" placeholder="search monsters" onChange={(event)=>{
            console.log(event.target.value)

          const searchFild =event.target.value.toLowerCase();
        
          this.setState({searchValue:searchFild}) 
          


          
      }} />

            {filteredMosters.map((Monster)=>{

              return<div key={Monster.id}> 
                
                <h1 >{Monster.name}</h1>
              </div>
               
            })}
    </div>
  );
}
}

export default App;
