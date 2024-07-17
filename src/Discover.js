import React from 'react';
import ArtCategory from './components/ArtCategory';
import EventCategory from './components/EventCategory';
import Search from './components/Search';
import DiscoverFilter from './components/DiscoverFilter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Discover = () => {
    return (
        <div className='discover'>
            <div className="fixed-top" style={{ marginTop: '105px', marginLeft: '30px', maxWidth: '94%'}}>
                {/* <div className='d-flex justify-content-between align-items-center mt-3' style={{ marginLeft: '1rem', marginTop: '100px', marginBottom: '30px' }}> */}
                    <div className='flex-grow-1 SearchFilter'>
                        <Search page='Discover' action='Search'/>
                    </div>
                    {/* <a className="btn btn-primary align-item-end" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" style={{ marginRight: '20px' }}>
                        <i className="bi bi-funnel"></i>
                    </a> */}
                {/* </div> */}
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
                    <DiscoverFilter />
                </div>
            </div>

            <div style={{ marginTop: '30px', marginBottom: '40px', paddingLeft: '30px' }}>
                <ArtCategory category='Contemporary' details='Details'/>
                <ArtCategory category='Modern' details='Details'/>
                <ArtCategory category='Paintings' details='Details'/>
                <ArtCategory category='Sculpture' details='Details'/>
                <EventCategory category='Event' details='Details'/>
            </div>

            {/* <div className="fixed-bottom" style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '10px', marginBottom: '10px' }}>
                <a className="btn btn-primary align-item-end" data-bs-toggle="collapse" href="#languages" role="button" aria-expanded="false" aria-controls="languages">
                    <i className="bi bi-globe-americas"></i>
                </a>
            </div>
            <div style={{minHeight: '120px'}}>
                <div class="collapse collapse-horizontal" id="languages">
                    <div class="card card-body" style={{width: '300px'}}>
                        This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                    </div>
                </div>
            </div> */}

            <div className="fixed-bottom" style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '15px', marginBottom: '10px' }}>
                <div style={{ maxHeight: '100px' }}>
                    <div className="collapse collapse-horizontal" id="languages">
                        <div className="card " style={{ width: '120px', padding: '0px', alignItems: 'start' }}>
                            <ul style={{fontSize: 'small', listStyleType: 'none'}}>
                                <li > <a href='/artconnect/frenchDiscover'>French</a> </li>
                                <li> <a href='.'>Mandarin</a> </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>

                <a className="btn btn-primary align-item-end" data-bs-toggle="collapse" href="#languages" role="button" aria-expanded="false" aria-controls="languages" style={{ borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} title="Languages">
                    <i className="bi bi-globe-americas"></i>
                </a>
            </div>


        </div>
    );
}

export default Discover;
