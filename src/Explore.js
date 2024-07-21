import React from 'react';
import ArtCategory from './components/ArtCategory';
import EventCategory from './components/EventCategory';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Navbar';

const Explore = () => {
    return ( 
        <div className='discover'>
            <Navbar />
            <div className="fixed-top" style={{ marginTop: '105px', marginLeft: '30px', maxWidth: '94%' }}>
                <div className='flex-grow-1 SearchFilter'>
                    <Search page='Search' action='Explore' />
                </div>
            </div>

            <div style={{ marginTop: '30px', marginBottom: '40px', paddingLeft: '30px' }}>
                <EventCategory category='Event' details='Details' />
                <ArtCategory category='Modern' details='Details' />
                <ArtCategory category='Sculpture' details='Details' />
                <ArtCategory category='Contemporary' details='Details' />
                <ArtCategory category='Paintings' details='Details' />
            </div>

        </div>
     );
}
 
export default Explore;