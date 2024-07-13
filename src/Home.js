import React from 'react';
import trendingArt1 from './images/trendingArt1.png';
import trendingArt2 from './images/trendingArt2.jpg';
import trendingArt3 from './images/trendingArt3.jpg';
import './App.css';

const Home = () => {
    return (
        <div className="container home">
            <h1 className='text-center align-content-center slogan'>CREATE, CONNECT, INSPIRE</h1>
            <div className="row align-content-center justify-content-around">
                <div className="col-md-3 mt-5">
                    <div className="trendingArt">
                        <img src={trendingArt1} alt="trendingImage" className="img-fluid" />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="trendingArt main">
                        <img src={trendingArt3} alt="trendingImage" className="img-fluid" />
                    </div>
                </div>

                <div className="col-md-3 mt-5">
                    <div className="trendingArt">
                        <img src={trendingArt2} alt="trendingImage" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button className='btn btn-primary explore'>Explore More Diverse Art</button>
            </div>
        </div>
    );
};

export default Home;
