import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './styles/global.css';
import Home from './pages/Home';
import Metro from './pages/Metro';
import Daily from './pages/Daily';
import Phrases from './pages/Phrases';
import Subscription from './Subscription';

export const AppContext = createContext();
export function useApp() { return useContext(AppContext); }

function Header() {
  const { lang, setLang } = useApp();
  return (
    <div style={{ background: '#0D2137', padding: '14px 20px 12px', position: 'sticky', top: 0, zIndex: 99, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <div style={{ fontSize: 22, fontWeight: 800, color: 'white' }}>Three<span style={{ color: '#13C882' }}>Lingua</span></div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Paris & Île-de-France</div>
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        {[{c:'en',f:'🇬🇧'},{c:'es',f:'🇪🇸'},{c:'ar',f:'🇸🇦'},{c:'zh',f:'🇨🇳'}].map(l => (
          <button key={l.c} onClick={() => setLang(l.c)} style={{ width: 32, height: 32, borderRadius: '50%', border: lang === l.c ? '2px solid #13C882' : '2px solid rgba(255,255,255,0.15)', background: 'transparent', fontSize: 16, cursor: 'pointer' }}>{l.f}</button>
        ))}
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
  const [progress, setProgress] = useState({ metroLinesViewed: [], dailyCatsViewed: [], phrasesPlayed: [] });
  const updateProgress = (type, id) => setProgress(prev => ({ ...prev, [type]: prev[type].includes(id) ? prev[type] : [...prev[type], id] }));

  return (
    <AppContext.Provider value={{ lang, setLang, progress, updateProgress }}>
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
            </Routes>
          </main>
          <NavBar />
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}