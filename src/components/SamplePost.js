const SamplePost = (props) => {
    return (
        <div className=' mt-4 mb-5' style={{ color: 'black' }}>
            <h3 style={{ fontWeight: 'bold' }}>Sample Post {props.number}</h3>
            <div className="ms-3 mb-3">
                <p className="border rounded ">Sample Comment 1</p>
                <p className="border rounded ">Sample Comment 2</p>
                <p className="border rounded ">Sample Comment 3</p>
            </div>
        </div>
    );
}

export default SamplePost;