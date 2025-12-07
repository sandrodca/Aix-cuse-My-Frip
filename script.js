// =========================
// Contenus des pages
// (copié tel quel depuis ton JS — ne modifie pas le contenu ici si tu veux garder les textes)
// =========================
const pages = {
  home: {
    title: 'Accueil',
    subtitle: "Bienvenue à la ressourcerie de l'IUT d'Aix",
    body: `
      <p class="lead">Bienvenue — découvrez notre ressourcerie universitaire : collecte, réparation, réemploi et ateliers étudiants.</p>
      <div style="display:flex;gap:18px;flex-wrap:wrap">
        <div style="min-width:240px;flex:1">
          <h3>Notre mission</h3>
          <p>Réduire le gaspillage, donner une seconde vie aux objets, et former les étudiant·e·s aux techniques de réutilisation.</p>
        </div>
        <div style="width:320px;flex:0 0 320px">
          <h3>Horaires rapides</h3>
          <div class="hours">
            <strong>Lundi — Vendredi</strong><br>9:00 — 17:00<br><br>
            <strong>Collecte</strong><br>Mercredi 14:00 — 17:00
          </div>
        </div>
      </div>
      
    `
  },
  about: {
  title: 'Qui sommes‑nous',
  subtitle: 'Une ressourcerie universitaire, engagée & solidaire',
  body: `

    <h3>Notre origine</h3>
    <p>La Ressourcerie de l’IUT d’Aix est née d’un projet étudiant : à l’origine, elle a été imaginée dans le cadre d’un cours de communication du département Techniques de Commercialisation (TC) de l’IUT d’Aix‑Marseille. Ce département, qui propose notamment le Bachelor Universitaire de Technologie (BUT) Techniques de Commercialisation, prépare les étudiants aux métiers du marketing, de la vente, de la relation client, de la distribution et de la communication.</p>

    <p>Ce qui n’était au début qu’un simple projet pédagogique s’est transformé, grâce au soutien de professeurs, du chef de département et de plusieurs étudiant·e·s motivé·e·s, en une véritable structure : la Ressourcerie. Nous ne sommes pas seulement une initiative de la filière TC la ressourcerie est ouverte à tous les étudiants de l’IUT, ainsi qu’au personnel enseignant et administratif.</p>

    <h3>Notre mission & nos valeurs</h3>
    <p>Nous sommes convaincus que l’économie circulaire peut changer les choses à l’échelle locale. Notre ressourcerie ne vise pas seulement à réparer ou donner des objets : elle est un lieu de partage, de solidarité et d’éducation. Nous recueillons des objets, des vêtements, des fournitures ou du matériel étudiant, et nous donnons à ceux qui en ont besoin.</p>

    <p>Nous voulons aider les personnes qui n’ont pas forcément les moyens d’acheter des objets neufs : que ce soit des habits, du matériel universitaire, ou des petits meubles, notre ressourcerie donne une seconde vie à ces ressources tout en favorisant un accès plus juste. Si vous souhaitez vous débarrasser de vos vêtements ou de vos affaires, donner à la ressourcerie, c’est faire un geste utile : cela peut aider des étudiants dans le besoin, contribuer à réduire le gaspillage, et encourager la solidarité.</p>

    <p>Par ailleurs, nous promouvons l’écologie : en réutilisant et réparant des objets, nous réduisons notre empreinte environnementale. L’économie circulaire est au cœur de notre démarche : donner, réparer, réutiliser = moins de déchets, moins de consommation de ressources neuves.</p>

    <h3>Pourquoi “ressourcerie” à l’IUT ?</h3>
    <p>Nous croyons que l’éducation ne s’arrête pas aux cours : créer une ressourcerie au sein de l’IUT, c’est aussi transmettre des valeurs sociales et éthiques. En tant qu’étudiants du département TC, nous avons étudié la communication, le marketing, le commerce ; mais nous avons voulu aller plus loin : mettre ces compétences au service d’un projet solidaire.</p>

    <p>Cette initiative montre aussi que l’on peut s’habiller, étudier, et vivre avec des ressources “de seconde main” tout en gardant dignité et style. Non, ce n’est pas seulement “stylé”, c’est responsable : donner ses vêtements, ce n’est pas jeter, c’est partager. Et pour ceux qui reçoivent, c’est l’opportunité de s’équiper sans forcément dépenser.</p>

    <h3>Qui sommes-nous, concrètement ?</h3>
    <ul>
      <li>Des étudiant·e·s du département Techniques de Commercialisation de l’IUT d’Aix‑Marseille</li>
      <li>Des enseignant·e·s convaincu·e·s par l’économie sociale et solidaire</li>
      <li>Des bénévoles, partenaires, et membres de l’IUT qui croient à une consommation plus responsable</li>
      <li>Un point d’ancrage écologique : on ne veut pas juste réparer, on veut sensibiliser</li>
    </ul>

    <h3>Notre impact</h3>
    <p>Depuis sa création, la ressourcerie a déjà permis de redistribuer de nombreux objets : vêtements, matériel étudiant, petits meubles, etc. Chaque don compte et chaque utilisateur compte : qu’il s’agisse d’un·e étudiant·e en difficulté ou d’un professeur qui souhaite donner, tout le monde y a sa place.</p>

    <p>Nous souhaitons grandir : augmenter le nombre de dons, proposer des ateliers de réparation (couture, électro, bois…), et peut‑être, dans le futur, étendre notre modèle à d’autres campus ou départements. L’objectif : rendre l’IUT plus solidaire, plus écologique, et plus humain.</p>

    <h3>Pourquoi faire ce projet maintenant ?</h3>
    <p>Nous vivons une époque où les enjeux environnementaux sont plus pressants que jamais. En parallèle, le coût de la vie étudiante ne cesse d’augmenter : ce projet est donc plus pertinent que jamais. C’est pour cela que nous avons décidé de transformer un projet de cours en une véritable ressourcerie, utile à tous, et pas seulement aux quelques “écolos”.</p>

    <p>En soutenant la ressourcerie, vous soutenez une initiative locale, responsable, et solidaire. Vous contribuez à créer un espace où le don n’est pas un simple mot, mais une action concrète, accessible à tous.</p>
  `
  },
    hours: {
    title: 'Horaires',
    subtitle: 'Quand nous trouver',
    body: `
      <h3>Horaires détaillés de la Ressourcerie</h3>
      <p>Voici nos horaires d'ouverture pour chaque jour de la semaine :</p>
      <ul>
        <li><strong>Lundi :</strong> 9h00 — 18h00 (pause 12h00 — 14h00)</li>
        <li><strong>Mardi :</strong> 9h00 — 18h00 (pause 12h00 — 14h00)</li>
        <li><strong>Mercredi :</strong> 9h00 — 18h00 (pause 12h00 — 14h00)</li>
        <li><strong>Jeudi :</strong> 9h00 — 18h00 (pause 12h00 — 14h00)</li>
        <li><strong>Vendredi :</strong> 8h00 — 12h00</li>
      </ul>

      <h3>Point de collecte / dépôt</h3>
      <p>Les créneaux pour déposer ou récupérer du matériel sont :</p>
      <ul>
        <li><strong>Mercredi :</strong> 14h00 — 17h00</li>
      </ul>

      <h3>Remarques</h3>
      <p>Les horaires peuvent varier selon les périodes universitaires ou événements spéciaux. Nous recommandons de vérifier notre site ou de nous contacter pour confirmation.</p>
    `
  },
  news: {
    title:'Actualités',
    subtitle:'Ce qui se passe',
    body: `
      <p class="lead">Les dernières nouvelles et événements.</p>
      <ul>
        <li><strong>12/11/2025</strong> — Lancement de la campagne de collecte informatique.</li>
        <li><strong>05/10/2025</strong> — Atelier réparation vélo animé par des étudiants.</li>
      </ul>
    `
  },
  
  contact: {
  title: 'Contact',
  subtitle: 'Écrire ou venir',
  body: `
    <h3>Nous contacter</h3>
    <p>Pour déposer des objets, faire un don, ou participer à nos ateliers, n'hésitez pas à nous contacter :</p>

    <div class="grid">
      <div>
        <h4>Adresse</h4>
        <p>IUT d'Aix, Campus – Exemple de rue, 13090 Aix-en-Provence</p>

        <h4>Email</h4>
        <p><a href="mailto:Aix'cusemyfrip@univ-amu.fr">Aix'cusemyfrip@univ-amu.fr</a></p>

        <h4>Téléphone</h4>
        <p>+33 4 12 34 56 78</p>
      </div>

      <aside>
        <h4>Prise de rendez-vous</h4>
        <p>Pour certaines demandes spécifiques, merci d'envoyer un email afin de convenir d'un créneau.</p>

        <h4>Horaires de contact</h4>
        <p>Lundi à Jeudi : 9h00 — 17h00<br>Vendredi : 8h00 — 12h00</p>
      </aside>
    </div>
  `
},
  partners: {
    title: 'Nos partenaires',
    subtitle: 'Les acteurs qui nous soutiennent',
    body: `
      <p class="lead">La ressourcerie de l'IUT d'Aix collabore avec plusieurs acteurs locaux et institutionnels.</p>
      <div class="grid">
        <div>
          <h4>Partenaires institutionnels</h4>
          <ul>
            <li>Université d’Aix-Marseille</li>
            <li>Ville d’Aix-en-Provence</li>
            <li>Communauté du Pays d’Aix</li>
          </ul>
          <h4>Partenaires associatifs</h4>
          <ul>
            <li>Emmaüs</li>
            <li>La Recyclerie du Pays d’Aix</li>
            <li>Atelier Vélo Partagé</li>
          </ul>
        </div>
        <aside>
          <h4>Partenaires entreprises</h4>
          <ul>
            <li>Décathlon Aix — dons de matériel</li>
            <li>FNAC Aix — recyclage informatique</li>
            <li>Boulanger — dons électroménager</li>
          </ul>
        </aside>
      </div>
    `
  },
  legal: {
  title: 'Mentions légales & confidentialité',
  subtitle: 'Informations légales de la Ressourcerie',
  body: `
    <h3>Mentions légales</h3>
    <p>Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, nous informons les utilisateurs du site de l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>

    <h4>Éditeur du site</h4>
    <p>Ressourcerie de l'IUT d'Aix<br>
       Département TC, IUT d'Aix-Marseille Université<br>
       Adresse : Campus – Exemple de rue, 13090 Aix-en-Provence<br>
       Responsable de la publication : M./Mme X<br>
       Contact : <a href="mailto:Aix'cusemyfrip@univ-amu.fr">Aix'cusemyfrip@univ-amu.fr</a>
    </p>

    <h4>Hébergement</h4>
    <p>Le site est hébergé en local sur les serveurs de l'IUT d'Aix. Aucun hébergement externe n’est utilisé.</p>

    <h3>Propriété intellectuelle</h3>
    <p>Tous les éléments présents sur ce site, incluant textes, images, logos, et structure, sont protégés par le droit de la propriété intellectuelle. Toute reproduction, distribution ou modification sans autorisation est interdite.</p>

    <h3>Protection des données personnelles</h3>
    <p>Nous attachons une grande importance à la protection de vos données personnelles. Aucune donnée n’est collectée automatiquement via ce site à l’exception des informations que vous nous fournissez volontairement (par exemple via un formulaire de contact si ajouté).</p>
    
    <h4>Données collectées</h4>
    <ul>
      <li>Nom et prénom (si formulaire contact)</li>
      <li>Adresse email</li>
      <li>Message envoyé via le formulaire</li>
    </ul>

    <h4>Utilisation des données</h4>
    <p>Les données sont utilisées exclusivement pour répondre aux demandes et ne sont jamais transmises à des tiers. Elles sont conservées uniquement le temps nécessaire au traitement de la demande.</p>

    <h4>Droits des utilisateurs</h4>
    <p>Conformément à la réglementation RGPD, vous disposez du droit de demander la rectification ou la suppression de vos données personnelles, ainsi que de limiter leur traitement.</p>
    <p>Pour exercer vos droits, merci de nous contacter à l’adresse email : <a href="mailto:Aix'cusemyfrip@univ-amu.fr">Aix'cusemyfrip@univ-amu.fr</a></p>

    <h4>Cookies</h4>
    <p>Ce site n’utilise pas de cookies sauf pour le fonctionnement technique et l’affichage correct des pages. Aucun suivi publicitaire ou analytique n’est mis en place.</p>

    <h4>Modifications</h4>
    <p>Les présentes mentions légales peuvent être modifiées à tout moment pour refléter les évolutions du site ou de la législation.</p>

    <footer class="small">Dernière mise à jour : Novembre 2025</footer>
  `
},

  find: {
  title: 'Nous trouver',
  subtitle: 'Localisez la ressourcerie et les points de collecte',
  body: `
      <p class="lead">Retrouvez notre ressourcerie et les différents points de collecte sur cette carte interactive.</p>

    <div class="video-wrapper">
       <video 
                    src="video.mov" 
                    autoplay 
                    muted 
                    loop 
                    playsinline>
        </video>
    </div>
    `
}
};

