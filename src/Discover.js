import React from 'react';
import ArtCategory from './components/ArtCategory';
import EventCategory from './components/EventCategory';
import Search from './components/Search';
import Filter from './components/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Discover = () => {
    return (
        <div className='discover'>
            <div className="fixed-top" style={{ marginTop: '80px' }}>
                <div className='d-flex justify-content-between align-items-center mt-3' style={{ marginLeft: '1rem', marginTop: '100px', marginBottom: '30px' }}>
                    <div className='flex-grow-1 SearchFilter'>
                        <Search page='Discover' />
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
                    <Filter />
                </div>
            </div>

            <div style={{ marginTop: '30px', marginBottom: '40px', paddingLeft: '30px' }}>
                <ArtCategory category='Contemporary' />
                <ArtCategory category='Modern' />
                <ArtCategory category='Paintings' />
                <ArtCategory category='Sculpture' />
                <EventCategory category='Event' />
            </div>
        </div>
    );
}

export default Discover;
