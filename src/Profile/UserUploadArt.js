import profile from '../images/profile.jpeg';
import sunset from '../images/blackart.jpeg';
import upload from '../images/upload.png';
import Navbar from '../Navbar';
const UserUploadArt = () => {
    return ( 
        <div>
            <Navbar />
            <div>
                <div className="d-flex " style={{ marginTop: '100px' }}>
                    <div className="artistProfile" style={{ backgroundColor: 'lightGrey', border:'2px solid white', borderRadius: '10px'}}>
                        <div className="artistPicture">
                            <img src={profile} alt="Profile" />
                        </div>
                        <div className="mt-3">
                            <p><a href='/artconnect/profile' className='ms-2 mt-5'>Username</a> <hr style={{ color: 'grey' }} /></p>
                            <p><a href='/artconnect/userArts' className="ms-2">My Arts</a> <hr style={{ color: 'grey' }} /></p>
                            <p><a href='/artconnect/userEvents' className="ms-2">My Events</a> <hr style={{ color: 'grey' }} /></p>
                            <p><a href='/artconnect/userUploadArt' className="ms-2">Upload Art</a> <hr style={{ color: 'grey' }} /></p>
                            <p><a href='/artconnect/userSettings' className="ms-2">Settings</a></p>
                        </div>
                    </div>

                    <div className='profile' style={{border:'2px solid white', borderRadius: '10px', height: '80vh', width: '80vw'}}>
                        <div style={{border:'2px solid white', borderRadius: '10px', height: '32vh', width: '100%', marginBottom: '10px', alignContent: 'center', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>
                            <img src={sunset} alt='Profile background' style={{height: '100%', width: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                        </div>

                        <div className='ms-3' >
                            <h6 style={{color: 'black', fontSize: '2.0rem', fontFamily: "'Lobster', cursive"}}>Upload Art</h6>
                            <hr style={{color: 'black', marginBottom: '5px'}}></hr>
                            <div className='row' style={{height: '38vh', overflowY: 'hidden', borderLeft: '1px solid lightGrey', borderBottom: '1px solid lightGrey', marginRight: '20px', marginLeft: '2px'}}>
                                    <p className='col-11' style={{height: '38vh'}}><img src={upload} alt='upload' className = 'upload' style={{height: '100%', width: '70%'}}></img></p>
                                    <div className='col-1' style={{marginLeft: '-300px'}}>
                                        <p><a href='/artconnect/profile' style={{color: 'purple'}}>Filename.jpg</a></p>
                                        <button className='btn btn-primary search' data-toggle="modal" data-target=".bd-example-modal-lg" style={{marginTop: '25vh', width: '150px'}}>Upload Art</button>
                                        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg" style={{color: 'black'}}>
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLongTitle">Upload Successful!</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body text-center" style={{color: 'black'}}>
                                                        <h2>View your arts?</h2>
                                                        <button className='btn btn-primary search' onClick={() => {window.location = '/artconnect/userArts'}}>My Arts</button>
                                                    </div>
                                                </div>
                                            </div>
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
 
export default UserUploadArt;