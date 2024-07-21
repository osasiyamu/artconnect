import React from 'react';
import CommunityCategory from './components/CommunityCategory'
import DiscoverFilter from './components/DiscoverFilter';
import Navbar from './Navbar';
const SearchResult = () => {
    return ( 
        <div className='community'>
            <Navbar />
            <div className='fixed-top' style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '160px', marginRight: '0px', marginBottom: '10px' }}>
                <a className="btn btn-primary align-item-end" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" style={{ marginRight: '20px' }} title="Filter" aria-label="Filter">
                    <i className="bi bi-funnel" aria-hidden="true"></i>
                    <span className="visually-hidden">Filter</span>
                </a>
            </div>
            
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Filter By</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <DiscoverFilter />
                </div>
            </div>

            <div style={{ marginTop: '20px', marginBottom: '40px', padding: '20px' }}>
                <h2 style={{ color: 'black', textAlign: 'center', fontFamily: "'Lobster', cursive", fontSize: '2.5rem' }}>Search Results for User's Input/Filter search</h2>
                <CommunityCategory category="Search Result" />
                <CommunityCategory category="Search Result" />
                <CommunityCategory category="Search Result" />
                <CommunityCategory category="Search Result" />
                <CommunityCategory category="Search Result" />
                <CommunityCategory category="Search Result" />
                <CommunityCategory category="Search Result" />
                <CommunityCategory category="Search Result" />
                <CommunityCategory category="Search Result" />
                <CommunityCategory category="Search Result" />
                <CommunityCategory category="Search Result" />
                <CommunityCategory category="Search Result" />
            </div>
        </div>
     );
}
 
export default SearchResult;