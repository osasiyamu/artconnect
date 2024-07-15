import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";

const Error = () => {
    return ( 
        <div style={{marginTop: '50px', alignContent: 'center', textAlign: 'center'}}>
            <h1 style={{fontSize: '6rem', color: 'Black', marginBottom: '50px', marginTop: '100px'}}>This page does not exist</h1>
            <button className="btn btn-primary search mt-5"><a href="/artconnect/" style={{textDecoration: 'none', color: 'white'}}>Take Me Home</a></button>
        </div> 
    );
}
 
export default Error;