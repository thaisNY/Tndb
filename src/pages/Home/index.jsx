import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Movie from '../../components/Movie';
import "./Home.scss";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/movie/popular');
        setFilmes(res.data.results);
      } catch (e) { 
        console.error(e); 
      }
    };
    fetchData();
  }, []);

  const logout = () => {
    localStorage.removeItem('@CineThais:token');
    navigate('/login');
  };

  return (
    <div className="home-container">
      <header>
        <h1>Cine <span>Thais</span></h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div className="search-area">
            <input type="text" placeholder="Buscar Filmes..." />
            <FaSearch />
          </div>
          <button onClick={logout} style={{ background: '#f5c518', border: 'none', padding: '8px 20px', borderRadius: '8px', fontWeight: 'bold' }}>Sair</button>
        </div>
      </header>
      <main>
        <section className="boxCard">
          {filmes.map((item) => (
            <Movie key={item.id} item={item} />
          ))}
        </section>
      </main>
    </div>
  );
}