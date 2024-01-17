import {Link} from 'react-router-dom';

export  default function(){
    return(
        <div>
            <div className="pay-container">
            <div className="pagetitle">
                <div className="stripborder"></div>
                <div className="title"><h1>Nothing to See Here!</h1></div>
                <div className="stripborder"></div>
            </div>
            <p className="no-match" style={{marginTop:'2rem', marginBottom: '2rem', fontSize:'1.5rem'}}>We'll let you know when we have new content!</p>
            <Link to="/" id='no-match'><button id='home-btn' style={{marginBottom:'1.5rem', padding:'0rem'}}>Back to Home</button></Link>
            </div>
        </div>

    )

}