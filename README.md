# 💜 Deezer Search Track App 💜

**Deezer Search Track App** est une application Web construite avec [Next.js](https://nextjs.org), qui permet aux utilisateurs de rechercher des musiques, de trier et de filtrer les résultats, tout en affichant des informations détaillées sur les artistes via l’intégration avec l'[API Discogs](https://www.discogs.com/developers).

## Stack Technologique

- **Framework** : [Next.js](https://nextjs.org) (Full Stack)
- **Langage** : TypeScript
- **Requêtes GraphQL** : [Apollo Client](https://www.apollographql.com/docs/react/)
- **Back-end** : GraphQL avec le schéma et les resolvers personnalisés
- **APIs Utilisées** :
  - [Deezer API](https://developers.deezer.com/) (recherche de titres, artistes, albums)
  - [Discogs API](https://www.discogs.com/developers) (biographie des artistes)
- **Bibliothèques UI** :
  - [ShadCN](https://shadcn.dev/) (composants préconstruits)
  - [Tailwind CSS](https://tailwindcss.com/) (styling)
- **Outils de développement** : [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

---

## 🚀 Fonctionnalités principales

- **Recherche de musiques** : Recherchez des chansons à partir de l'API Deezer.
- **Tri dynamique** : Triez les résultats par titre, artiste, album, durée ou popularité (POP).
- **Filtres interactifs** : Affichez ou masquez des colonnes en fonction de vos préférences.
- **Biographie des artistes** : Cliquez sur le nom de l'artiste pour afficher sa biographie issue de l'API Discogs.
- **Infinite Scroll** : Chargez dynamiquement plus de résultats lors du défilement.

---

## 📷 Aperçu de l’application

### Page principale

![Screenshot 1](./screenshots/sc-1.png)

### Recherche de musique

![Screenshot 2](./screenshots/sc-2.png)

### Tri et filtres

![Screenshot 3](./screenshots/sc-3.png)

![Screenshot 4](./screenshots/sc-4.png)

### Biographie de l'artiste

![Screenshot 5](./screenshots/sc-5.png)

---

## 🛠 Configuration du projet

### Installation

Clonez le projet et installez les dépendances :

```bash
# Clonez le dépôt
git clone https://github.com/votre-repository.git

# Accédez au répertoire
cd deezer-test-technique

# Installez les dépendances
npm install
# ou
yarn install
# ou
pnpm install
```

### Lancement du projet

Démarrez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Accédez à l'application sur http://localhost:3000.

### Build de production

Pour créer une version optimisée pour la production :

```bash
npm run build
# ou
yarn build
# ou
pnpm build
```

### Servez ensuite l’application avec :

```bash
npm run start
# ou
yarn start
# ou
pnpm start
```

## ✅ Tests et vérifications

### ESLint

Le projet est configuré avec ESLint pour assurer la qualité du code.

Pour exécuter les tests ESLint :

```bash
npm run lint
# ou
yarn lint
# ou
pnpm lint
```

### Tests au moment du build

Lors de l’exécution de la commande build, ESLint vérifie automatiquement le code :

```bash
npm run build
# ou
yarn build
# ou
pnpm build
```

En cas d’erreur ESLint, la construction du projet échoue et les modifications ne sont pas poussés en prod.

![Screenshot 6](./screenshots/sc-6.png)

## 🔑 Variables d'environnement

Voici les variables d’environnement à définir dans un fichier .env à la racine du projet :

```bash
NEXT_PUBLIC_API_URL= # l'api fournie par next.js
NEXT_PUBLIC_DEEZER_API_URL=https://api.deezer.com
NEXT_PUBLIC_DISCOGS_API_URL=https://api.discogs.com
DISCOGS_API_KEY=Votre_Consumer_Key
DISCOGS_API_SECRET=Votre_Consumer_Secret
```

### Comment obtenir vos clés Discogs

- Rendez-vous sur le [Discogs Developer Portal][https://www.discogs.com/developers].
- Créez un compte ou connectez-vous.
- Créez une application et obtenez votre Consumer Key et Consumer Secret.
- 📚 Documentation utile
  - API Deezer: Pour en savoir plus sur les points de terminaison utilisés.
  - API Discogs: Documentation officielle de l’API Discogs.
  - Next.js Documentation: Documentation de Next.js.

### 🚀 Déploiement sur Vercel

Ce projet peut être déployé facilement sur la plateforme Vercel :

- Créez un compte sur Vercel.
- Importez votre dépôt Git.
- Ajoutez vos variables d’environnement dans l’interface de Vercel.
- Lancez le déploiement.
- Pour en savoir plus, consultez la documentation sur le déploiement Next.js.

Vous pouvez accéder à l'application en ligne à l'URL suivante :

https://deezer-test-technique.vercel.app/

Amusez-vous bien 💜 !
