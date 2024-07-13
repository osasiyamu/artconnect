import React from 'react';
import CommunityCategory from './components/CommunityCategory'
import Search from './components/Search'
import CommunityFilter from './components/CommunityFilter';
const Community = () => {
    return (
        <div className='community'>
            <div className="fixed-top" style={{ marginLeft: '1rem', marginTop: '80px', marginBottom: '100px' }}>
                <div className='d-flex justify-content-between align-items-center mt-3' style={{ marginLeft: '1rem', marginTop: '100px', marginBottom: '30px' }}>
                    <div className='flex-grow-1 SearchFilter'>
                        <Search page='Community' />
                    </div>
                    <a className="btn btn-primary align-item-end" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" style={{ marginRight: '20px' }}>
                        <i className="bi bi-funnel"></i>
                    </a>
                </div>
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