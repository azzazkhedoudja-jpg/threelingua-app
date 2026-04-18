import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../App';

export default function Home() {
  const { progress } = useApp();

  const totalMetro = 8;
  const totalDaily = 6;
  const totalPhrases = 17;

  const metroProgress = Math.round((progress.metroLinesViewed.length / totalMetro) * 100);
  const dailyProgress = Math.round((progress.dailyCatsViewed.length / totalDaily) * 100);
  const phrasesProgress = Math.round((progress.phrasesPlayed.length / totalPhrases) * 100);
  const globalProgress = Math.round((metroProgress + dailyProgress + phrasesProgress) / 3);

  const tips = [
    {
      tag: "Métro", tagColor: "#1A3A5C", tagBg: "#E6F1FB",
      border: "#378ADD",
      text: "Le pass Navigo Découverte (86,40€/mois) couvre toutes les zones 1-5. Bien plus économique si tu prends les transports régulièrement."
    },
    {
      tag: "Vie pratique", tagColor: "#0F6E56", tagBg: "#E3F7EF",
      border: "#0FA871",
      text: "Inscris-toi à la sécurité sociale sur ameli.fr dès ton arrivée. Le remboursement de tes soins en dépend."
    },
    {
      tag: "Bon plan", tagColor: "#854F0B", tagBg: "#FEF3DC",
      border: "#F5A623",
      text: "Les musées nationaux sont gratuits le 1er dimanche du mois. Louvre, Orsay, Pompidou — profites-en !"
    }
  ];

  return (
    <div style={{ padding: '20px 16px' }}>
      <div style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 60%, #0F6E56 100%)',
        borderRadius: 'var(--radius-lg)',
        padding: '20px',
        marginBottom: 20,
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: -20, right: -20,
          width: 120, height: 120, borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)'
        }} />
        <div style={{ fontSize: 12, opacity: 0.65, marginBottom: 4 }}>Bienvenue à Paris 🗼</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, marginBottom: 2 }}>
          Ton intégration commence ici
        </div>
        <div style={{ fontSize: 12, opacity: 0.6, marginBottom: 18 }}>
          Métro, vie quotidienne, phrases essentielles
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <div style={{
            flex: 1, background: 'rgba(255,255,255,0.15)',
            borderRadius: 8, height: 8, overflow: 'hidden'
          }}>
            <div style={{
              width: `${globalProgress}%`, height: '100%',
              background: 'var(--teal)', borderRadius: 8,
              transition: 'width 0.5s ease'
            }} />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>{globalProgress}%</div>
        </div>
        <div style={{ fontSize: 11, opacity: 0.6 }}>Progression globale de ton intégration</div>

        <div style={{ display: 'flex', gap: 16, marginTop: 18 }}>
          {[
            { label: 'Lignes métro', val: progress.metroLinesViewed.length, total: totalMetro },
            { label: 'Thèmes', val: progress.dailyCatsViewed.length, total: totalDaily },
            { label: 'Phrases', val: progress.phrasesPlayed.length, total: totalPhrases },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 700, fontFamily: 'var(--font-display)' }}>
                {s.val}<span style={{ fontSize: 12, opacity: 0.5 }}>/{s.total}</span>
              </div>
              <div style={{ fontSize: 10, opacity: 0.6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
        {[
          { to: '/metro', icon: '🚇', title: 'Métro & RER', sub: '8 lignes expliquées', color: 'var(--navy)' },
          { to: '/quotidien', icon: '🛒', title: 'Vie quotidienne', sub: '6 thèmes pratiques', color: 'var(--teal)' },
          { to: '/phrases', icon: '💬', title: 'Phrases clés', sub: '17 phrases essentielles', color: '#F5A623' },
          { to: '/phrases?cat=urgences', icon: '🆘', title: 'Urgences', sub: 'Numéros & phrases', color: 'var(--coral)' },
        ].map(card => (
          <Link key={card.to} to={card.to} style={{
            background: 'var(--white)',
            borderRadius: 'var(--radius-md)',
            padding: '16px 14px',
            border: '1px solid var(--gray-100)',
            boxShadow: 'var(--shadow-sm)',
            textDecoration: 'none',
            display: 'block',
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
          >
            <div style={{ fontSize: 24, marginBottom: 8 }}>{card.icon}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'var(--gray-800)', marginBottom: 2 }}>{card.title}</div>
            <div style={{ fontSize: 12, color: 'var(--gray-400)' }}>{card.sub}</div>
          </Link>
        ))}
      </div>

      <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: 'var(--gray-600)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>
        Conseils du jour
      </div>
      {tips.map((tip, i) => (
        <div key={i} style={{
          background: 'var(--white)',
          borderRadius: 'var(--radius-md)',
          padding: '12px 14px',
          marginBottom: 10,
          borderLeft: `3px solid ${tip.border}`,
          boxShadow: 'var(--shadow-sm)'
        }}>
          <span style={{
            fontSize: 10, fontWeight: 600,
            color: tip.tagColor, background: tip.tagBg,
            padding: '2px 8px', borderRadius: 20,
            display: 'inline-block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5
          }}>{tip.tag}</span>
          <div style={{ fontSize: 13, color: 'var(--gray-800)', lineHeight: 1.55 }}>{tip.text}</div>
        </div>
      ))}
    </div>
  );
}
