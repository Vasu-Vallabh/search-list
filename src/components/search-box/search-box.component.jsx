import {Component} from "react";
import './search-box.styles.css'

class SearchBoxComponent extends Component {
    render(){
        const { search } = this.props
        return <input placeholder='search people'
                      className='search-box' type='search'
                      onChange= {search}
        />
    }
}

export default SearchBoxComponent
