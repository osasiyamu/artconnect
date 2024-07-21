const Search = (props) => {
    return ( 
        <form className="ms-3 d-flex" role="search" style={{ maxWidth: '30%'}} onSubmit={(e) => e.preventDefault()}>
            <input className="form-control search me-2" type="search" placeholder={props.action + " " + props.page} aria-label="Search" style={{ marginRight: '0.5rem' }}/>
            <button className="btn search ms-3" onClick={() => {window.location = '/artconnect/searchResult'}}>{ props.action }</button>
        </form>
     );
}
 
export default Search;