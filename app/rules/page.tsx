import Image from 'next/image'

export const metadata = {
  title: 'Règles du Jeu — Badminton',
  description: 'Les règles officielles du badminton : terrain, équipe, déroulement du match, fautes et disciplines (simple, double et para-badminton).',
}

const sections = [
  {
    num: '01',
    title: 'Le terrain et les installations',
    items: [
      { label: 'Dimensions du terrain (double)', value: '13,40 × 6,10 mètres, divisé en deux zones égales' },
      { label: 'Hauteur du filet (poteaux)', value: '1,55 m au-dessus du sol' },
      { label: 'Hauteur du filet (centre)', value: '1,524 m au-dessus du sol' },
      { label: 'Zone de service', value: 'Court de service délimité par les lignes latérales et la ligne courte de service' },
      { label: 'Ligne de service longue', value: 'À 0,76 m du filet en simple, ligne arrière en double' },
    ],
  },
  {
    num: '02',
    title: 'La composition des équipes',
    items: [
      { label: 'Simple', value: '1 joueur par équipe sur le terrain' },
      { label: 'Double', value: '2 joueurs par équipe sur le terrain' },
      { label: 'Double mixte', value: '1 homme et 1 femme par équipe' },
      { label: 'Capitaine', value: 'Désigné avant le match, interlocuteur des arbitres' },
      { label: 'Changements', value: 'Autorisés entre les manches et en cours de match (règles BWF)' },
    ],
  },
  {
    num: '03',
    title: 'Déroulement du match',
    items: [
      { label: 'Format gagnant', value: '2 manches gagnantes sur 3' },
      { label: 'Points par manche', value: "21 points (avec 2 points d'écart minimum)" },
      { label: 'Prolongation', value: "En cas d'égalité à 20-20, jeu jusqu'à 2 points d'écart (max 30 points)" },
      { label: 'Changement de côté', value: 'À la fin de chaque manche et quand un camp atteint 11 points en 3e manche' },
      { label: 'Temps-morts', value: '1 minute entre les manches, pause technique à 11 points en 3e manche' },
    ],
  },
  {
    num: '04',
    title: 'Le jeu en cours',
    items: [
      { label: 'Service', value: 'Le volant doit être frappé en dessous de la taille, diagonalement vers le camp adverse' },
      { label: 'Échange', value: "Le volant peut être frappé au-dessus du filet tant qu'il ne touche pas le sol" },
      { label: 'Volant en jeu', value: "Depuis le service jusqu'à la faute ou au point marqué" },
      { label: 'Zone de frappe', value: 'Le volant peut être frappé de n\'importe quelle hauteur une fois le service effectué' },
    ],
  },
  {
    num: '05',
    title: 'Les fautes courantes',
    items: [
      { label: 'Volant hors limites', value: 'Le volant tombe en dehors des lignes du terrain — point pour l\'adversaire' },
      { label: 'Filet', value: "Le volant ou la raquette touche le filet lors d'un échange — faute" },
      { label: 'Double frappe', value: 'Un joueur touche le volant deux fois de suite — faute immédiate' },
      { label: 'Service incorrect', value: 'Service au-dessus de la taille, hors zone ou pas en diagonale — faute' },
      { label: 'Obstruction', value: "Gêner délibérément l'adversaire lors d'un coup — faute" },
    ],
  },
]

const disciplines = [
  {
    title: 'Badminton en simple',
    desc: "Format classique un contre un. Terrain plus étroit (lignes latérales intérieures). Exige endurance, vitesse et précision technique sur toute la surface.",
    specs: ['1 joueur par camp', '2 manches gagnantes sur 3', 'Terrain 5,18 × 13,40 m', 'Service en diagonale'],
  },
  {
    title: 'Badminton en double',
    desc: "Deux contre deux sur le terrain complet. Rotation de service entre partenaires, communication essentielle et jeu tactique au filet et au fond de court.",
    specs: ['2 joueurs par camp', 'Manches à 21 points', 'Terrain 6,10 × 13,40 m', 'Rotation de service obligatoire'],
  },
  {
    title: 'Para-badminton',
    desc: "Discipline paralympique avec des classes selon le type de handicap (fauteuil, debout, déficience intellectuelle). Règles adaptées pour favoriser l'inclusion.",
    specs: ['Classes WH, SL, SU, SH', 'Terrain et filet adaptés', 'Volant réglementaire', 'Catégories hommes et femmes'],
  },
]

export default function RulesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-64 overflow-hidden bg-secondary">
        <Image
          src="/images/rules.png"
          alt="Terrain de badminton"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-14 w-full">
            <p className="section-label mb-3">Règles &amp; disciplines</p>
            <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] font-black leading-tight tracking-tight text-foreground text-balance">
              Les règles officielles du badminton
            </h1>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-lg leading-relaxed text-muted-foreground border-l-4 border-primary pl-5 italic">
          Le badminton est régi par des règles précises établies par la Badminton World Federation (BWF). Comprendre ces règles est essentiel pour jouer correctement, arbitrer ou simplement apprécier le jeu en spectateur.
        </p>
      </div>

      {/* Rules sections */}
      <div className="max-w-5xl mx-auto px-6 pb-20 flex flex-col gap-16">
        {sections.map((sec) => (
          <div key={sec.num}>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-display text-5xl font-black text-border leading-none">{sec.num}</span>
              <h2 className="font-display text-2xl font-bold text-foreground">{sec.title}</h2>
            </div>
            <div className="flex flex-col gap-0 border border-border">
              {sec.items.map((item, i) => (
                <div key={item.label} className={`grid grid-cols-2 gap-4 px-6 py-4 ${i < sec.items.length - 1 ? 'border-b border-border' : ''}`}>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Disciplines */}
      <div className="bg-secondary border-t border-b border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Disciplines</p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-tight tracking-tight text-foreground mb-12 text-balance">
            Les variantes du badminton
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {disciplines.map((d) => (
              <div key={d.title} className="bg-secondary p-8 flex flex-col gap-4">
                <h3 className="font-display text-xl font-bold text-foreground">{d.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">{d.desc}</p>
                <ul className="flex flex-col gap-2 mt-2">
                  {d.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
