import React, { useState } from 'react';
import { supabase } from './supabase';

export default function Auth({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setMessage('');
    
    if (isLogin) {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMessage('Email ou mot de passe incorrect');
      else onLogin(data.user);
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setMessage('Erreur lors de la création du compte');
      else setMessage('Vérifie ton email pour confirmer ton compte !');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <div style={{ fontFamily: 'sans-serif', fontSize: 24, fontWeight: 800, color: '#0D2137', marginBottom: 8 }}>
        {isLogin ? 'Connexion' : 'Créer un compte'}
      </div>
      <div style={{ fontSize: 13, color: '#9BA4B0', marginBottom: 24 }}>
        {isLogin ? 'Connecte-toi pour accéder à ThreeLingua' : 'Crée ton compte gratuitement'}
      </div>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ width: '100%', padding: '12px', marginBottom: 10, border: '1px solid #ddd', borderRadius: 10, fontSize: 14, boxSizing: 'border-box' }}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ width: '100%', padding: '12px', marginBottom: 16, border: '1px solid #ddd', borderRadius: 10, fontSize: 14, boxSizing: 'border-box' }}
      />

      {message && <div style={{ color: '#0F6E56', background: '#E3F7EF', padding: 10, borderRadius: 8, marginBottom: 12, fontSize: 13 }}>{message}</div>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{ width: '100%', padding: 14, background: '#0D2137', color: 'white', border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer' }}
      >
        {loading ? 'Chargement...' : isLogin ? 'Se connecter' : 'Créer mon compte'}
      </button>

      <div
        onClick={() => setIsLogin(!isLogin)}
        style={{ marginTop: 16, fontSize: 13, color: '#0D2137', cursor: 'pointer', textDecoration: 'underline' }}
      >
        {isLogin ? "Pas encore de compte ? S'inscrire" : 'Déjà un compte ? Se connecter'}
      </div>
    </div>
  );
}