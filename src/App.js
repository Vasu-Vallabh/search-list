import './App.css';
import { Component } from 'react';
import CardListComponent from "./components/card-list/card-list.component";
import SearchBoxComponent from "./components/search-box/search-box.component";

class  App extends Component {
    constructor(props) {
        super(props);
        this.state = { people: [], search: '' };
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
                    }
                );
            })
    }

    onSearchChange = (event) => {
            const searchString = event.target.value.toLowerCase()
            this.setState(
                ()=> {
                    return { search: searchString };
                }
            );
        }

    render() {
        const filteredPeople = this.state.people.filter((person) => person.name.toLowerCase().includes(this.state.search));
        return <>
           { <div className='App'>
               <h1>My People</h1>
               <SearchBoxComponent search={this.onSearchChange}/>
               <CardListComponent people= {filteredPeople}/>
           </div>}
        </>
    }
}

export default App;
