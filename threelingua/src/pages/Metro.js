import React, { useState } from 'react';
import { metroLines, navigoInfo } from '../data/parisData';
import { useApp } from '../App';

const FREE_LINES = ['1', '4', 'RER-A'];

export default function Metro() {
  const [selectedLine, setSelectedLine] = useState(null);
  const [search, setSearch] = useState(false);
  const { updateProgress, user } = useApp();
  const isPremium = !!user;

  const visibleLines = isPremium
    ? metroLines
    : metroLines.filter(l => FREE_LINES.includes(l.id));

  const handleSelect = (line) => {
    setSelectedLine(line);
    updateProgress('metroLinesViewed', line.id);
  };

  return (
    <div style={{ padding: '20px 16px' }}>
      <div style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: 22, fontWeight: 800, color: '#0D2137', marginBottom: 4 }}>
        Métro & RER
      </div>
      <div style={{ fontSize: 13, color: '#9BA4B0', marginBottom: 16 }}>
        Les lignes essentielles de Paris & Île-de-France
      </div>

      {!isPremium && (
        <div style={{ background: '#FEF3DC', borderRadius: 12, padding: 12, marginBottom: 16, fontSize: 13, color: '#854F0B', border: '1px solid #F5A623' }}>
          🔒 Version gratuite — 3 lignes disponibles. <a href="/subscription" style={{ color: '#854F0B', fontWeight: 700 }}>Passe à Premium</a> pour toutes les lignes !
        </div>
      )}

      <input
        type="text"
        placeholder="Rechercher une ligne ou une station..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ width: '100%', padding: '10px 14px', border: '1px solid #D8DCE3', borderRadius: 14, fontSize: 14, marginBottom: 16, background: 'white', color: '#2D3340', outline: 'none', boxSizing: 'border-box' }}
      />

      {selectedLine && (
        <div style={{ background: 'white', borderRadius: 22, padding: 18, marginBottom: 16, boxShadow: '0 4px 16px rgba(13,33,55,0.10)', border: `2px solid ${selectedLine.color}22` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: selectedLine.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', fontSize: 18, fontWeight: 800, color: selectedLine.textColor, flexShrink: 0 }}>{selectedLine.number}</div>
            <div>
              <div style={{ fontFamily: 'sans-serif', fontSize: 15, fontWeight: 700, color: '#0D2137' }}>Ligne {selectedLine.number}</div>
              <div style={{ fontSize: 12, color: '#9BA4B0' }}>{selectedLine.direction}</div>
            </div>
            <button onClick={() => setSelectedLine(null)} style={{ marginLeft: 'auto', background: '#EEF0F3', border: 'none', borderRadius: '50%', width: 28, height: 28, fontSize: 14, color: '#9BA4B0', cursor: 'pointer' }}>✕</button>
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#9BA4B0', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 }}>Stations clés</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
            {selectedLine.keyStations.map((s, i) => (
              <span key={i} style={{ background: `${selectedLine.color}22`, color: '#0D2137', fontSize: 12, padding: '4px 10px', borderRadius: 20, border: `1px solid ${selectedLine.color}44` }}>{s}</span>
            ))}
          </div>
          <div style={{ background: '#E3F7EF', borderRadius: 8, padding: '10px 12px', fontSize: 13, color: '#0F6E56', lineHeight: 1.5 }}>
            💡 {selectedLine.tip}
          </div>
        </div>
      )}

      <div style={{ fontSize: 13, fontWeight: 600, color: '#5C6470', fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Métro</div>
      {visibleLines.filter(l => l.type === 'metro').map(line => (
        <LineCard key={line.id} line={line} onSelect={handleSelect} selected={selectedLine?.id === line.id} />
      ))}

      {!isPremium && (
        <div style={{ background: '#EEF0F3', borderRadius: 12, padding: 14, textAlign: 'center', marginBottom: 16 }}>
          <div style={{ fontSize: 13, color: '#5C6470', marginBottom: 8 }}>🔒 5 lignes supplémentaires en Premium</div>
          <a href="/subscription" style={{ background: '#0D2137', color: 'white', padding: '10px 20px', borderRadius: 20, fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Voir Premium</a>
        </div>
      )}

      {isPremium && (
        <>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#5C6470', fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10, marginTop: 16 }}>RER</div>
          {visibleLines.filter(l => l.type === 'rer').map(line => (
            <LineCard key={line.id} line={line} onSelect={handleSelect} selected={selectedLine?.id === line.id} />
          ))}
        </>
      )}

      <div style={{ background: '#0D2137', borderRadius: 22, padding: 18, marginTop: 20, color: 'white' }}>
        <div style={{ fontFamily: 'sans-serif', fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Pass Navigo Découverte</div>
        {[
          { label: 'Abonnement mensuel', value: navigoInfo.monthly },
          { label: 'Abonnement annuel', value: navigoInfo.annual },
          { label: 'Zones couvertes', value: navigoInfo.zones },
          { label: 'Ticket unité', value: navigoInfo.ticketUnit },
          { label: 'Carnet de 10', value: navigoInfo.ticketCarnet10 },
        ].map(item => (
          <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 8, marginBottom: 8, fontSize: 13 }}>
            <span style={{ opacity: 0.7 }}>{item.label}</span>
            <span style={{ fontWeight: 600, color: '#13C882' }}>{item.value}</span>
          </div>
        ))}
        <div style={{ fontSize: 12, opacity: 0.55, marginTop: 8, lineHeight: 1.5 }}>💡 {navigoInfo.tip}</div>
      </div>
    </div>
  );
}

function LineCard({ line, onSelect, selected }) {
  return (
    <div onClick={() => onSelect(line)} style={{ background: selected ? '#f0f2f5' : 'white', borderRadius: 14, padding: '12px 14px', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', border: selected ? `2px solid ${line.color}` : '1px solid #EEF0F3', transition: 'all 0.15s' }}>
      <div style={{ width: 36, height: 36, borderRadius: '50%', background: line.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', fontSize: 14, fontWeight: 800, color: line.textColor, flexShrink: 0 }}>{line.number}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#2D3340' }}>{line.type === 'rer' ? 'RER ' : 'Ligne '}{line.number}</div>
        <div style={{ fontSize: 12, color: '#9BA4B0', marginTop: 1 }}>{line.direction}</div>
      </div>
      <div style={{ fontSize: 18, color: '#D8DCE3' }}>›</div>
    </div>
  );
}