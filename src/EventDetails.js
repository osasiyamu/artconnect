import EventDetail from './images/eventDetails.jpeg'
import SampleEventDetails from './components/SampleEventDetails';
import Navbar from './Navbar';
const EventDetails = () => {
    return (
        <div>
            <Navbar />
            <p style={{ marginLeft: '3rem', marginTop: '80px', color: 'black' }}><a href='/artconnect/discover'>Discover</a> / <a href='/artconnect/eventDetails'>Event Details</a></p>
            <div className="">
                <div className="communityDetails" style={{ width: '90%', height: '400px', color: 'black', marginLeft: '3rem', marginRight: '3rem' }}>
                    <img src={EventDetail} alt='' style={{ width: '100%', height: '100%' }}></img>
                </div>

            </div>
            <hr style={{ marginTop: '30px', marginBottom: '30px', marginLeft: '40px', marginRight: '100px', color: 'black' }} />
            <div className='ms-5'>
                <SampleEventDetails />
            </div>
            <div className="d-flex justify-content-end tutorial">
                <button className="btn btn-primary tutorial" style={{ paddingLeft: '20px', paddingRight: '20px', marginRight: '60px' }}>Promote</button>
            </div>
        </div>
    );
}

export default EventDetails;