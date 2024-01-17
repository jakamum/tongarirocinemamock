import './Header.css';
import MovieCarousel from './MovieCarousel';
import './App.css';
import './Home.css';
import Feature1 from "./images/Feature1.png";
import Feature2 from "./images/Feature2.png";
import Feature3 from "./images/Feature3.png";
import Feature4 from "./images/Feature4.png";
import Feature5 from "./images/Feature5.png";
import Hero1 from "./images/HeroMovie1.png";
import Hero2 from "./images/HeroMovie2.jpg";
import Hero3 from "./images/HeroMovie3.jpg";
import React from 'react';

    

function Home() {
  

const movies = [
  {
    title:'Sound of Freedom',
    description: 'TICKETS ON SALE NOW',
    image: Hero1,
  },
  {
    title:'The Equalizer',
    description: 'The Equalizer ON NOW ',
    image: Hero2,
  },
  {
    title:'JAWAN',
    description: 'COMING SOON!',
    image: Hero3,
  },

];

return (
        <div className="homepage">           
            <div className="stripborder" id='stripborder'></div>
            <div className='hero'>
            <MovieCarousel movies={movies} />
            </div>
          
            <div className='features'>
                <div className='imgfeatures'>
                    <div className='image-specials'><a href="#"><img src={Feature1}></img></a></div>
                    <div><a href="#"><img src={Feature2}></img></a></div>
                    <div><a href="#"><img src={Feature3}></img></a></div>
                </div>
                <div className='imgfeatures1'>
                    <div><a href="#"><img src={Feature5}></img></a></div>
                    <div><a href="#"><img src={Feature4}></img></a></div>
                </div>
            </div>

        </div>   
    
    );
}


export default Home;