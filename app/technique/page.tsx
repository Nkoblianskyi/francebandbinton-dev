import Image from 'next/image'

export const metadata = {
  title: 'Technique & Entraînement — Badminton',
  description: "Conseils techniques, plans d'entraînement, exercices et tactiques pour progresser au badminton à tous les niveaux.",
}

const techniques = [
  {
    id: '01',
    title: 'Le retour de service',
    category: 'Fondamentaux',
    body: [
      "Le retour de service est le point de départ de tout échange. Position basse, raquette devant le corps, poids sur l'avant des pieds : cette posture garantit une réaction rapide.",
      "Observer le geste du serveur pour anticiper la direction et la profondeur du volant. Le contact se fait devant le corps, avec un mouvement court et contrôlé.",
      "Exercice clé : retours en série sur services lancés à la main, en ciblant des zones précises du terrain. Augmenter progressivement la vitesse et varier les angles.",
    ],
  },
  {
    id: '02',
    title: 'Le clear',
    category: 'Fondamentaux',
    body: [
      "Le clear (balle haute) repousse l'adversaire au fond de court et permet de reprendre l'initiative. Le mouvement part de l'épaule, coude haut, raquette derrière la tête.",
      "Le contact se fait au point le plus haut possible, avec un mouvement de fouet du poignet. Le clear défensif est plus haut et plus profond ; l'offensif est plus plat et plus rapide.",
      "Exercice clé : clears contre un mur à hauteur variable, puis clears à un partenaire en déplacement latéral sur tout le terrain.",
    ],
  },
  {
    id: '03',
    title: 'Le service',
    category: 'Mise en jeu',
    body: [
      "Trois types de service sont couramment utilisés : le service court (débutants et tactique), le service long (pousser l'adversaire au fond) et le service sauté (compétition).",
      "Pour le service court : le volant est frappé en dessous de la taille, en diagonale, avec un geste contrôlé pour qu'il passe juste au-dessus du filet.",
      "Exercice clé : services par séries de 10 en visant des zones délimitées, en alternant court et long.",
    ],
  },
  {
    id: '04',
    title: 'Le smash',
    category: 'Attaque',
    body: [
      "Le smash est le coup le plus offensif du badminton. Saut vertical, bras tendu, contact au point le plus haut, poignet claquant vers le bas pour une trajectoire raide.",
      "L'armé se fait derrière la tête, coude haut. Varier les angles (croisé, long de ligne, amorti) pour déstabiliser la défense adverse.",
      "Exercice clé : smashes sur volants lancés au filet, en alternant zones cibles. Travailler le saut seul (sauts répétés) pour développer la détente verticale.",
    ],
  },
  {
    id: '05',
    title: 'Le jeu au filet',
    category: 'Tactique',
    body: [
      "Le jeu au filet (net play) est décisif en double et en simple. Position basse, raquette haute, réactions rapides pour intercepter les amortis adverses.",
      "Le lift, le kill au filet et le contre-amorti sont les coups clés. Anticiper le passage de l'adversaire au filet est essentiel pour choisir le bon coup.",
      "Exercice clé : échanges au filet à courte distance avec un partenaire, en travaillant la réactivité et la précision des touches.",
    ],
  },
  {
    id: '06',
    title: 'Les déplacements',
    category: 'Physique',
    body: [
      "Les déplacements en badminton combinent pas chassés, fentes et retours au centre. La position de base (split step) avant chaque coup du adversaire est fondamentale.",
      "Revenir au centre du terrain après chaque coup permet de couvrir toutes les directions. Les chaussures adaptées et une bonne condition physique sont indispensables.",
      "Exercice clé : courses en étoile autour du centre du terrain, partenaire lançant des volants dans les quatre coins. Augmenter progressivement la rapidité.",
    ],
  },
]

