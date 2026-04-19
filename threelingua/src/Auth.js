import React, { useState } from 'react';
import { supabase } from './supabase';

export default function Auth({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setMessage('');

    if (isForgot) {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://threelingua.com/auth',
      });
      if (error) setMessage('Erreur, vérifie ton email.');
      else setMessage('Email de réinitialisation envoyé ! Vérifie ta boîte mail.');
      setLoading(false);
      return;
    }

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
        {isForgot ? 'Mot de passe oublié' : isLogin ? 'Connexion' : 'Créer un compte'}
      </div>
      <div style={{ fontSize: 13, color: '#9BA4B0', marginBottom: 24 }}>
        {isForgot ? 'Entre ton email pour réinitialiser ton mot de passe' : isLogin ? 'Connecte-toi pour accéder à ThreeLingua' : 'Crée ton compte gratuitement'}
      </div>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ width: '100%', padding: '12px', marginBottom: 10, border: '1px solid #ddd', borderRadius: 10, fontSize: 14, boxSizing: 'border-box' }}
      />

      {!isForgot && (
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: '12px', marginBottom: 16, border: '1px solid #ddd', borderRadius: 10, fontSize: 14, boxSizing: 'border-box' }}
        />
      )}

      {message && (
        <div style={{ color: '#0F6E56', background: '#E3F7EF', padding: 10, borderRadius: 8, marginBottom: 12, fontSize: 13 }}>
          {message}
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{ width: '100%', padding: 14, background: '#0D2137', color: 'white', border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer', marginBottom: 12 }}
      >
        {loading ? 'Chargement...' : isForgot ? 'Envoyer le lien' : isLogin ? 'Se connecter' : 'Créer mon compte'}
      </button>

      {!isForgot && isLogin && (
        <div onClick={() => setIsForgot(true)} style={{ fontSize: 13, color: '#9BA4B0', cursor: 'pointer', marginBottom: 8 }}>
          Mot de passe oublié ?
        </div>
      )}

      {isForgot ? (
        <div onClick={() => setIsForgot(false)} style={{ fontSize: 13, color: '#0D2137', cursor: 'pointer', textDecoration: 'underline' }}>
          Retour à la connexion
        </div>
      ) : (
        <div onClick={() => setIsLogin(!isLogin)} style={{ fontSize: 13, color: '#0D2137', cursor: 'pointer', textDecoration: 'underline' }}>
          {isLogin ? "Pas encore de compte ? S'inscrire" : 'Déjà un compte ? Se connecter'}
        </div>
      )}
    </div>
  );
}