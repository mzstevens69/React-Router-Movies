import React from 'react';
import {NavLink} from 'react-router-dom';

const SavedList = props =>  (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink exact to={`/movies/${movie.id}`}>
      <span className="saved-movie">{movie.title}</span>
      </NavLink>
    ))}
    <NavLink to='/' className="home-button">Home</NavLink>
  </div>
  );
   

export default SavedList;
