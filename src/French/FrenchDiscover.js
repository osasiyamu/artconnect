import React from 'react';
import ArtCategory from '../components/ArtCategory';
import EventCategory from '../components/EventCategory';
import Search from '../components/Search';
import FrenchDiscoverFilter from './components/FrenchDiscoverFilter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import FrenchNavbar from './FrenchNavbar';

const Discover = () => {
    return (
        <div className='discover'>
          <FrenchNavbar />
          <div className="fixed-top" style={{ marginTop: '105px', marginLeft: '30px', maxWidth: '94%'}}>
            <div className='flex-grow-1 SearchFilter'>
              <Search page='Découvrir' action='Recherche'/>
            </div>
          </div>
          <div className='fixed-top' style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '160px', marginRight: '0px', marginBottom: '10px' }}>
              <a className="btn btn-primary align-item-end" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" style={{ marginRight: '20px' }} title="Filtrer">
                  <i className="bi bi-funnel"></i>
              </a>
          </div>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">Filtrer Par</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Fermer"></button>
            </div>
            <div className="offcanvas-body">
              <FrenchDiscoverFilter />
            </div>
          </div>

          <div style={{ marginTop: '30px', marginBottom: '40px', paddingLeft: '30px' }}>
            <ArtCategory category='Contemporain' details='Détails'/>
            <ArtCategory category='Moderne' details='Détails'/>
            <ArtCategory category='Peintures' details='Détails'/>
            <ArtCategory category='Sculpture' details='Détails'/>
            <EventCategory category='Événement'  details='Détails'/>
          </div>

          <div className="fixed-bottom" style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '15px', marginBottom: '10px' }}>
            <div style={{ maxHeight: '100px' }}>
              <div className="collapse collapse-horizontal" id="languages">
                <div className="card " style={{ width: '120px', padding: '0px', alignItems: 'start' }}>
                  <ul style={{ fontSize: 'small', listStyleType: 'none' }}>
                    <li><a href='/artconnect/discover'>English</a></li>
                    <li><a href='.'>Mandarin</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <a className="btn btn-primary align-item-end" type="button" data-bs-toggle="collapse" href="#languages" role="button" aria-expanded="false" aria-controls="languages" style={{ borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} title="Langages">
              <i className="bi bi-globe-americas"></i>
            </a>
          </div>
        </div>
    );
}

export default Discover;
