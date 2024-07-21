import React from 'react';
import contemporaryArt1 from '../images/contemporaryArt1.png';
import contemporaryArt2 from '../images/contemporaryArt2.png';
import contemporaryArt3 from '../images/contemporaryArt3.png';
import contemporaryArt4 from '../images/contemporaryArt4.png';
import contemporaryArt5 from '../images/contemporaryArt5.png';

const ArtCategory = (props) => {
    const artworks = [
        { src: contemporaryArt1, alt: 'Contemporary Art 1' },
        { src: contemporaryArt2, alt: 'Contemporary Art 2' },
        { src: contemporaryArt3, alt: 'Contemporary Art 3' },
        { src: contemporaryArt4, alt: 'Contemporary Art 4' },
        { src: contemporaryArt5, alt: 'Contemporary Art 5' }
    ];

    return (
        <div className="category">
            <h2 className="ms-4 mt-5 text-secondary">{props.category}</h2>

            <div className="mt-4">
                <div className="row">
                    <div className="col">
                        <div className="testimonials" style={{ maxWidth: '100%' }}>
                            <div className="d-flex ms-2 me-3 content">
                                {artworks.map((art, index) => (
                                    <div key={index} className="art-card" style={{ width: '18rem', marginRight: '2rem' }}>
                                        <div className="art">
                                            <img src={art.src} alt={art.alt} className="img-fluid" />
                                            <div className="align-items-center">
                                                <a href="/artconnect/art" className="art-link"> {props.category} {props.details}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArtCategory;
