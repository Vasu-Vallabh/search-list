import './search-box.styles.css'

const SearchBoxComponent = (props) => {
    const { search } = props
    return <>
         <input placeholder='search people'
                      className='search-box' type='search'
                      onChange= {search}
         />
    </>
}

export default SearchBoxComponent
