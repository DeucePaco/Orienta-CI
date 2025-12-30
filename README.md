# Orientation CI

Application web d'orientation pour aider les étudiants à découvrir les universités, filières et formations.

## 🚀 Démarrer le projet

### Prérequis

- Node.js (version récente LTS)
- npm ou pnpm ou yarn

### Installation

```bash
git clone <URL_DU_DEPOT>
cd orientation-ci
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

L'application sera disponible sur l'URL affichée dans le terminal (par défaut http://localhost:5173).

## 🧱 Stack technique

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn-ui

## 📁 Structure générale (simplifiée)

- `src/`
  - `components/` – composants réutilisables (Header, Navigation, etc.)
  - `pages/` – pages principales (Accueil, Universités, Filières, Favoris, Dashboard…)
  - `styles/` – styles globaux

## 🧪 Scripts utiles

- `npm run dev` – lance le serveur de développement
- `npm run build` – build de production
- `npm run preview` – prévisualiser le build
- `npm run lint` – lancer l'analyse ESLint

## 📌 Personnalisation

- Logo : placer votre image dans `public/` (ex: `public/BOY.jpeg`) et configurer les composants `Header` et `Navigation`.
- Couleurs / thème : modifier la configuration Tailwind et/ou les tokens de shadcn-ui.

## 📄 Licence

À définir selon vos besoins (ex: MIT, propriétaire, etc.).