const weeklyPlan = [
  { day: 'Lundi', focus: 'Physique général', detail: 'Renforcement musculaire, gainage, travail cardio-vasculaire et agilité' },
  { day: 'Mardi', focus: 'Technique individuelle', detail: 'Service, clear, smash — répétitions en solo ou duo' },
  { day: 'Mercredi', focus: 'Repos actif', detail: 'Étirements, mobilité articulaire, natation légère' },
  { day: 'Jeudi', focus: 'Tactique collective', detail: 'Jeu au filet, rotations en double, combinaisons offensives' },
  { day: 'Vendredi', focus: 'Jeu en situation', detail: 'Matchs à thème, travail des transitions défense-attaque' },
  { day: 'Samedi', focus: 'Compétition ou sparring', detail: 'Match officiel ou jeu libre entre joueurs du club' },
  { day: 'Dimanche', focus: 'Récupération', detail: 'Repos complet ou activité douce, analyse mentale de la semaine' },
]

export default function TechniquePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-64 overflow-hidden">
        <Image
          src="/images/technique.png"
          alt="Technique de badminton"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-14 w-full">
            <p className="section-label mb-3">Technique &amp; Entraînement</p>
            <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] font-black leading-tight tracking-tight text-foreground text-balance">
              Maîtriser chaque geste
            </h1>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-lg leading-relaxed text-muted-foreground border-l-4 border-primary pl-5 italic">
          La technique au badminton est une construction progressive. Chaque geste s'apprend, se répète et se perfectionne. Cette page regroupe les fondamentaux, conseils avancés et plans d'entraînement structurés.
        </p>
      </div>

      {/* Techniques grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <p className="section-label mb-10">Gestes techniques</p>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {techniques.map((t) => (
            <div key={t.id} className="bg-background p-8 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-5xl font-black text-border leading-none">{t.id}</span>
                <span className="text-xs tracking-widest uppercase text-accent border border-accent/30 px-2 py-1">{t.category}</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">{t.title}</h2>
              <div className="flex flex-col gap-3">
                {t.body.map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted-foreground">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly plan */}
      <div className="bg-secondary border-t border-b border-border py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="section-label mb-4">Plan d'entraînement</p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-tight tracking-tight text-foreground mb-12 text-balance">
            Programme hebdomadaire type
          </h2>
          <div className="flex flex-col gap-0">
            {weeklyPlan.map((day, i) => (
              <div key={day.day} className={`grid grid-cols-12 gap-6 py-5 ${i < weeklyPlan.length - 1 ? 'border-b border-border' : ''}`}>
                <div className="col-span-3 md:col-span-2">
                  <p className="font-display text-base font-bold text-foreground">{day.day}</p>
                </div>
                <div className="col-span-9 md:col-span-3">
                  <p className="font-semibold text-sm text-primary">{day.focus}</p>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <p className="text-sm leading-relaxed text-muted-foreground">{day.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="section-label mb-8">Conseils d'entraînement</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Constance avant intensité', body: "3 sessions modérées par semaine progressent plus vite qu'une session intensive hebdomadaire. La régularité construit les automatismes." },
            { title: 'La vidéo comme outil', body: "Filmer ses gestes techniques permet de percevoir des défauts invisibles en action. Un regard extérieur ou une analyse vidéo accélère la correction." },
            { title: 'Entraîner les deux côtés', body: "Travailler le revers autant que le coup droit améliore l'équilibre et augmente les options tactiques en situation de jeu." },
            { title: 'La récupération est du travail', body: "Sommeil, hydratation et étirements font partie de l'entraînement. Un corps récupéré apprend plus vite et s'adapte mieux aux charges." },
            { title: 'Objectifs progressifs', body: "Décomposer les apprentissages en micro-objectifs : maîtriser le service avant le smash, jouer régulièrement avant de chercher la puissance." },
            { title: 'Jouer avec des meilleurs', body: "S'entraîner ou jouer contre des joueurs plus expérimentés accélère la progression. Le niveau de l'environnement tire le joueur vers le haut." },
          ].map((tip) => (
            <div key={tip.title} className="border-t-2 border-primary pt-5">
              <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{tip.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
