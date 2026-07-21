import React from 'react';

export default function Banner({ movie }) {
  if (!movie) return null;

  return (
    <div style={{
      width: '100%',
      height: '400px',
      backgroundImage: `linear-gradient(to top, #000, transparent), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '40px 80px'
    }}>
      <div>
        <h1 style={{ fontSize: '3rem', color: '#fff' }}>{movie.title}</h1>
        <p style={{ maxWidth: '600px', color: '#ccc', marginTop: '10px' }}>{movie.overview}</p>
      </div>
    </div>
  );
}