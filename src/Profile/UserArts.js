import profile from '../images/profile.jpeg';
import sunset from '../images/blackart.jpeg';
import ArtCategory from '../components/ArtCategory';
const UserArts = () => {
    return (
        <div>
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
                            <h6 style={{color: 'black', fontSize: '2.0rem', fontFamily: "'Lobster', cursive"}}>My Arts</h6>
                            <hr style={{color: 'black', marginBottom: '5px'}}></hr>
                            <div style={{marginLeft: '-50px', marginTop: '-20px', height: '38.5vh', width: '80vw', overflowY: 'hidden', overflowX: 'hidden'}}>
                                <ArtCategory details='Details'/>
                            </div>                     
                        </div>
                        


                    </div>
                </div>

            </div>
        
        </div>
    );
}
 
export default UserArts;