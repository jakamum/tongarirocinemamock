import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MovieCarousel.css';


function MovieCarousel1({ movies }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div className='slider'>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div className='carousel-container' key={index}>
            <div className="carousel-image-description">
              <img id='movieimg' src={movie.image} alt={movie.title} />
              <div className="carousel-description">
              <h2>{movie.description}</h2>
              </div>
            </div>

          </div>
        ))}
      </Slider>

    </div>
  );
}

export default MovieCarousel1;