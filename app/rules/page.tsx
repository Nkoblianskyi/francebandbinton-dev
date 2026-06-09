import Image from 'next/image'

export const metadata = {
  title: 'Règles du Jeu — Volley-ball',
  description: 'Les règles officielles du volley-ball : terrain, équipe, déroulement du match, fautes et disciplines (salle et plage).',
}

const sections = [
  {
    num: '01',
    title: 'Le terrain et les installations',
    items: [
      { label: 'Dimensions du terrain', value: '18 × 9 mètres, divisé en deux zones égales' },
      { label: 'Hauteur du filet (hommes)', value: '2,43 m au centre' },
      { label: 'Hauteur du filet (femmes)', value: '2,24 m au centre' },
      { label: 'Zone de service', value: 'Zone derrière la ligne de fond, largeur 9 m' },
      { label: 'Ligne d'attaque', value: 'Tracée à 3 m du filet, séparant avant et arrière' },
    ],
  },
  {
    num: '02',
    title: 'La composition des équipes',
    items: [
      { label: 'Joueurs sur le terrain', value: '6 par équipe simultanément' },
      { label: 'Roster maximum', value: '12 joueurs par match' },
      { label: 'Libero', value: '1 libero spécialisé en défense, maillot distinctif' },
      { label: 'Capitaine', value: 'Désigné par le coach, interlocuteur des arbitres' },
      { label: 'Remplaçants', value: '6 remplacements par set (hors libero)' },
    ],
  },
  {
    num: '03',
    title: 'Déroulement du match',
    items: [
      { label: 'Format gagnant', value: '3 sets gagnants sur 5' },
      { label: 'Points par set', value: '25 points (avec 2 points d'écart minimum)' },
      { label: 'Tie-break (5e set)', value: '15 points (avec 2 points d'écart)' },
      { label: 'Rotations', value: 'Dans le sens des aiguilles d'une montre après chaque changement de service' },
      { label: 'Temps-morts', value: '2 par set par équipe (30 secondes chacun)' },
    ],
  },
  {
    num: '04',
    title: 'Le jeu en cours',
    items: [
      { label: 'Touches par équipe', value: '3 maximum avant de renvoyer la balle (plus le contact du contre)' },
      { label: 'Touche consécutive', value: 'Interdit sauf au contre (deux joueurs peuvent toucher en simultané)' },
      { label: 'Balle en jeu', value: 'Depuis le service jusqu'à la faute ou au point' },
      { label: 'Zone des 3 m', value: 'Un joueur arrière ne peut pas attaquer au-dessus du bord supérieur du filet depuis cette zone' },
    ],
  },
  {
    num: '05',
    title: 'Les fautes courantes',
    items: [
      { label: 'Balle tenue', value: 'Balle portée, accompagnée ou retenue — faute immédiate' },
      { label: 'Double touche', value: 'Un même joueur touche la balle deux fois consécutivement (sauf au contre)' },
      { label: 'Filet', value: 'Contact avec le filet lors d'une action de jeu (hors cheveux, vêtements légers)' },
      { label: 'Pied de ligne', value: 'Lors du service, le pied du serveur touche ou franchit la ligne de fond' },
      { label: 'Pénétration', value: 'Franchissement du plan vertical du filet lors d'un contre, gênant l'adversaire' },
    ],
  },
]

const disciplines = [
  {
    title: 'Volley-ball en salle',
    desc: "Format classique à 6 contre 6. Terrain intérieur, rotations obligatoires, libero autorisé. Format utilisé dans tous les championnats officiels nationaux et internationaux.",
    specs: ['6 joueurs de champ', '3 sets gagnants sur 5', 'Libero autorisé', 'Remplacements limités'],
  },
  {
    title: 'Volley-ball de plage',
    desc: "Discipline olympique à 2 contre 2 sur sable. Pas de libero ni de rotations imposées. Sets en 21 points, tie-break à 15. Exigences physiques accrues par le terrain.",
    specs: ['2 joueurs par équipe', 'Sets en 21 points', 'Pas de libero', 'Communication gestuelle obligatoire'],
  },
  {
    title: 'Volley-ball assis',
    desc: "Discipline paralympique : les joueurs restent assis sur le terrain. Le filet est plus bas (1,15 m / 1,05 m) et les règles adaptées pour favoriser l'inclusion.",
    specs: ['Filet plus bas', 'Joueurs assis', 'Ballon réglementaire standard', 'Catégories masculines et féminines'],
  },
]

export default function RulesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-64 overflow-hidden bg-secondary">
        <Image
          src="/images/rules.png"
          alt="Terrain de volley-ball"
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
              Les règles officielles du volley-ball
            </h1>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-lg leading-relaxed text-muted-foreground border-l-4 border-primary pl-5 italic">
          Le volley-ball est régi par des règles précises établies par la Fédération internationale (FIVB). Comprendre ces règles est essentiel pour jouer correctement, arbitrer ou simplement apprécier le jeu en spectateur.
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
            Les variantes du volley-ball
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
