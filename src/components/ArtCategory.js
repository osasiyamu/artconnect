import contemporaryArt1 from '../images/contemporaryArt1.png';
import contemporaryArt2 from '../images/contemporaryArt2.png';
import contemporaryArt3 from '../images/contemporaryArt3.png';
import contemporaryArt4 from '../images/contemporaryArt4.png';
import contemporaryArt5 from '../images/contemporaryArt5.png';

const ArtCategory = (props) => {
    return (
        <div className="category">
            <h6 className="ms-4 mt-5 text-secondary">{props.category}</h6>

            <div className="mt-4">
                <div className="row">
                    <div className="col">
                        <div className="testimonials" style={{ maxWidth: '100%' }}>
                            <div className="d-flex ms-2 me-3 content" style={{}}>
                                <div className="" style={{ width: '18rem', marginRight: '2rem' }}>
                                    <div className="art">
                                        <img src={contemporaryArt1} alt="" />
                                        <div className="align-items-center"><a href="/artconnect/art"> {props.category} Details</a></div>
                                    </div>
                                </div>

                                <div className="" style={{ width: '18rem', marginRight: '2rem' }}>
                                    <div className="art">
                                        <img src={contemporaryArt2} alt="" />
                                        <div className="align-items-center"><a href="/artconnect/art"> {props.category} Details</a></div>
                                    </div>
                                </div>


                                <div className="" style={{ width: '18rem', marginRight: '2rem' }}>
                                    <div className="art">
                                        <img src={contemporaryArt3} alt="" />
                                        <div className="align-items-center"><a href="/artconnect/art"> {props.category} Details</a></div>
                                    </div>
                                </div>

                                <div className="" style={{ width: '18rem', marginRight: '2rem' }}>
                                    <div className="art">
                                        <img src={contemporaryArt4} alt="" />
                                        <div className="align-items-center"><a href="/artconnect/art"> {props.category} Details</a></div>
                                    </div>
                                </div>

                                <div className="" style={{ width: '18rem', marginRight: '2rem' }}>
                                    <div className="art">
                                        <img src={contemporaryArt5} alt="" />
                                        <div className="align-items-center"><a href="/artconnect/art"> {props.category} Art Details</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArtCategory;