import shopArt1 from '../images/shopArt1.jpeg';
import shopArt2 from '../images/shopArt2.jpeg';
import shopArt3 from '../images/shopArt3.jpeg';
import shopArt4 from '../images/shopArt4.jpeg';
import shopArt5 from '../images/shopArt5.jpeg';
const ShopCategory = (props) => {
    return (
        <div className="category">

            <div className="mt-4">
                <div className="row">
                    <div className="col">
                        <div className="testimonials" style={{ maxWidth: '100%' }}>
                            <div className="d-flex ms-2 me-3 content" style={{}}>
                                <div className="" style={{ width: '18rem', marginRight: '2rem' }}>
                                    <div className="art">
                                        <img src={shopArt1} alt="" />
                                        <div className="text-center align-items-center"><a href="/artconnect/shopItemDetails"> {props.category} Details</a></div>
                                    </div>
                                </div>

                                <div className="" style={{ width: '18rem', marginRight: '2rem' }}>
                                    <div className="art">
                                        <img src={shopArt2} alt="" />
                                        <div className="text-center align-items-center"><a href="/artconnect/shopItemDetails"> {props.category} Details</a></div>
                                    </div>
                                </div>


                                <div className="" style={{ width: '18rem', marginRight: '2rem' }}>
                                    <div className="art">
                                        <img src={shopArt3} alt="" />
                                        <div className="text-center align-items-center"><a href="/artconnect/shopItemDetails"> {props.category} Details</a></div>
                                    </div>
                                </div>

                                <div className="" style={{ width: '18rem', marginRight: '2rem' }}>
                                    <div className="art">
                                        <img src={shopArt4} alt="" />
                                        <div className="text-center align-items-center"><a href="/artconnect/shopItemDetails"> {props.category} Details</a></div>
                                    </div>
                                </div>

                                <div className="" style={{ width: '18rem', marginRight: '2rem' }}>
                                    <div className="art">
                                        <img src={shopArt5} alt="" />
                                        <div className="text-center align-items-center"><a href="/artconnect/shopItemDetails"> {props.category} Art Details</a></div>
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

export default ShopCategory;