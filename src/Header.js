import React, {useState} from "react";
import './Header.css';
import logo from "./images/TongariroLogo.png";
import login from "./images/Login.png";
import {Link} from 'react-router-dom';

const Header = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    
    const handleLinkClick = () => {
        setBurgerClass("burger-bar unclicked");
        setMenuClass("menu hidden");
      };
      

    return(
        <body>
        <div style={{width:'100%', height:'10vh', position: 'fixed', top: 0, zIndex: 100}} id="test">
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className= {burger_class}></div>
                    <div className= {burger_class}></div>
                    <div className= {burger_class}></div>
                </div>
                
                <div className="logo">
                <Link to= '/'><img src={logo} id="logo" alt="Tongariro Cinemas" /></Link>
                </div>
                <div className="movie-login">
                <div><Link to= '/movies'><p id="timestickets">Times & Tickets</p></Link>
                </div>
                <div className="login"><Link to= '*'><p style={{color:"white"}}>MEMBER LOGIN</p></Link></div>
                <div><a href="/login"><img src={login} id="login" alt="login"></img></a></div>
                </div>
            </nav>
            <div>

            </div>
            <div className={menu_class}>
                <ul className="menu-list">
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/movies" onClick={handleLinkClick}>Movies</Link>   
                <Link to="/seating" onClick={handleLinkClick}>Seating</Link>
                {/* <Link to="/booking" onClick={handleLinkClick}>Booking</Link>
                <Link to="/payment" onClick={handleLinkClick}>Payment</Link> */}
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                
                </ul>
             </div>
        </div>
        </body>   
    )
}

export default Header;