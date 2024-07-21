import ArtDisplay from '../images/ArtDisplay.webp'
const Tutorial1 = () => {
    return ( 
        <div>
            <p style={{ marginLeft: '3rem', marginTop: '80px', color: 'black' }}><a href='/artconnect/discover'>Discover</a> / <a href='/artconnect/art'>ContemporaryArt</a> / <a href='/artconnect/tutorial'>Tutorial</a></p>
            <div className="d-flex ">
                <div className="specificArt">
                    <img src={ArtDisplay} alt=''></img>
                    <p className="text-center align-items-end" style={{color: 'black'}}>Signed By: <a href="./artconnect/artist" style={{textDecoration: 'underline'}}>Artist</a></p>
                </div>

                <div className="details" style={{color: 'black'}}>
                    <div style={{margin: '10px'}}>
                        <h1 style={{fontSize: '3.5rem', fontFamily: "'Lobster', cursive"}}>Step 2:</h1>
                        <div style={{width: '500px', height: '300px', marginLeft: '300px', border: '3px solid rgb(255, 255, 255)'}}>
                            <img src={ArtDisplay} alt='' style={{width: '100%', height: '100%'}}></img>
                        </div>
                        <p style={{  marginTop: '50px', marginLeft: '200px', fontSize: '1.5rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between tutorial">
            <button className="btn btn-primary tutorial"><a href='/artconnect/tutorial' style={{color: 'white', textDecoration: 'none'}}><i class="bi bi-arrow-left-circle-fill">    </i>Previous Step</a></button>
                <button className="btn btn-primary tutorial"><a href='/artconnect/tutorialFinal' style={{color: 'white', textDecoration: 'none'}}>Next Step    <i class="bi bi-arrow-right-circle-fill"></i></a></button>
            </div>

        </div>
     );
}
 
export default Tutorial1;