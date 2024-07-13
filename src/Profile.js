import user from './images/User.webp';
const Profile = () => {
    return (
        <div>
            <div className="d-flex " style={{ marginTop: '100px' }}>
                <div className="artistProfile" style={{ backgroundColor: 'lightGrey' }}>
                    <div className="artistPicture">
                        <img src={user} alt="userimg" />
                    </div>
                    <div className="mt-3">
                        <p><a href=' ' className='ms-2 mt-5'>Username</a> <hr style={{ color: 'grey' }} /></p>
                        <p><a href=' ' className="ms-2">My Arts</a> <hr style={{ color: 'grey' }} /></p>
                        <p><a href=' ' className="ms-2">My Events</a> <hr style={{ color: 'grey' }} /></p>
                        <p><a href=' ' className="ms-2">Upload Art</a> <hr style={{ color: 'grey' }} /></p>
                        <p><a href=' ' className="ms-2">Settings</a></p>
                    </div>

                </div>

                <div className='profile align-content-center' style={{backgroundColor: 'white', border:'2px solid light-grey', height: '72vh', width: '72vw'}}>
                    <h6 className="text-center" style={{color: 'black'}}>Coming Soon</h6>
                </div>
            </div>

        </div>
    );
}

export default Profile;