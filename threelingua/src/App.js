import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './styles/global.css';
import Home from './pages/Home';
import Metro from './pages/Metro';
import Daily from './pages/Daily';
import Phrases from './pages/Phrases';
import Subscription from './Subscription';
import Auth from './Auth';
import { supabase } from './supabase';

export const AppContext = createContext();
export function useApp() { return useContext(AppContext); }

function Header() {
  const { lang, setLang, user, setUser, isPremium } = useApp();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div style={{ background: '#0D2137', padding: '14px 20px 12px', position: 'sticky', top: 0, zIndex: 99, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <div style={{ fontSize: 22, fontWeight: 800, color: 'white' }}>Three<span style={{ color: '#13C882' }}>Lingua</span></div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Paris & Île-de-France</div>
      </div>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        {[{c:'fr',f:'🇫🇷'},{c:'en',f:'🇬🇧'},{c:'es',f:'🇪🇸'},{c:'ar',f:'🇸🇦'},{c:'zh',f:'🇨🇳'}].map(l => (
          <button key={l.c} onClick={() => setLang(l.c)} style={{ width: 32, height: 32, borderRadius: '50%', border: lang === l.c ? '2px solid #13C882' : '2px solid rgba(255,255,255,0.15)', background: 'transparent', fontSize: 16, cursor: 'pointer' }}>{l.f}</button>
        ))}
        {user ? (
          <button onClick={handleLogout} style={{ marginLeft: 8, background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: 11, fontWeight: 700, padding: '6px 10px', borderRadius: 20, border: 'none', cursor: 'pointer' }}>
            {isPremium ? '⭐ Premium' : 'Déconnexion'}
          </button>
        ) : (
          <NavLink to="/auth" style={{ marginLeft: 8, background: '#13C882', color: '#0D2137', fontSize: 11, fontWeight: 700, padding: '6px 10px', borderRadius: 20, textDecoration: 'none' }}>
            Connexion
          </NavLink>
        )}
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 480, background: 'white', borderTop: '1px solid #eee', display: 'flex', zIndex: 100 }}>
      {[{to:'/',icon:'🏠',label:'Accueil'},{to:'/metro',icon:'🚇',label:'Métro'},{to:'/quotidien',icon:'🛒',label:'Quotidien'},{to:'/phrases',icon:'💬',label:'Phrases'}].map(item => (
        <NavLink key={item.to} to={item.to} end={item.to==='/'} style={({isActive}) => ({ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px 4px 8px', fontSize: 11, fontWeight: isActive ? 700 : 400, color: isActive ? '#0D2137' : '#9BA4B0', textDecoration: 'none', borderTop: isActive ? '2px solid #13C882' : '2px solid transparent' })}>
          <span style={{ fontSize: 20, marginBottom: 2 }}>{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [user, setUser] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const [progress, setProgress] = useState({ metroLinesViewed: [], dailyCatsViewed: [], phrasesPlayed: [] });
  const updateProgress = (type, id) => setProgress(prev => ({ ...prev, [type]: prev[type].includes(id) ? prev[type] : [...prev[type], id] }));

  const checkPremium = async (userId) => {
    const { data } = await supabase
      .from('subscriptions')
      .select('is_premium')
      .eq('user_id', userId)
      .single();
    setIsPremium(data?.is_premium || false);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) checkPremium(session.user.id);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) checkPremium(session.user.id);
      else setIsPremium(false);
    });
  }, []);

  return (
    <AppContext.Provider value={{ lang, setLang, user, setUser, isPremium, progress, updateProgress }}>
      <BrowserRouter>
        <div style={{ maxWidth: 480, margin: '0 auto', minHeight: '100vh', background: '#f7f8fa' }}>
          <Header />
          <main style={{ paddingBottom: 80 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/metro" element={<Metro />} />
              <Route path="/quotidien" element={<Daily />} />
              <Route path="/phrases" element={<Phrases />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/auth" element={<Auth onLogin={setUser} />} />
            </Routes>
          </main>
          <NavBar />
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}