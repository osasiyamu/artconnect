const UserPost = (props) => {
    return ( 
        <div className=' mt-4 mb-5' style={{ color: 'black' }}>
            <h3 style={{ fontWeight: 'bold' }}>Sample Post {props.number}</h3>
            <div className="ms-3 mb-3">
                <p className="border rounded ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <p className="border rounded ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <p className="border rounded ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </div>
            <div className="d-flex flex-row bd-highlight">
                {/* <textarea rows="2" cols="50"></textarea>
                <button className="btn btn-primary search mt-5" style={{width:'3rem', height:'1.5rem', fontSize: 'small', lineHeight: '1rem', padding: '0'}}>Post</button> */}

            </div>
        </div>
     );
}
 
export default UserPost;