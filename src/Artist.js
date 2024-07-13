import logo from './images/artist.webp';
const Artist = () => {
    return (
        <div>
            <p style={{ marginLeft: '3rem', marginTop: '80px', color: 'black' }}><a href='/artconnect/discover'>Discover</a> / <a href='/artconnect/art'>ContemporaryArt</a> / <a href='/artconnect/artist'>Artist Name</a></p>
            <div className="d-flex ">
                <div className="artistProfile" style={{ backgroundColor: 'lightGrey' }}>
                    <div className="artistPicture">
                        <img src={logo} alt="userimg" />
                    </div>
                    <p className='mt-5'>Link 1</p>
                    <p>Link 2</p>
                    <p>Link 3</p>
                    <p>Link 4</p>

                </div>

                <div className="artistDetails">
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                            {/* <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button> */}
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">Home content</div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">Profile content</div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">Contact content</div>
                        {/* <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabIndex="0">Disabled content</div> */}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Artist;