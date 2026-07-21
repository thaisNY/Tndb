import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/Auth/InputField';

export default function Login() {
  const [tab, setTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    if (tab === 'register') {
      localStorage.setItem('@CineThais:user', JSON.stringify({ email, password }));
      alert('Cadastro realizado com sucesso! Faça o login.');
      setTab('login');
    } else {
      const user = JSON.parse(localStorage.getItem('@CineThais:user'));
      if (user && user.email === email && user.password === password) {
        localStorage.setItem('@CineThais:token', 'true');
        navigate('/');
      } else {
        alert('E-mail ou senha inválidos!');
      }
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0b0b0b' }}>
      <h1 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '30px' }}>Cine <span style={{ color: '#f5c518' }}>Thais</span></h1>
      <div style={{ background: '#141414', padding: '35px', borderRadius: '15px', width: '380px', border: '1px solid #222' }}>
        <div style={{ display: 'flex', background: '#0b0b0b', borderRadius: '8px', padding: '4px', marginBottom: '25px' }}>
          <button onClick={() => setTab('login')} style={{ flex: 1, padding: '12px', border: 'none', borderRadius: '6px', background: tab === 'login' ? '#f5c518' : 'transparent', color: tab === 'login' ? '#000' : '#888', fontWeight: 'bold' }}>Entrar</button>
          <button onClick={() => setTab('register')} style={{ flex: 1, padding: '12px', border: 'none', borderRadius: '6px', background: tab === 'register' ? '#f5c518' : 'transparent', color: tab === 'register' ? '#000' : '#888', fontWeight: 'bold' }}>Cadastrar</button>
        </div>
        <form onSubmit={handleAuth}>
          <InputField label="E-MAIL" type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} />
          <InputField label="SENHA" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" style={{ width: '100%', padding: '14px', background: '#f5c518', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginTop: '10px', fontSize: '1rem' }}>
            {tab === 'login' ? 'Entrar' : 'Criar Conta'}
          </button>
        </form>
      </div>
    </div>
  );
}