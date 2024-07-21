import artist from './images/artist.webp';
import profile from './images/profile.jpeg';
import abstract from './images/abstract.jpeg';
import UserPost from './components/UserPost';
const Artist = () => {
    return (
        // <div>
        //     <p style={{ marginLeft: '3rem', marginTop: '80px', color: 'black' }}><a href='/artconnect/discover'>Discover</a> / <a href='/artconnect/art'>ContemporaryArt</a> / <a href='/artconnect/artist'>Artist Name</a></p>
        //     <div className="d-flex ">
        //         <div className="artistProfile" style={{ backgroundColor: 'lightGrey' }}>
        //             <div className="artistPicture">
        //                 <img src={logo} alt="userimg" />
        //             </div>
        //             <p className='mt-5'>Link 1</p>
        //             <p>Link 2</p>
        //             <p>Link 3</p>
        //             <p>Link 4</p>

        //         </div>

        //         <div className="artistDetails">
        //             <nav>
        //                 <div className="nav nav-tabs" id="nav-tab" role="tablist">
        //                     <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
        //                     <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
        //                     <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
        //                     {/* <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button> */}
        //                 </div>
        //             </nav>
        //             <div className="tab-content" id="nav-tabContent">
        //                 <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">Home content</div>
        //                 <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">Profile content</div>
        //                 <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">Contact content</div>
        //                 {/* <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabIndex="0">Disabled content</div> */}
        //             </div>
        //         </div>
        //     </div>

        // </div>
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
                    </div>
                </div>

                <div className='profile' style={{border:'2px solid white', borderRadius: '10px', height: '75vh', width: '80vw'}}>
                    <div style={{border:'2px solid white', borderRadius: '10px', height: '25vh', width: '100%', marginBottom: '10px', alignContent: 'center', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>
                        <img src={abstract} alt='Profile background' style={{height: '100%', width: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                    </div>

                    <div className='ms-3' >
                        <h6 style={{color: 'black', fontSize: '2.0rem', fontFamily: "'Lobster', cursive"}}>My Post</h6>
                        <hr style={{color: 'black', marginBottom: '5px'}}></hr>
                        <div style={{height: '38vh', overflowY: 'auto'}}>
                            <UserPost number='1'/>
                            <UserPost number='2'/>
                            <UserPost number='3'/>
                        </div>
                    </div>
                    


                </div>
            </div>

        </div>
    );
}

export default Artist;