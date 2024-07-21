import React from 'react';
import CommunityCategory from './components/CommunityCategory'
import Search from './components/Search'
import CommunityFilter from './components/CommunityFilter';
import Navbar from './Navbar';
const Community = () => {
    return (
        <div className='community'>
            <Navbar />
            <div className="fixed-top" style={{ marginTop: '105px', marginLeft: '30px', maxWidth: '94%'}}>
                <div className='flex-grow-1 SearchFilter'>
                    <Search page='Community' action='Search'/>
                </div>
            </div>
            <div className='fixed-top' style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '160px', marginRight: '0px', marginBottom: '10px' }}>
                <a className="btn btn-primary align-item-end" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" style={{ marginRight: '20px' }} title="Filter">
                    <i className="bi bi-funnel"></i>
                </a>
            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Filter By</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <CommunityFilter />
                </div>
            </div>


            <div style={{ marginTop: '20px', marginBottom: '40px', padding: '30px' }}>
                <CommunityCategory category="Community" />
                <CommunityCategory category="Community" />
                <CommunityCategory category="Community" />
                <CommunityCategory category="Community" />
                <CommunityCategory category="Community" />
                <CommunityCategory category="Community" />
                <CommunityCategory category="Community" />
                <CommunityCategory category="Community" />
            </div>
        </div>
    );
}

export default Community;