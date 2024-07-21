import artist from '../images/artist.webp';
import abstract from '../images/abstract.jpeg';
import ArtCategory from '../components/ArtCategory';
import Navbar from '../Navbar';
const ArtistArt = () => {
    return ( 
        <div>
            <p style={{ marginLeft: '3rem', marginTop: '80px', color: 'black' }}><a href='/artconnect/discover'>Discover</a> / <a href='/artconnect/art'>ContemporaryArt</a> / <a href='/artconnect/artist'>Artist Name</a></p>
            <div className="d-flex " style={{ marginTop: '0px' }}>
                <div className="artistProfile" style={{ backgroundColor: 'lightGrey', border:'2px solid white', borderRadius: '10px'}}>
                    <div className="artistPicture">
                        <img src={artist} alt="Profile" />
                    </div>
                    <div className="mt-3">
                        <p><a href='/artconnect/artist' className='ms-2 mt-5'>Artist's Name</a> <hr style={{ color: 'grey' }} /></p>
                        <p><a href='/artconnect/artistArts' className="ms-2">Other Arts</a> <hr style={{ color: 'grey' }} /></p>
                        <p><a href='/artconnect/artistEvents' className="ms-2">Events Registered</a> <hr style={{ color: 'grey' }} /></p>
                        <p><a href='/artconnect/artistLinks' className="ms-2">Contact Links</a> <hr style={{ color: 'grey' }} /></p>
                    </div>
                </div>

                <div className='profile' style={{border:'2px solid white', borderRadius: '10px', height: '75vh', width: '80vw'}}>
                    <div style={{border:'2px solid white', borderRadius: '10px', height: '25vh', width: '100%', marginBottom: '10px', alignContent: 'center', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>
                        <img src={abstract} alt='Profile background' style={{height: '100%', width: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                    </div>

                    <div className='ms-3' >
                        <h6 style={{color: 'black', fontSize: '2.0rem', fontFamily: "'Lobster', cursive"}}>Arts</h6>
                        <hr style={{color: 'black', marginBottom: '5px'}}></hr>
                        <div style={{marginLeft: '-50px', marginTop: '-20px', height: '38.5vh', width: '80vw', overflowY: 'hidden', overflowX: 'hidden'}}>
                            <ArtCategory details='Details'/>
                        </div> 
                    </div>
                    


                </div>
            </div>

        </div>
     );
}
 
export default ArtistArt;