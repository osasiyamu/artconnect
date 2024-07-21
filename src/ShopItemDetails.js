import Navbar from './Navbar';
import shopArt1 from './images/shopArt1.jpeg';
const ShopItemDetails = () => {
    return (
        <div>
            <Navbar />
            <p style={{ marginLeft: '3rem', marginTop: '80px', color: 'black' }}><a href='/artconnect/shop'>Shop</a> / <a href='/artconnect/shopItemDetails'>Item Details</a></p>
            <div className='row'>
                <div className='col-4 shopDetails align-content-center' style={{color: 'black', backgroundColor: 'white', border:'3px solid black', borderBottom: '50px solid white', borderRadius: '', height: '60vh', width: '60vh', marginTop: '50px', marginLeft: '60px', paddingTop: '10px'}}>
                    <img src={shopArt1} alt="" style={{width: '100%', height: '92%', borderTopLeftRadius: '', borderTopRightRadius: ''}}/>
                    <p style={{fontSize: '1.5rem'}}>Art Name</p>
                </div>
                <div className='col-6' style={{color: 'black', marginTop: '150px', marginLeft: '80px', borderLeft: '3px solid white', borderBottom: '3px solid white'}}>
                    <p style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Artist: Artist Name</p>
                    <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>Price: $100</p>
                    <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>Description: This is a brief description of the art piece. It gives insight into the inspiration, medium, and significance of the piece.</p>
                    <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>Dimensions: 24 x 36 inches</p>
                    <div style={{ marginLeft: '300px', marginTop: '10rem', display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                        <button className="btn btn-primary search" data-toggle="modal" data-target=".bd-example-modal-lg" >Add to Cart</button>
                        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">Congratulations!</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body text-center mt-3">
                                        <h6>Your item has been added to Cart</h6>
                                        <button className="btn btn-primary search" style={{margintLeft: '3rem'}} onClick={ () => {window.location = '/artconnect/cart'}}>View Cart</button>
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

export default ShopItemDetails;