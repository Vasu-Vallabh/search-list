import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class  App extends Component {
    constructor() {
        super();
        this.state = {
           frontend: [
               {
                   name: 'Angular',
                   version: '13.1.1'
               },
               {
                   name: 'React',
                   version: '17.0.2'
               },
               {
                   name: 'Vue',
                   version: '3.2.23'
               },
               {
                   name: 'Ember',
                   version: '1.13.11'
               },
               {
                   name: 'Backbone',
                   version: '1.3.3'
               }
           ]
        };
    }

  render() {
    return <div className='App'>
        {this.state.frontend.map((framework) => <h1>{framework.name.toUpperCase()}</h1>)}
    </div>
  }
}

export default App;
