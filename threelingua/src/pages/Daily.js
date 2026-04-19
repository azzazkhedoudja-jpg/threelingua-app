import React, { useState } from 'react';
import { dailyCategories } from '../data/parisData';
import { useApp } from '../App';

const colorMap = {
  teal: { bg: '#E3F7EF', text: '#0F6E56', border: '#0FA871' },
  amber: { bg: '#FEF3DC', text: '#854F0B', border: '#F5A623' },
  navy: { bg: '#E6EDF4', text: '#0D2137', border: '#1A3A5C' },
  coral: { bg: '#FDECEA', text: '#993C1D', border: '#E8533A' },
};

const FREE_CATEGORIES = 2;

export default function Daily() {
  const [expanded, setExpanded] = useState(null);
  const { updateProgress, user } = useApp();
 

  const visibleCategories = isPremium ? dailyCategories : dailyCategories.slice(0, FREE_CATEGORIES);

  const handleExpand = (id) => {
    const next = expanded === id ? null : id;
    setExpanded(next);
    if (next) updateProgress('dailyCatsViewed', id);
  };

  return (
    <div style={{ padding: '20px 16px' }}>
      <div style={{ fontFamily: 'sans-serif', fontSize: 22, fontWeight: 800, color: '#0D2137', marginBottom: 4 }}>
        Vie quotidienne
      </div>
      <div style={{ fontSize: 13, color: '#9BA4B0', marginBottom: 16 }}>
        Tout ce qu'il faut savoir pour s'installer à Paris
      </div>

      {!isPremium && (
        <div style={{ background: '#FEF3DC', borderRadius: 12, padding: 12, marginBottom: 16, fontSize: 13, color: '#854F0B', border: '1px solid #F5A623' }}>
          🔒 Version gratuite — 2 thèmes disponibles. <a href="/subscription" style={{ color: '#854F0B', fontWeight: 700 }}>Passe à Premium</a> pour tout débloquer !
        </div>
      )}

      {visibleCategories.map(cat => {
        const colors = colorMap[cat.color] || colorMap.teal;
        const isOpen = expanded === cat.id;
        return (
          <div key={cat.id} style={{ marginBottom: 10 }}>
            <button onClick={() => handleExpand(cat.id)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', background: isOpen ? colors.bg : 'white', border: isOpen ? `2px solid ${colors.border}` : '1px solid #EEF0F3', borderRadius: isOpen ? '14px 14px 0 0' : 14, cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }}>
              <span style={{ fontSize: 24 }}>{cat.icon}</span>
              <span style={{ flex: 1, fontFamily: 'sans-serif', fontSize: 15, fontWeight: 700, color: isOpen ? colors.text : '#2D3340' }}>{cat.title}</span>
              <span style={{ fontSize: 18, color: isOpen ? colors.text : '#D8DCE3', transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>›</span>
            </button>

            {isOpen && (
              <div style={{ background: 'white', border: `2px solid ${colors.border}`, borderTop: 'none', borderRadius: '0 0 14px 14px', padding: '4px 16px 16px' }}>
                {cat.tips.map((tip, i) => (
                  <div key={i} style={{ paddingTop: 12, marginTop: 12, borderTop: i > 0 ? '1px solid #EEF0F3' : 'none' }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: colors.text, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>{tip.title}</div>
                    <div style={{ fontSize: 13, color: '#5C6470', lineHeight: 1.6 }}>{tip.text}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {!isPremium && (
        <div style={{ background: '#EEF0F3', borderRadius: 12, padding: 14, textAlign: 'center', marginBottom: 16 }}>
          <div style={{ fontSize: 13, color: '#5C6470', marginBottom: 8 }}>
            🔒 {dailyCategories.length - FREE_CATEGORIES} thèmes supplémentaires en Premium
          </div>
          <a href="/subscription" style={{ background: '#0D2137', color: 'white', padding: '10px 20px', borderRadius: 20, fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
            Voir Premium
          </a>
        </div>
      )}

      <div style={{ marginTop: 20, background: '#E3F7EF', borderRadius: 22, padding: 18, border: '1px solid rgba(15,168,113,0.2)' }}>
        <div style={{ fontFamily: 'sans-serif', fontSize: 15, fontWeight: 700, color: '#0F6E56', marginBottom: 10 }}>Numéros utiles</div>
        {[
          { label: 'SAMU (urgences médicales)', num: '15' },
          { label: 'Police', num: '17' },
          { label: 'Pompiers', num: '18' },
          { label: 'Numéro européen', num: '112' },
          { label: 'SOS Amitié', num: '09 72 39 40 50' },
        ].map(item => (
          <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid rgba(15,168,113,0.15)', fontSize: 13 }}>
            <span style={{ color: '#5C6470' }}>{item.label}</span>
            <a href={`tel:${item.num.replace(/\s/g, '')}`} style={{ fontFamily: 'sans-serif', fontWeight: 700, color: '#0F6E56', fontSize: 15 }}>{item.num}</a>
          </div>
        ))}
      </div>
    </div>
  );
}