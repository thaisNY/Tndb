import axios from 'axios';

// 1. Log para ver no F12 se o Vite realmente carregou a chave
console.log('Chave do .env:', import.meta.env.VITE_TMDB_API_KEY);

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    // Passa a variável direta sem fallback de texto
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: 'pt-BR',
  },
});