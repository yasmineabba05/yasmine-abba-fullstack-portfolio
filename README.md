# Yasmine Abba — Portfolio

Portfolio React (Vite) : thème sombre/clair, FR/EN, animations, 7 pages (Accueil, À propos, Compétences, Projets, Expérience, Formation, Services).

## Lancer en local
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # génère dist/
npm run preview    # prévisualise dist/
```

## Mettre sur GitHub
```bash
git init
git add .
git commit -m "Portfolio Yasmine Abba"
git branch -M main
git remote add origin https://github.com/yasmineabba05/yasmine-abba-portfolio.git
git push -u origin main
```

## Héberger sur Vercel (le plus simple)
1. Va sur vercel.com → **Add New… → Project** → importe le dépôt GitHub.
2. Vercel détecte **Vite** tout seul (Build : `npm run build`, Output : `dist`). Clique sur **Deploy**.
3. Chaque `git push` redéploie automatiquement.

Le site utilise un routage en `#/` (HashRouter) : aucun réglage serveur n'est nécessaire, ni sur Vercel ni sur GitHub Pages.

## Structure
- `public/images/profile.png` — ta photo (Hero)
- `public/images/projects/*.png` — captures des projets (`<id>.png`, + `<id>-2.png` optionnel pour la galerie)
- `public/images/icons/favicon.svg` + `public/favicon.ico` — favicon
- `public/cv/` — dossier prévu pour `Yasmine_Abba_CV.pdf` (le bouton CV a été retiré du site)
- `src/components/` — Navbar, Footer, Button, ProjectCard, SkillCard, SectionTitle, SocialLinks
- `src/sections/` — une section/page par fichier (Hero, About, Services, Skills, Projects, Experience, Education, Contact*)
- `src/data/` — projects.js, skills.js, services.js, translations.js (textes FR/EN)
- `src/hooks/` — useTheme.js (thème), useLang.jsx (langue)
- `src/styles/` — variables.css (palette), global.css, animations.css

\* `Contact.jsx` est présent mais non affiché (la page Contact a été retirée) ; les instructions pour la remettre sont en commentaire dans le fichier.

## À compléter
- Liens démo / GitHub et détails (objectifs, fonctionnalités, technologies) des projets : textes « À compléter » dans les fiches.
- Remplacer une image : garde le même nom de fichier dans `public/images/`.
