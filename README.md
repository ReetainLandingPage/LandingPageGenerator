# 🚀 Landing Page Builder | 

Une solution de création de pages de destination "No-Code" haut de gamme. Ce builder permet de concevoir, prévisualiser et exporter des pages web performantes avec une expérience utilisateur fluide et moderne.

---

## ✨ Fonctionnalités principales

### 🎨 Édition et Design
- **Drag & Drop Intuitif** : Interface fluide basée sur GrapesJS pour assembler des composants en quelques secondes.
- **Bibliothèque de Blocs** : Large choix de sections pré-conçues (Hero, Services, Témoignages, FAQ, Footers).
- **Responsive Mode** : Switcher intégré pour tester le rendu sur Desktop (100%), Tablette (600px) et Mobile (375px).
- **Custom Block Creator** : Interface permettant aux utilisateurs avancés de créer leurs propres blocs en HTML/CSS et de les sauvegarder dans leur bibliothèque personnelle.

### 📁 Gestion de Projets
- **Sauvegarde Serveur** : Les projets sont enregistrés sur le serveur avec une architecture de dossiers propre (`/projects/{nom-du-projet}/`).
- **Preview en temps réel** : Génération instantanée d'une page HTML réelle pour tester les interactions et le rendu final.
- **Autosave** : Sauvegarde automatique locale pour éviter toute perte de données en cas de rafraîchissement.

### 📦 Exportation et Déploiement
- **Export ZIP** : Téléchargement d'une archive complète prête pour la production.
- **Export HTML/JSON** : Récupération du code source ou de la configuration brute pour une réutilisation ultérieure.

---

## 🛠️ Stack Technique

### Frontend
- **Moteur** : [GrapesJS](https://grapesjs.com/) (Framework de création web open-source).
- **Logique** : Vanilla JavaScript (ES6 Modules).
- **Style** : CSS3 moderne (Variables, Flexbox, Grid) avec une interface "Dark Mode" premium.
- **Utilitaires** : 
  - `JSZip` : Pour la génération d'archives.
  - `FileSaver.js` : Pour la gestion des téléchargements.
  - `FontAwesome 6` : Pour l'iconographie.

### Backend
- **Serveur** : Node.js (utilisant uniquement les modules natifs `http` et `fs` pour une légèreté maximale).
- **API** : REST API pour la gestion des fichiers et la persistance des projets sur le disque.

---

## 📁 Structure du Projet

```text
.
├── assets/             # Images et ressources partagées
├── blocks/             # Définition des blocs GrapesJS (JS/HTML)
├── css/                # Styles de l'interface du builder
├── js/                 # Logique applicative (app.js, storage.js, export.js)
├── projects/           # Dossier de stockage des projets générés (automatique)
├── index.html          # Entrée principale du builder
├── server.js           # Serveur Node.js (API & Fichiers statiques)
└── package.json        # Dépendances et scripts
