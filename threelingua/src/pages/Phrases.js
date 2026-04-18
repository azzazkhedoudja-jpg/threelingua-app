import React, { useState } from 'react';
import { phrases, languages } from '../data/parisData';
import { useApp } from '../App';

const categories = [
  { id: 'metro', label: '🚇 Métro', data: phrases.metro },
  { id: 'quotidien', label: '🛒 Quotidien', data: phrases.quotidien },
  { id: 'urgences', label: '🆘 Urgences', data: phrases.urgences },
];

export default function Phrases() {
  const [activeCat, setActiveCat] = useState('metro');
  const { lang, updateProgress } = useApp();

  const currentCat = categories.find(c => c.id === activeCat);

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
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--navy)', marginBottom: 4 }}>
        Phrases essentielles
      </div>
      <div style={{ fontSize: 13, color: 'var(--gray-400)', marginBottom: 16 }}>
        {langLabel ? `Traduction en ${langLabel.label}` : 'Sélectionne ta langue en haut'}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, overflowX: 'auto', paddingBottom: 4 }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCat(cat.id)}
            style={{
              padding: '8px 14px',
              borderRadius: 20,
              border: activeCat === cat.id ? '2px solid var(--navy)' : '1px solid var(--gray-200)',
              background: activeCat === cat.id ? 'var(--navy)' : 'var(--white)',
              color: activeCat === cat.id ? 'white' : 'var(--gray-600)',
              fontSize: 13, fontWeight: activeCat === cat.id ? 600 : 400,
              whiteSpace: 'nowrap', cursor: 'pointer',
              transition: 'all 0.15s',
              fontFamily: 'var(--font-body)'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {currentCat.data.map((phrase, i) => (
        <PhraseCard
          key={i}
          phrase={phrase}
          index={i}
          lang={lang}
          onSpeak={() => speak(phrase.fr, i)}
        />
      ))}

      <div style={{
        background: 'var(--amber-pale)', borderRadius: 'var(--radius-md)',
        padding: 14, marginTop: 10, fontSize: 13, color: '#854F0B',
        border: '1px solid rgba(245,166,35,0.2)'
      }}>
        💡 Appuie sur le bouton ▶ pour entendre la prononciation en français. La synthèse vocale fonctionne sur tous les navigateurs modernes.
      </div>
    </div>
  );
}

function PhraseCard({ phrase, lang, onSpeak }) {
  const translation = phrase.translations?.[lang];

  return (
    <div style={{
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      marginBottom: 10,
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--gray-100)',
      display: 'flex', alignItems: 'center', gap: 12
    }}>
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: 15,
          fontWeight: 700, color: 'var(--navy)', marginBottom: 3
        }}>{phrase.fr}</div>
        {translation && (
          <div style={{ fontSize: 13, color: 'var(--gray-400)', fontStyle: 'italic' }}>
            {translation}
          </div>
        )}
        {!translation && (
          <div style={{ fontSize: 12, color: 'var(--gray-200)' }}>
            Sélectionne une langue pour la traduction
          </div>
        )}
      </div>
      <button
        onClick={onSpeak}
        title="Écouter en français"
        style={{
          width: 38, height: 38, borderRadius: '50%',
          background: 'var(--teal-pale)',
          border: '1px solid rgba(15,168,113,0.3)',
          color: '#0F6E56', fontSize: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, cursor: 'pointer',
          transition: 'all 0.15s'
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#0FA871'; e.currentTarget.style.color = 'white'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--teal-pale)'; e.currentTarget.style.color = '#0F6E56'; }}
      >
        ▶
      </button>
    </div>
  );
}
