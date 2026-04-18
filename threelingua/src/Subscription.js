import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export default function Subscription() {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({
      lineItems: [{ price: 'price_1TNeXORrCQ7ek0qwzvHtR9Ey', quantity: 1 }],
      mode: 'subscription',
      successUrl: window.location.origin + '/success',
      cancelUrl: window.location.origin + '/subscription',
      trialPeriodDays: 7,
    });
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px 16px' }}>
      <div style={{
        fontFamily: 'sans-serif',
        fontSize: 24, fontWeight: 800,
        color: '#0D2137', marginBottom: 6
      }}>
        Passe à Premium 🚀
      </div>
      <div style={{ fontSize: 14, color: '#9BA4B0', marginBottom: 24 }}>
        Accès complet à ThreeLingua
      </div>

      <div style={{
        background: '#0D2137',
        borderRadius: 20, padding: 24,
        color: 'white', marginBottom: 20,
        textAlign: 'center'
      }}>
        <div style={{ fontSize: 13, opacity: 0.6, marginBottom: 8 }}>
          1 semaine gratuite, puis
        </div>
        <div style={{ fontSize: 48, fontWeight: 800, lineHeight: 1 }}>
          10€
        </div>
        <div style={{ fontSize: 14, opacity: 0.6, marginTop: 4 }}>
          par mois
        </div>

        <div style={{ margin: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
          {[
            'Métro et RER — toutes les lignes',
            'Vie quotidienne complète',
            'Phrases essentielles + audio',
            'Mises à jour régulières',
            'Support prioritaire',
          ].map((item, i) => (
            <div key={i} style={{ fontSize: 13, marginBottom: 8, textAlign: 'left', opacity: 0.9 }}>
              ✓ {item}
            </div>
          ))}
        </div>

        <button
          onClick={handleSubscribe}
          disabled={loading}
          style={{
            width: '100%', padding: '14px',
            background: '#13C882',
            border: 'none', borderRadius: 12,
            color: '#0D2137', fontSize: 15,
            fontWeight: 700, cursor: 'pointer',
            opacity: loading ? 0.7 : 1,
            fontFamily: 'sans-serif'
          }}
        >
          {loading ? 'Chargement...' : 'Commencer gratuitement — 7 jours'}
        </button>

        <div style={{ fontSize: 11, opacity: 0.5, marginTop: 10 }}>
          Sans engagement · Annulation à tout moment
        </div>
      </div>

      <div style={{
        background: '#E3F7EF', borderRadius: 12,
        padding: 14, fontSize: 13, color: '#0F6E56'
      }}>
        💳 Paiement 100% sécurisé par Stripe.
      </div>
    </div>
  );
}