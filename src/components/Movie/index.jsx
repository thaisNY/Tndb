import React from 'react';

export default function Movie({ item }) {
  return (
    <article className="card">
      <div className="card_image">
        <span>New</span>
        <img 
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
          alt={item.title} 
        />
        <div className="play">▶</div>
      </div>
      <h2>{item.title}</h2>
      <h3>{Math.floor(item.vote_average)}/10</h3>
      <div>⭐⭐⭐⭐✰</div>
    </article>
  );
}