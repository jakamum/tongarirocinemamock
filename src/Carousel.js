import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import movieImage1 from "./images/GranTurismo.jpg";
import movieImage2 from "./images/Oppen.png";
import movieImage3 from "./images/Meg2.jpg";
import movieImage4 from "./images/Elemental.png";
import movieImage5 from "./images/BlueBeetle.png";
import movieImage6 from "./images/SpiderMan.png";
import movieImage7 from "./images/MissShetty.png";
import movieImage8 from "./images/Cats.png";
import movieImage9 from "./images/Greek.png";
import movieImage10 from "./images/SlamDunk.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export default function Carousel() {

  
  console.log("movieImage1:", movieImage1);
  console.log("movieImage2:", movieImage2);
  console.log("movieImage3:", movieImage1);
  console.log("movieImage4:", movieImage2);
  console.log("movieImage5:", movieImage1);
  console.log("movieImage6:", movieImage2);
  console.log("movieImage7:", movieImage1);
  console.log("movieImage8:", movieImage2);
  console.log("movieImage9:", movieImage1);
  console.log("movieImage10:", movieImage2);

  const allMovies = [
    {
      movieName: 'Gran Turismo: Based on a True Story',
      imageUrl: movieImage1,
    },
    {
      movieName: 'Oppenheimer',
      imageUrl: movieImage2,
    },
    {
      movieName: 'Meg 2: The Trench',
      imageUrl: movieImage3,
    },
    {
      movieName: 'Elemental',
      imageUrl: movieImage4,
    },
    {
      movieName: 'Blue Beetle',
      imageUrl: movieImage5,
    },
    {
      movieName: 'Spiderman: Into the Spiderverse',
      imageUrl: movieImage6,
    },
    {
      movieName: 'Miss Shetty and Mr ',
      imageUrl: movieImage7,
    },
    {
      movieName: 'Cats in the Museum',
      imageUrl: movieImage8,
    },
    {
      movieName: 'My Big Fat Greek Wedding',
      imageUrl: movieImage9,
    },
    {
      movieName: 'Slam Dunk',
      imageUrl: movieImage10,
    }
  ];

  const containerRef = useRef(null);

  // State to manage whether the carousel should be initially hidden
  const [isCarouselHidden, setIsCarouselHidden] = useState(true);

  useEffect(() => {
    // Preload images by creating new Image objects
    const preloadImages = (imageArray) => {
      const imagePromises = imageArray.map((image) => {
        console.log("Preloading image:", image.imageUrl); // Add this line
        return new Promise((resolve, reject) => {
          const img = new Image();
          console.log("Image URL Custom"+image);
          img.src = image;
          img.onload = resolve;
          img.onerror = () => {
            // Handle image loading error
            console.error("Error loading image:", image); // Add this line
            reject(new Error(`Error loading image: ${image}`));
          };
        });
      });
      return Promise.all(imagePromises);
    };
    
  
    const imagesToPreload = allMovies.map((movie) => movie.imageUrl);
  
    // Preload images and then reveal the carousel
    preloadImages(imagesToPreload)
      .then(() => {
        setIsCarouselHidden(false);
      })
      .catch((error) => {
        console.error("Error preloading images:", error.message);
      });
  }, [allMovies]);
  

  const settings = {
    dots: true,
    infinite: true, // Set to true for infinite loop
    speed: 500,
    horizonal: false,
    slidesToShow: 5, // Display five movies at a time
    slidesToScroll: 5, // Number of slides to scroll at a time    
  };

  return (
    <div>
      {isCarouselHidden ? (
        <p>Loading images...</p>
      ) : (
        <Slider {...settings} ref={containerRef}>
        <div className="carousel-container">
          {allMovies.map((movie, index) => (
            <div key={index}>
              <a href="#">
                <img src={movie.imageUrl} alt={movie.movieName} />
                <p>{movie.movieName}</p>
              </a>
            </div>
          ))}
        </div>

        </Slider>
      )}
    </div>
  );
}










