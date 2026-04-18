import React, { useState } from 'react';
import { dailyCategories } from '../data/parisData';
import { useApp } from '../App';

const colorMap = {
  teal: { bg: 'var(--teal-pale)', text: '#0F6E56', border: '#0FA871' },
  amber: { bg: 'var(--amber-pale)', text: '#854F0B', border: '#F5A623' },
  navy: { bg: '#E6EDF4', text: 'var(--navy)', border: 'var(--navy-light)' },
  coral: { bg: 'var(--coral-pale)', text: '#993C1D', border: 'var(--coral)' },
};

export default function Daily() {
  const [expanded, setExpanded] = useState(null);
  const { updateProgress } = useApp();

  const handleExpand = (id) => {
    const next = expanded === id ? null : id;
    setExpanded(next);
    if (next) updateProgress('dailyCatsViewed', id);
  };

  return (
    <div style={{ padding: '20px 16px' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--navy)', marginBottom: 4 }}>
        Vie quotidienne
      </div>
      <div style={{ fontSize: 13, color: 'var(--gray-400)', marginBottom: 20 }}>
        Tout ce qu'il faut savoir pour s'installer à Paris
      </div>

      {dailyCategories.map(cat => {
        const colors = colorMap[cat.color] || colorMap.teal;
        const isOpen = expanded === cat.id;
        return (
          <div key={cat.id} style={{ marginBottom: 10 }}>
            <button
              onClick={() => handleExpand(cat.id)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                padding: '14px 16px',
                background: isOpen ? colors.bg : 'var(--white)',
                border: isOpen ? `2px solid ${colors.border}` : '1px solid var(--gray-100)',
                borderRadius: isOpen ? 'var(--radius-md) var(--radius-md) 0 0' : 'var(--radius-md)',
                cursor: 'pointer',
                textAlign: 'left',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.2s'
              }}
            >
              <span style={{ fontSize: 24 }}>{cat.icon}</span>
              <span style={{
                flex: 1, fontFamily: 'var(--font-display)', fontSize: 15,
                fontWeight: 700, color: isOpen ? colors.text : 'var(--gray-800)'
              }}>{cat.title}</span>
              <span style={{
                fontSize: 18, color: isOpen ? colors.text : 'var(--gray-200)',
                transform: isOpen ? 'rotate(90deg)' : 'none',
                transition: 'transform 0.2s, color 0.2s'
              }}>›</span>
            </button>

            {isOpen && (
              <div style={{
                background: 'var(--white)',
                border: `2px solid ${colors.border}`,
                borderTop: 'none',
                borderRadius: '0 0 var(--radius-md) var(--radius-md)',
                padding: '4px 16px 16px',
                boxShadow: 'var(--shadow-sm)'
              }}>
                {cat.tips.map((tip, i) => (
                  <div key={i} style={{
                    paddingTop: 12, marginTop: 12,
                    borderTop: i > 0 ? '1px solid var(--gray-100)' : 'none'
                  }}>
                    <div style={{
                      fontSize: 12, fontWeight: 700, color: colors.text,
                      fontFamily: 'var(--font-display)',
                      textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4
                    }}>{tip.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.6 }}>
                      {tip.text}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      <div style={{
        marginTop: 20, background: 'var(--teal-pale)',
        borderRadius: 'var(--radius-lg)', padding: 18,
        border: '1px solid rgba(15,168,113,0.2)'
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: '#0F6E56', marginBottom: 10 }}>
          Numéros utiles
        </div>
        {[
          { label: 'SAMU (urgences médicales)', num: '15' },
          { label: 'Police', num: '17' },
          { label: 'Pompiers', num: '18' },
          { label: 'Numéro européen', num: '112' },
          { label: 'SOS Amitié', num: '09 72 39 40 50' },
        ].map(item => (
          <div key={item.label} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '7px 0',
            borderBottom: '1px solid rgba(15,168,113,0.15)',
            fontSize: 13
          }}>
            <span style={{ color: 'var(--gray-600)' }}>{item.label}</span>
            <a href={`tel:${item.num.replace(/\s/g,'')}`} style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              color: '#0F6E56', fontSize: 15
            }}>{item.num}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
