const SamplePost = (props) => {
    return (
        <div className='mt-4 mb-5' style={{ color: 'black' }}>
            <h3 style={{ fontWeight: 'bold' }}>Sample Post {props.number}</h3>
            <div className="ms-4 mb-3">
                <p className="border rounded ">Sample Comment 1</p>
                <p className="border rounded ">Sample Comment 2</p>
                <p className="border rounded ">Sample Comment 3</p>
            </div>
            <div className="d-flex flex-row bd-highlight">
                <textarea rows="2" cols="50"></textarea>
                <button className="btn btn-primary search mt-5" data-toggle="modal" data-target=".bd-example-modal" style={{width:'3rem', height:'1.5rem', fontSize: 'small', lineHeight: '1rem', padding: '0'}}>Post</button>


                <div class="modal fade bd-example-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Congratulations!</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body text-center">
                                <p>You have added a post! (A post will be added in the working website)</p><br></br>
                                <p>Also note that the text area for posting will not be available if the user is not in the community already. The rest of the UI stays the same however</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SamplePost;