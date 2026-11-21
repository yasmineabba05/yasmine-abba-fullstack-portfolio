// Projets affichés dans la page Projets. Images : public/images/projects/<id>.png (+ <id>-2.png optionnel)
export const projects = [
  { id: 'arf', name: 'ARF — All Riding Family', short: 'ARF', cat: 'web', tag: ['Website', 'Site web'], tech: null,
    desc: ['A web platform dedicated to a motorcycle community, its activities, events and members.', 'Une plateforme web dédiée à une communauté de motards, ses activités, ses événements et ses membres.'] },
  { id: 'ton-orthophoniste', name: 'Ton Orthophoniste', short: 'TON', cat: 'web', tag: ['Website', 'Site web'], tech: 'React.js · PHP · MySQL',
    desc: ['A professional website for a speech therapy practice, featuring information about services, appointments and patient-oriented content.', "Un site professionnel pour un cabinet d'orthophonie : présentation des services, rendez-vous et contenus destinés aux patients."] },
  { id: 'task-tracker', name: 'Your Task Tracker', short: 'YOU', cat: 'app', tag: ['Web app', 'Application web'], tech: null,
    desc: ['A web application designed to organize tasks, manage daily activities and track productivity.', 'Une application web pour organiser les tâches, gérer les activités quotidiennes et suivre la productivité.'] },
  { id: 'm5dlr', name: 'M5DLR', short: 'M5D', cat: 'shop', tag: ['E-commerce', 'E-commerce'], tech: null,
    desc: ['An e-commerce web development project.', 'Un projet de développement web e-commerce.'] },
]
export const filters = [['all', 'All', 'Tous'], ['web', 'Websites', 'Sites web'], ['app', 'Web apps', 'Applications'], ['shop', 'E-commerce', 'E-commerce']]
