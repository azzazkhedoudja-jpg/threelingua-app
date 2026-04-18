# ThreeLingua 🗼

Guide d'intégration pour les expatriés et étudiants internationaux à Paris & Île-de-France.

## Fonctionnalités MVP

- **Métro & RER** : 8 lignes expliquées avec stations clés, astuces et tarifs Navigo
- **Vie quotidienne** : 6 thèmes (courses, banque, logement, santé, mobile, loisirs)
- **Phrases essentielles** : 17 phrases avec traduction EN/ES/AR/ZH et synthèse vocale FR
- **Progression** : Suivi local de ce que l'utilisateur a exploré
- **Multilingue** : Interface traduite en 4 langues

## Stack technique

- React 18
- React Router v6
- CSS Variables (design system custom)
- Web Speech API (synthèse vocale native)
- Polices : Syne (display) + DM Sans (body)

## Installation locale

```bash
cd threelingua
npm install
npm start
```

## Build production

```bash
npm run build
```

Ça génère un dossier `/build` prêt à déployer.

## Déploiement sur threelingua.com

### Option 1 — Vercel (recommandé, gratuit)
1. Crée un compte sur [vercel.com](https://vercel.com)
2. `npm install -g vercel`
3. `vercel` dans le dossier du projet
4. Dans les settings Vercel, ajoute ton domaine `threelingua.com`
5. Configure les DNS chez ton registrar :
   - Type A : `76.76.21.21`
   - CNAME www : `cname.vercel-dns.com`

### Option 2 — Netlify
1. `npm run build`
2. Glisse le dossier `/build` sur [app.netlify.com](https://app.netlify.com)
3. Site Settings > Domain Management > Add custom domain
4. Ajoute `threelingua.com` et configure les DNS

### Option 3 — Hébergement classique (OVH, Infomaniak...)
1. `npm run build`
2. Upload le contenu du dossier `/build` via FTP sur ton hébergement
3. Configure le `.htaccess` pour React Router :

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

## Structure du projet

```
src/
├── App.js              # Routing, Header, NavBar, Context global
├── index.js            # Point d'entrée
├── data/
│   └── parisData.js    # Données métro, quotidien, phrases
├── pages/
│   ├── Home.js         # Accueil + progression
│   ├── Metro.js        # Lignes métro/RER + Navigo
│   ├── Daily.js        # Vie quotidienne
│   └── Phrases.js      # Phrases + synthèse vocale
└── styles/
    └── global.css      # Design system
```

## Prochaines étapes (v2)

- [ ] Démarches administratives (CAF, préfecture, Sécu)
- [ ] Carte interactive des arrondissements
- [ ] Mode hors-ligne (PWA)
- [ ] Authentification + progression cloud
- [ ] Contenu pour d'autres villes françaises
- [ ] Notifications push "astuce du jour"
