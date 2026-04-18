import React, { useState } from 'react';
import { metroLines, navigoInfo } from '../data/parisData';
import { useApp } from '../App';

export default function Metro() {
  const [selectedLine, setSelectedLine] = useState(null);
  const [search, setSearch] = useState('');
  const { updateProgress } = useApp();

  const filtered = metroLines.filter(l =>
    l.direction.toLowerCase().includes(search.toLowerCase()) ||
    l.keyStations.some(s => s.toLowerCase().includes(search.toLowerCase())) ||
    l.number.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (line) => {
    setSelectedLine(line);
    updateProgress('metroLinesViewed', line.id);
  };

  return (
    <div style={{ padding: '20px 16px' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--navy)', marginBottom: 4 }}>
        Métro & RER
      </div>
      <div style={{ fontSize: 13, color: 'var(--gray-400)', marginBottom: 16 }}>
        Les lignes essentielles de Paris & Île-de-France
      </div>

      <input
        type="text"
        placeholder="Rechercher une ligne ou une station..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: '100%', padding: '10px 14px',
          border: '1px solid var(--gray-200)',
          borderRadius: 'var(--radius-md)',
          fontSize: 14, marginBottom: 16,
          background: 'var(--white)',
          color: 'var(--gray-800)',
          outline: 'none'
        }}
      />

      {selectedLine && (
        <div style={{
          background: 'var(--white)', borderRadius: 'var(--radius-lg)',
          padding: 18, marginBottom: 16,
          boxShadow: 'var(--shadow-md)',
          border: `2px solid ${selectedLine.color}22`
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: selectedLine.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800,
              color: selectedLine.textColor, flexShrink: 0
            }}>{selectedLine.number}</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--navy)' }}>
                Ligne {selectedLine.number}
              </div>
              <div style={{ fontSize: 12, color: 'var(--gray-400)' }}>{selectedLine.direction}</div>
            </div>
            <button
              onClick={() => setSelectedLine(null)}
              style={{ marginLeft: 'auto', background: 'var(--gray-100)', border: 'none', borderRadius: '50%', width: 28, height: 28, fontSize: 14, color: 'var(--gray-400)' }}
            >✕</button>
          </div>

          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 }}>
            Stations clés
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
            {selectedLine.keyStations.map((s, i) => (
              <span key={i} style={{
                background: `${selectedLine.color}22`,
                color: 'var(--navy)',
                fontSize: 12, padding: '4px 10px',
                borderRadius: 20,
                border: `1px solid ${selectedLine.color}44`
              }}>{s}</span>
            ))}
          </div>

          <div style={{
            background: 'var(--teal-pale)', borderRadius: 'var(--radius-sm)',
            padding: '10px 12px',
            fontSize: 13, color: '#0F6E56', lineHeight: 1.5
          }}>
            💡 {selectedLine.tip}
          </div>
        </div>
      )}

      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--gray-600)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>
        Métro
      </div>
      {filtered.filter(l => l.type === 'metro').map(line => (
        <LineCard key={line.id} line={line} onSelect={handleSelect} selected={selectedLine?.id === line.id} />
      ))}

      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--gray-600)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10, marginTop: 16 }}>
        RER
      </div>
      {filtered.filter(l => l.type === 'rer').map(line => (
        <LineCard key={line.id} line={line} onSelect={handleSelect} selected={selectedLine?.id === line.id} />
      ))}

      <div style={{
        background: 'var(--navy)', borderRadius: 'var(--radius-lg)',
        padding: 18, marginTop: 20, color: 'white'
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, marginBottom: 12 }}>
          Pass Navigo Découverte
        </div>
        {[
          { label: 'Abonnement mensuel', value: navigoInfo.monthly },
          { label: 'Abonnement annuel', value: navigoInfo.annual },
          { label: 'Zones couvertes', value: navigoInfo.zones },
          { label: 'Ticket unité', value: navigoInfo.ticketUnit },
          { label: 'Carnet de 10', value: navigoInfo.ticketCarnet10 },
        ].map(item => (
          <div key={item.label} style={{
            display: 'flex', justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            paddingBottom: 8, marginBottom: 8, fontSize: 13
          }}>
            <span style={{ opacity: 0.7 }}>{item.label}</span>
            <span style={{ fontWeight: 600, color: 'var(--teal-light)' }}>{item.value}</span>
          </div>
        ))}
        <div style={{ fontSize: 12, opacity: 0.55, marginTop: 8, lineHeight: 1.5 }}>
          💡 {navigoInfo.tip}
        </div>
      </div>
    </div>
  );
}

function LineCard({ line, onSelect, selected }) {
  return (
    <div
      onClick={() => onSelect(line)}
      style={{
        background: selected ? 'var(--off-white)' : 'var(--white)',
        borderRadius: 'var(--radius-md)',
        padding: '12px 14px',
        marginBottom: 8,
        display: 'flex', alignItems: 'center', gap: 12,
        cursor: 'pointer',
        border: selected ? `2px solid ${line.color}` : '1px solid var(--gray-100)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.15s'
      }}
    >
      <div style={{
        width: 36, height: 36, borderRadius: '50%',
        background: line.color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 800,
        color: line.textColor, flexShrink: 0
      }}>{line.number}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--gray-800)' }}>
          {line.type === 'rer' ? 'RER ' : 'Ligne '}{line.number}
        </div>
        <div style={{ fontSize: 12, color: 'var(--gray-400)', marginTop: 1 }}>{line.direction}</div>
      </div>
      <div style={{ fontSize: 18, color: 'var(--gray-200)' }}>›</div>
    </div>
  );
}
