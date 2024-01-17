import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from "./Modal";
import "./Movies.css";

export default function Gallery(props) {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDateTime, setSelectedDateTime] = useState(null);
    


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDateTimeSelection = (dateTime) => {
    setSelectedDateTime(dateTime);
    


      // Clear previous selections from local storage
    localStorage.removeItem('selectedMovie');
    localStorage.removeItem('selectedDateTime');


    // Create the selectedMovie object with date and time
    const selectedMovie = {
      title: props.movie.movieName,
      imageUrl: props.movie.imageUrl,
      dateTime: dateTime,
    };
 

    // Store the selected movie in localStorage
    localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie));


    console.log('Selected Movie:', selectedMovie.title);
    console.log('Selected DateTime:', dateTime);

    // Close the modal
    closeModal();

    const [date, time] = dateTime.split(' ');
    navigate(`/seating?movie=${selectedMovie.title}&date=${date}&time=${time}`);
  };

  return (
    <section className='movies'>
      <img src={props.movie.imageUrl} className="movieposter" alt={props.movie.movieName} />
      <div className='description'>
        <h2>{props.movie.movieName}</h2>
        <p>{props.movie.ratedurationtime}</p>
        <p>{props.movie.description}</p>

        <div className='buttons'>
          <button className="icon-button" onClick={openModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ticket" viewBox="0 0 16 16">
              <path d="M2 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h1a1 1 0 0 1 0 2h-1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8H1a1 1 0 0 1 0-2h1V5zm1 6h6v1H3v-1z" />
              <path d="M1 9h1v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9h1a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2z" />
            </svg>
            Times and Tickets
          </button>
          <a href="#">
                        <button className="icon-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="M11.96 8.293l-5-3.798a1 1 0 0 0-1.435.118 1 1 0 0 0-.118 1.414L10.287 8 5.407 11.176a1 1 0 0 0 .118 1.414 1 1 0 0 0 1.414-.118l5-3.798a1 1 0 0 0 0-1.414z"/>
                        </svg>
                        Trailer
                        </button>
                    </a>
                    <a href="#">
                    <button className="icon-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="M8 14s-1.5-1.5-3-2.5C3.5 10 2 8.5 2 6c0-2.5 2.5-4 4-4 1.1 0 2.2.5 3 1.3C9.8 2.5 10.9 2 12 2c1.5 0 3 1.5 3 4 0 2.5-1.5 4-3 5.5-1.5 1-3 2.5-3 2.5z"/>
                    </svg>
                    Watchlist
                    </button>

                    </a>
          <Modal isOpen={isModalOpen} onClose={closeModal} onSelectDateTime={(date, time) => handleDateTimeSelection(`${date} ${time}`)} />

        </div>
      </div>
    </section>
  );
}