// =========================
// DOM references
// =========================
const sidebar = document.getElementById('sidebar');
const toggle = document.getElementById('toggle');
const menuInner = document.getElementById('menuInner');
const pageTitle = document.getElementById('pageTitle');
const pageSubtitle = document.getElementById('pageSubtitle');
const pageBody = document.getElementById('pageBody');
const homeBtn = document.getElementById('homeBtn');

// =========================
// Fonctions
// =========================

// Met à jour le lien actif
function setActive(pageKey){
  const links = menuInner.querySelectorAll('a');
  links.forEach(a=>a.classList.toggle('active', a.dataset.page===pageKey));
}

// Charge une page
function render(pageKey){
  const p = pages[pageKey]||pages.home;
  pageTitle.textContent = p.title;
  pageSubtitle.textContent = p.subtitle;
  pageBody.innerHTML = p.body;
  if(pageKey === 'find') {
    // Carte Leaflet
    const map = L.map('map').setView([43.526, 5.448], 15); // coordonnées Aix
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Marker principale
    L.marker([43.526, 5.448]).addTo(map)
      .bindPopup('<b>Ressourcerie IUT d\'Aix</b><br>Point principal de collecte')
      .openPopup();

    // Points supplémentaires
    const points = [
        {lat: 43.527, lng: 5.450, name: 'Point collecte textile'},
        {lat: 43.525, lng: 5.447, name: 'Point collecte mobilier'}
    ];
    points.forEach(p => {
        L.marker([p.lat, p.lng]).addTo(map)
          .bindPopup(`<b>${p.name}</b>`);
    });
}
  setActive(pageKey);
  // collapse sidebar on mobile
  if(window.innerWidth < 900){
    sidebar.classList.remove('expanded');
    sidebar.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-pressed','false');
  }
}

// =========================
// Événements
// =========================

// Menu clicks
menuInner.addEventListener('click', e=>{
  const a = e.target.closest('a');
  if(!a) return;
  e.preventDefault();
  const pageKey = a.dataset.page;
  render(pageKey);
});

// Toggle sidebar
toggle.addEventListener('click', ()=>{
  const isExpanded = sidebar.classList.toggle('expanded');
  sidebar.setAttribute('aria-expanded', isExpanded? 'true':'false');
  toggle.setAttribute('aria-pressed', isExpanded? 'true':'false');
});

// Home button : ramène à l'accueil
homeBtn.addEventListener('click', ()=>{
  render('home');
});
