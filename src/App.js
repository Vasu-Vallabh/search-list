import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class  App extends Component {
    constructor() {
        super();
        this.state = {
           people: []
        };
    }

    componentDidMount() {
      fetch("https://myjson.dit.upm.es/api/bins/b1sv")
          .then((res) => res.json())
          .then((json) => {
              this.setState(
                  ()=> {
                      return { people: json};
                  },
                  ()=> {
                      console.log(this.state)
                  }
              );
          })
    }

    render() {
    return <>
        <div className='App'>
            {this.state.people.map((person) => {return <h1 key={person.id}>{person.name.toUpperCase()}</h1>;})}
        </div>
    </>
  }
}

export default App;
