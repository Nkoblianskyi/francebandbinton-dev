import Image from 'next/image'

export const metadata = {
  title: 'Technique & Entraînement — Volley-ball',
  description: "Conseils techniques, plans d'entraînement, exercices et tactiques pour progresser au volley-ball à tous les niveaux.",
}

const techniques = [
  {
    id: '01',
    title: 'La réception',
    category: 'Fondamentaux',
    body: [
      "La réception est le point de départ de toute offensive. Pieds écartés, genoux fléchis, poids sur l'avant du pied : cette posture de base garantit une plateforme stable.",
      "Les avant-bras forment une surface plane en croisant les poignets. La force vient des jambes, pas des bras. Regarder le service du serveur jusqu'au dernier instant pour anticiper la trajectoire.",
      "Exercice clé : réceptions en série sur services lancés à la main, en ciblant des zones précises au sol. Augmenter progressivement la puissance et varier les angles.",
    ],
  },
  {
    id: '02',
    title: 'La passe haute',
    category: 'Fondamentaux',
    body: [
      "La passe haute (manchette inversée ou passe de doigts) place la balle idéalement pour l'attaque. Les mains forment une coupe au-dessus du front, pouces et index à 45°.",
      "Le contact se fait avec les deux premières phalanges des doigts, simultanément. Le joueur se place sous la balle, les coudes légèrement écartés, et accompagne la balle vers la cible.",
      "Exercice clé : passes contre un mur à hauteur variable, puis passes à un partenaire en déplacement latéral.",
    ],
  },
  {
    id: '03',
    title: 'Le service',
    category: 'Mise en jeu',
    body: [
      "Trois types de service sont couramment utilisés : le service par en bas (débutants), le service flottant (imprévisible) et le service sauté puissant (compétition).",
      "Pour le service flottant : lancé de balle à hauteur d'épaule, frappe sèche au centre de la balle sans claquement de poignet. L'absence de rotation crée une trajectoire instable.",
      "Exercice clé : service par séries de 10 en visant des zones délimitées, en alternant puissance et précision.",
    ],
  },
  {
    id: '04',
    title: 'Le smash',
    category: 'Attaque',
    body: [
      "Le smash requiert une course d'élan de 3 à 4 pas, une impulsion bipodale et une frappe au sommet du saut, le bras tendu, poignet claquant vers l'avant.",
      "L'arme du bras se fait derrière la tête, coude haut. La frappe se produit au point le plus haut possible. Varier les angles (diagonale, ligne, amorti) pour déstabiliser la défense.",
      "Exercice clé : smashes sur passes lancées au filet, en alternant zones cibles. Travailler l'impulsion seule (sauts répétés) pour développer la détente verticale.",
    ],
  },
  {
    id: '05',
    title: 'Le contre',
    category: 'Défense',
    body: [
      "Le contre (bloc) est la première ligne défensive au filet. Deux ou trois joueurs sautent simultanément, les mains passant au-dessus du filet, les doigts écartés et orientés vers l'intérieur du terrain adverse.",
      "Anticiper la prise de course de l'attaquant adverse est essentiel. Le placement latéral sur le filet doit suivre le déplacement du passeur adverse.",
      "Exercice clé : contre sur attaques simulées par un entraîneur sur l'autre côté du filet, en travaillant le timing du saut et l'orientation des mains.",
    ],
  },
  {
    id: '06',
    title: 'La défense au sol',
    category: 'Défense',
    body: [
      "La défense basse (plongeon, manchette en déplacement) permet de sauver des balles difficiles. La position basse avec les genoux fléchis est le point de départ.",
      "Le plongeon implique de glisser sur le ventre ou les avant-bras en tendant les bras vers la balle. Les genouillères sont indispensables. Ne pas craindre le sol.",
      "Exercice clé : balles lancées à courte distance dans des zones difficiles, joueur en position basse réactif. Augmenter progressivement la rapidité des enchaînements.",
    ],
  },
]

const weeklyPlan = [
  { day: 'Lundi', focus: 'Physique général', detail: 'Renforcement musculaire, gainage, travail cardio-vasculaire' },
  { day: 'Mardi', focus: 'Technique individuelle', detail: 'Réception, passe, service — répétitions en solo ou duo' },
  { day: 'Mercredi', focus: 'Repos actif', detail: 'Étirements, mobilité articulaire, natation légère' },
  { day: 'Jeudi', focus: 'Tactique collective', detail: 'Combinaisons offensives, couvertures, jeu en système' },
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
          alt="Technique de volley-ball"
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
          La technique au volley-ball est une construction progressive. Chaque geste s'apprend, se répète et se perfectionne. Cette page regroupe les fondamentaux, conseils avancés et plans d'entraînement structurés.
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
            { title: 'Entraîner les deux côtés', body: "Travailler la coordination des deux bras et des deux jambes améliore l'équilibre et augmente les options tactiques en situation de jeu." },
            { title: 'La récupération est du travail', body: "Sommeil, hydratation et étirements font partie de l'entraînement. Un corps récupéré apprend plus vite et s'adapte mieux aux charges." },
            { title: 'Objectifs progressifs', body: "Décomposer les apprentissages en micro-objectifs : maîtriser la réception avant le smash, servir régulièrement avant de chercher la puissance." },
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
