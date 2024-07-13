const Search = (props) => {
    return ( 
        <form className="ms-3 d-flex" role="search" style={{ maxWidth: '30%'}}>
            <input className="form-control search me-2" type="search" placeholder={"Search " + props.page} aria-label="Search" style={{ marginRight: '0.5rem' }}/>
            <button className="btn search ms-3" type="submit">Search</button>
        </form>
     );
}
 
export default Search;