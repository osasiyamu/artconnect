import artEvent1 from '../images/artEvent1.png';
import artEvent2 from '../images/artEvent2.png';
import artEvent3 from '../images/artEvent3.png';
import artEvent4 from '../images/artEvent4.png';
import artEvent5 from '../images/artEvent5.jpeg';

const CommunityCategory = (props) => {
    return (
        <div className="category">

            <div className="mt-4">
                <div className="row">
                    <div className="col">
                        <div className="testimonials" style={{ maxWidth: '100%' }}>
                            <div className="d-flex ms-2 me-3 content" style={{}}>
                                <div className="" style={{ width: '18rem', marginRight: '2rem' }}>
                                    <div className="art">
                                        <img src={artEvent1} alt="" />
                                        <div className="text-center align-items-center"><a href="/artconnect/communityDetails"> {props.category} Details</a></div>
                                    </div>
                                </div>

                                <div className="" style={{ width: '18rem', marginRight: '2rem' }}>
                                    <div className="art">
                                        <img src={artEvent2} alt="" />
                                        <div className="text-center align-items-center"><a href="/artconnect/communityDetails"> {props.category} Details</a></div>
                                    </div>
                                </div>


                                <div className="" style={{ width: '18rem', marginRight: '2rem' }}>
                                    <div className="art">
                                        <img src={artEvent3} alt="" />
                                        <div className="text-center align-items-center"><a href="/artconnect/communityDetails"> {props.category} Details</a></div>
                                    </div>
                                </div>

                                <div className="" style={{ width: '18rem', marginRight: '2rem' }}>
                                    <div className="art">
                                        <img src={artEvent4} alt="" />
                                        <div className="text-center align-items-center"><a href="/artconnect/communityDetails"> {props.category} Details</a></div>
                                    </div>
                                </div>

                                <div className="" style={{ width: '18rem', marginRight: '2rem' }}>
                                    <div className="art">
                                        <img src={artEvent5} alt="" />
                                        <div className="text-center align-items-center"><a href="/artconnect/communityDetails"> {props.category} Art Details</a></div>
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

export default CommunityCategory;