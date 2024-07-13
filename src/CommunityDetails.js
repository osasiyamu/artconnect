import CommunityDetail from './images/communityDetails.jpeg';
import SamplePost from './components/SamplePost';
const CommunityDetails = () => {
    return (
        <div>
            <p style={{ marginLeft: '3rem', marginTop: '80px', color: 'black' }}><a href='/artconnect/community'>Community</a> / <a href='/artconnect/communityDetails'>Commununity Details</a></p>
            <div className="">
                <div className="communityDetails" style={{ width: '90%', height: '400px', color: 'black', marginLeft: '3rem', marginRight: '3rem' }}>
                    <img src={CommunityDetail} alt='' style={{ width: '100%', height: '100%' }}></img>
                </div>

            </div>
            <div className="d-flex justify-content-end tutorial">
                <button className="btn btn-primary tutorial" style={{ paddingLeft: '20px', paddingRight: '20px', marginRight: '60px' }}>Join</button>
            </div>

            <hr style={{ color: 'black' }} />
            <div className='ms-5'>
                <SamplePost number='1' />
                <SamplePost number='2' />
                <SamplePost number='3' />
            </div>
        </div>
    );
}

export default CommunityDetails;