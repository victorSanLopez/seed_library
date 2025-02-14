Ce projet est un monorepo JS, suivant l'architecture React-Express-MySQL telle qu'enseignée à la Wild Code School (v7.1.7) :

Il est pré-configuré avec un ensemble d'outils pour aider les étudiants à produire du code de qualité industrielle, tout en restant un outil pédagogique :

# À propos

Mon Grainetier Virtuel ( Projet Seed Library ) est un projet permettant aux utilisateurs de créer et gérer leur collection de graines en ligne. Le projet est encore en développement et a été réalisé en deux jours au sein de la Wild Code School. Il est partiellement fonctionnel, mais plusieurs axes d'évolution sont prévus, notamment au niveau de l'authentification, de l'expérience utilisateur (UX) et des services proposés.

## Accéder aux ressources

Les ressources pour les mockups et le modèle de données (MPD) sont disponibles dans le dossier server/public/assets/ressources/. Vous y trouverez des éléments pour mieux visualiser la structure du projet et l'interface utilisateur prévue.

## Backlogs

Les backlogs sont accessibles dans l'onglet "Projets" du dépôt GitHub. Vous y trouverez les tâches et les évolutions à venir pour le projet.

### Détails du projet

Ce projet a été réalisé en deux jours dans le cadre d'un développement rapide (MVP). Il n'est pas encore complet, mais il permet déjà de créer une collection de graines et de la gérer.

Les principales fonctionnalités sont les suivantes :

Gestion des utilisateurs avec authentification (encore à améliorer).
Création et gestion de graines dans une grainothèque virtuelle.
Interface permettant de visualiser et organiser sa collection.
Espace Administrateur avec mur d'authentification fonctionnel.

### Axes d'évolution

Authentification : Amélioration de la gestion des utilisateurs, notamment pour sécuriser les sessions et créer un mur d'authentificatino côté utilisateur.
Administration : Possibilité de se déconnecter de notre rôle d'administrateur et un accès à des statistiques sur les utilisateurs.
UX : Refonte de l'interface pour améliorer l'expérience utilisateur.
Services : Ajout de nouvelles fonctionnalités pour aider les utilisateurs à gérer leurs graines, comme des rappels saisonniers, des filtres et des conseils de culture.

#### Installation & Utilisation

#### Utilisateurs Windows

Assurez-vous de lancer ces commandes dans un terminal Git pour éviter [les problèmes de formats de nouvelles lignes](https://en.wikipedia.org/wiki/Newline#Issues_with_different_newline_formats) :

```sh
git config --global core.eol lf
git config --global core.autocrlf false
```
#### 

1. Installez le plugin **Biome** dans VSCode et configurez-le.
2. Clonez ce dépôt, puis accédez au répertoire cloné.
3. Exécutez la commande `npm install`.
4. Créez des fichiers d'environnement (`.env`) dans les répertoires `server` et `client` : vous pouvez copier les fichiers `.env.sample` comme modèles (**ne les supprimez pas**).


##### Commandes de Base

| Commande               | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `npm install`          | Installe les dépendances pour le client et le serveur                       |
| `npm run db:migrate`   | Met à jour la base de données à partir d'un schéma défini                   |
| `npm run dev`          | Démarre les deux serveurs (client et serveur) dans un seul terminal         |


##### Mettre en place la base de données

**Créer et remplir le fichier `.env`** dans le dossier `server` :

```plaintext
DB_HOST=localhost
DB_PORT=3306
DB_USER=not_root
DB_PASSWORD=password
DB_NAME=my_database
```

**Les variables sont utilisés** dans `server/database/client.ts` :

```typescript
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

import mysql from "mysql2/promise";

const client = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT as number | undefined,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

export default client;
```
