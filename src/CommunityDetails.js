import CommunityDetail from './images/communityDetails.jpeg';
import SamplePost from './components/SamplePost';
import Navbar from './Navbar';
const CommunityDetails = () => {
    return (
        <div>
            <Navbar />
            <div style={{color: 'black'}}>
                <p style={{ marginLeft: '3rem', marginTop: '80px', color: 'black' }}><a href='/artconnect/community'>Community</a> / <a href='/artconnect/communityDetails'>Commununity Details</a></p>
                <div className="mb-5">
                    <div className="communityDetails" style={{ width: '90%', height: '400px', color: 'black', marginLeft: '3rem', marginRight: '3rem' }}>
                        <img src={CommunityDetail} alt='' style={{ width: '100%', height: '100%' }}></img>
                    </div>

                </div>

                <hr style={{ color: 'black' }} />
                <h2 style={{marginLeft: '3rem', fontFamily: "'Lobster', cursive", fontSize: '2rem'}}>Description</h2>
                <p style={{marginLeft: '5rem'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet fermentum orci. Praesent tincidunt sagittis nisl sit amet finibus. Ut dapibus velit sit amet lectus venenatis, a pretium nisl pretium. Ut sollicitudin vestibulum laoreet.
                    <br></br><br></br><strong>Next Meeting Date:</strong> xx-xx-xxxx <br></br><strong>Time:</strong> xx:xx:xx
                </p>
                <div className="d-flex justify-content-end tutorial">
                    <button className="btn btn-primary tutorial" data-toggle="modal" data-target=".bd-example-modal-lg" style={{ paddingLeft: '20px', paddingRight: '20px', marginRight: '60px' }}>Join This Community</button>

                    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Congratulations!</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body text-center">
                                    You have successfully joined the (Sample Name) Community
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ color: 'black' }} />
                <div className='ms-5'>
                    <SamplePost number='1' />
                    <SamplePost number='2' />
                    <SamplePost number='3' />
                </div>
            </div>
        </div>
    );
}

export default CommunityDetails;