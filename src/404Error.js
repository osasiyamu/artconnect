import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";

const Error = () => {
    return ( 
        <div style={{marginTop: '70px', alignContent: 'center', textAlign: 'center', border: '3px solid black', borderRadius: '10px', padding: '5px'}}>
            <div style={{border: '5px solid white'}}>
                <h1 style={{fontSize: '6rem', color: 'Black', marginBottom: '50px', marginTop: '80px'}}>This page does not exist</h1>
                <button className="btn btn-primary search mt-5"><a href="/artconnect/" style={{textDecoration: 'none', color: 'white'}}>Take Me Home</a></button>
            </div>
            
        </div> 
    );
}
 
export default Error;