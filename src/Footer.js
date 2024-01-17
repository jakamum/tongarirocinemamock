import {Link} from 'react-router-dom';
import './Footer.css'
import logo2 from "./images/tONGARi.png";
import facebook from "./images/facebook_icon.png";
import instagram from "./images/instagram_icon.png";
import SM from "./images/Social Media.jpg";

function Footer(){

    return(
        <div style={{height:'40vh'}} className="footer">
            <nav className="logomenu">
                <div className="logo2">
                <Link to= '/'><img src={logo2} id="logo2" alt="Tongariro Cinemas" /></Link>
                </div>
                <div className="social-media"><Link to= '*'><img src={facebook} id="facebook" alt="Facebook Icon"/></Link>
                <Link to= '*'><img src={instagram} id="instagram" alt="Instagram Icon"/></Link></div>
                <div className='GooglePlay'><Link to= '*'><img src={SM} id="SM" alt="GooglePlay" /></Link></div>
                
                <div className="footermenu">
                    <ul className="menu-list">
                    <li><Link to= '/contact'>Contact Us</Link></li>
                    <li><Link to= '*'>Offers and Promotions</Link></li>
                    <li><Link to= '*'>Food and Drink</Link></li>
                    <li><Link to= '*'>Functions and Parties</Link></li>
                    <li><Link to= '*'>Restaurant</Link></li>
                    </ul>
                </div>
                
            </nav>
            <div className="lowerlinks">
                <div><p style={{color:"white",marginLeft:'0'}}>&copy; Copyright 2023</p></div>
                <div className="footermenu">
                    <h3>ABOUT US</h3>
                    <ul className="menu-list2">
                        <li><Link to= '*'>About Tongariro Cinemas</Link></li>
                        <li><Link to= '*'>FAQs</Link></li>
                        <li><Link to= '*'>Accessibility</Link></li>
                        <li><Link to= '*'>Gift Card Balance</Link></li>
                        <li><Link to= '/contact'>Contact Us</Link></li>
                    </ul>
                </div>

                {/* Ensuring user's and company's security is and privacy is valued */}
                <div className="terms">
                    <div className="privacy"><Link to= '*'><p style={{color:"white"}}>Privacy</p></Link> 
                    </div>
                    <div className="TCs"><Link to= '*'><p style={{color:"white"}}>Ts & Cs</p></Link></div>
                </div>
            </div>
        </div>   
    )
}


export default Footer;