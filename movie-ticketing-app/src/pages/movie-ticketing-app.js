import React, { useState, useEffect } from 'react';
import '../styles/movie-ticketing.css';

const MovieTicketing = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [numberOfTickets, setNumberOfTickets] = useState();
  const [price, setPrice] = useState();
  const [movieShowtime, setMovieShowtime] = useState();

  const maxTickets = 10;
  const basicRow = [1, 2, 3, 4, 5, 6, 7, 8];
  let row = { A: [], B: [], C: [], D: [], E: [], F: [] };
  row.A.push(basicRow);
  row.B.push(basicRow);
  row.C.push(basicRow);
  row.D.push(basicRow);
  row.E.push(basicRow);
  row.F.push(basicRow);
  console.log(typeof row.A[0]);
  console.log('rowA: ', row.A[0]);

  // useEffect(() => {
  //   setSelectedMovie(movie.value);
  // }, [movie.value]);
  // useEffect(() => {
  //   setMovieShowtime(showtime.value);
  // }, [showtime.value]);
  return (
    <section className="section">
      <div className="movie-container">
        <select name="movie" id="movie" className="movie-picker">
          <option value="avengers">avengers</option>
          <option value="joker">joker</option>
          <option value="toy story">toy story</option>
          <option value="space jam">space jam</option>
        </select>
        <select name="showtime" id="showtime" className="showtime-picker">
          <option value="6:00">6:00</option>
          <option value="7:30">7:30</option>
          <option value="9:00">9:00</option>
          <option value="10:30">10:30</option>
        </select>
        <select
          name="ticketCount"
          id="ticketCount"
          className="ticket-count-picker"
        ></select>
      </div>

      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>N/A</small>
        </li>
        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
      </ul>

      <div className="container screen-container">
        <div className="screen"></div>
        {Object.keys(row).map(index => {
          return (
            <div key={'row' + index} className="row">
              {row.A[0].map((seat, index) => {
                return <div key={'seat' + index} className={`${seat} seat`} />;
              })}
            </div>
          );
        })}

        <p>
          You have selected <span className="count">0</span> seats for a price
          of $<span className="total"></span>
        </p>
      </div>
    </section>
  );
};

export default MovieTicketing;
