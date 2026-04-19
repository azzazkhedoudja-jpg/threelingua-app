import React, { useState } from 'react';
import { phrases, languages } from '../data/parisData';
import { useApp } from '../App';

const categories = [
  { id: 'metro', label: '🚇 Métro', data: phrases.metro },
  { id: 'quotidien', label: '🛒 Quotidien', data: phrases.quotidien },
  { id: 'urgences', label: '🆘 Urgences', data: phrases.urgences },
];

const FREE_PHRASES = 3;

export default function Phrases() {
  const [activeCat, setActiveCat] = useState('metro');
 
  const { lang, updateProgress, isPremium } = useApp();

  const currentCat = categories.find(c => c.id === activeCat);
  const visiblePhrases = isPremium ? currentCat.data : currentCat.data.slice(0, FREE_PHRASES);

  const speak = (text, phraseIndex) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'fr-FR';
      utter.rate = 0.85;
      window.speechSynthesis.speak(utter);
      updateProgress('phrasesPlayed', `${activeCat}-${phraseIndex}`);
    }
  };

  const langLabel = languages.find(l => l.code === lang);

  return (
    <div style={{ padding: '20px 16px' }}>
      <div style={{ fontFamily: 'sans-serif', fontSize: 22, fontWeight: 800, color: '#0D2137', marginBottom: 4 }}>
        Phrases essentielles
      </div>
      <div style={{ fontSize: 13, color: '#9BA4B0', marginBottom: 16 }}>
        {langLabel ? `Traduction en ${langLabel.label}` : 'Sélectionne ta langue en haut'}
      </div>

      {!isPremium && (
        <div style={{ background: '#FEF3DC', borderRadius: 12, padding: 12, marginBottom: 16, fontSize: 13, color: '#854F0B', border: '1px solid #F5A623' }}>
          🔒 Version gratuite — 3 phrases par catégorie. <a href="/subscription" style={{ color: '#854F0B', fontWeight: 700 }}>Passe à Premium</a> pour tout débloquer !
        </div>
      )}

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, overflowX: 'auto', paddingBottom: 4 }}>
        {categories.map(cat => (
          <button key={cat.id} onClick={() => setActiveCat(cat.id)} style={{ padding: '8px 14px', borderRadius: 20, border: activeCat === cat.id ? '2px solid #0D2137' : '1px solid #D8DCE3', background: activeCat === cat.id ? '#0D2137' : 'white', color: activeCat === cat.id ? 'white' : '#5C6470', fontSize: 13, fontWeight: activeCat === cat.id ? 600 : 400, whiteSpace: 'nowrap', cursor: 'pointer', fontFamily: 'sans-serif' }}>
            {cat.label}
          </button>
        ))}
      </div>

      {visiblePhrases.map((phrase, i) => (
        <PhraseCard key={i} phrase={phrase} lang={lang} onSpeak={() => speak(phrase.fr, i)} />
      ))}

      {!isPremium && (
        <div style={{ background: '#EEF0F3', borderRadius: 12, padding: 14, textAlign: 'center', marginTop: 8 }}>
          <div style={{ fontSize: 13, color: '#5C6470', marginBottom: 8 }}>
            🔒 {currentCat.data.length - FREE_PHRASES} phrases supplémentaires en Premium
          </div>
          <a href="/subscription" style={{ background: '#0D2137', color: 'white', padding: '10px 20px', borderRadius: 20, fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
            Voir Premium
          </a>
        </div>
      )}

      <div style={{ background: '#FEF3DC', borderRadius: 12, padding: 14, marginTop: 10, fontSize: 13, color: '#854F0B', border: '1px solid rgba(245,166,35,0.2)' }}>
        💡 Appuie sur ▶ pour entendre la prononciation en français.
      </div>
    </div>
  );
}

function PhraseCard({ phrase, lang, onSpeak }) {
  const translation = phrase.translations?.[lang];

  return (
    <div style={{ background: 'white', borderRadius: 14, padding: '14px 16px', marginBottom: 10, boxShadow: '0 1px 3px rgba(13,33,55,0.07)', border: '1px solid #EEF0F3', display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: 'sans-serif', fontSize: 15, fontWeight: 700, color: '#0D2137', marginBottom: 3 }}>{phrase.fr}</div>
        {translation && <div style={{ fontSize: 13, color: '#9BA4B0', fontStyle: 'italic' }}>{translation}</div>}
      </div>
      <button onClick={onSpeak} title="Écouter en français" style={{ width: 38, height: 38, borderRadius: '50%', background: '#E3F7EF', border: '1px solid rgba(15,168,113,0.3)', color: '#0F6E56', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: 'pointer' }}>▶</button>
    </div>
  );
}