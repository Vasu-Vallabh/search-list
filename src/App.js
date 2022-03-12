import './App.css';
import CardListComponent from "./components/card-list/card-list.component";
import SearchBoxComponent from "./components/search-box/search-box.component";
import {useEffect, useState} from "react";


const App = () => {
    let [search, setSearch] = useState('')
    let [people, setPeople] = useState([]);
    let [filteredList, setFilteredList] = useState(people);
    console.log('render');
    useEffect(() => {
        fetch("https://myjson.dit.upm.es/api/bins/b1sv")
            .then((res) => res.json())
            .then((users) => { setPeople(users)});
    }, [])

    useEffect(()=>{
        const newFilteredList = people.filter((person) => person.name.toLowerCase().includes(search));
        setFilteredList(newFilteredList);
        console.log('effectFiring');
    },[people, search])

    const onSearchChange = (event) => {
        const mSearch = event.target.value.toLowerCase();
        setSearch(mSearch);
    }

    return <>
        { <div className='App'>
            <h1>My People</h1>
            <SearchBoxComponent search={onSearchChange}/>
            <CardListComponent people= {filteredList}/>
        </div>}
    </>
}

export default App;
