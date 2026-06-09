import Image from 'next/image'

export const metadata = {
  title: 'Histoire du volley-ball en France',
  description: "Retracez l'histoire du volley-ball en France : des débuts au XXe siècle à l'essor contemporain du sport au niveau national et international.",
}

const timeline = [
  {
    period: '1895',
    title: "Naissance d'un sport",
    body: "William G. Morgan invente le «mintonette» aux États-Unis. Le sport traversera l'Atlantique peu après, portés par les réseaux sportifs associatifs et les militaires.",
  },
  {
    period: '1920–1930',
    title: 'Premières pratiques en France',
    body: "Le volley-ball fait son apparition en France à travers les associations de jeunesse, les lycées et les cercles sportifs urbains. Strasbourg, Paris et Lyon constituent les premiers foyers de pratique organisée.",
  },
  {
    period: '1936',
    title: 'Création de la FFVB',
    body: "La Fédération française de volley-ball (FFVB) est fondée, formalisant un mouvement déjà bien implanté. Elle adhère rapidement à la Fédération internationale (FIVB), constituée en 1947.",
  },
  {
    period: '1950–1960',
    title: 'Structuration et développement',
    body: "Le volley-ball intègre les programmes d'éducation physique scolaire et universitaire. Des championnats régionaux se structurent, et le modèle du club sportif associatif se généralise sur l'ensemble du territoire.",
  },
  {
    period: '1970–1980',
    title: "L'ère des clubs",
    body: "Émergence de clubs majeurs capables de concurrencer les meilleures équipes européennes. L'entraînement se professionnalise progressivement, et la formation des jeunes joueurs devient une priorité fédérale.",
  },
  {
    period: '1990–2000',
    title: 'Montée en puissance internationale',
    body: "Les équipes nationales françaises multiplient les présences dans les compétitions continentales et mondiales. Le volley féminin connaît un essor remarquable. L'introduction du libero en 1998 modernise le jeu.",
  },
  {
    period: '2000–2010',
    title: "Infrastructures et médiatisation",
    body: "Construction de salles modernes, diffusion télévisée accrue, développement du volley de plage. La discipline gagne en visibilité auprès du grand public français.",
  },
  {
    period: '2010–aujourd'hui',
    title: 'Volley-ball contemporain',
    body: "Le championnat national atteint un niveau compétitif élevé. La formation structurée, les centres d'excellence régionaux et la numérisation de l'entraînement transforment la pratique à tous les niveaux.",
  },
]

export default function HistoryPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-72 overflow-hidden bg-foreground">
        <Image
          src="/images/history.png"
          alt="Histoire du volley-ball en France"
          fill
          priority
          className="object-cover grayscale opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-14 w-full">
            <p className="section-label mb-3 text-background/50">Histoire</p>
            <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] font-black leading-tight tracking-tight text-background text-balance">
              Le volley-ball en France depuis 1920
            </h1>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 py-14">
        <p className="text-lg leading-relaxed text-muted-foreground border-l-4 border-primary pl-5 italic">
          Plus d'un siècle de passion, de structuration et de conquêtes sportives. L'histoire du volley-ball en France est celle d'une discipline qui a su se réinventer et toucher des millions de pratiquants.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" aria-hidden="true" />

          <div className="flex flex-col gap-0">
            {timeline.map((item, i) => (
              <div key={item.period} className="flex gap-8 md:gap-14 items-start group">
                {/* Period badge */}
                <div className="flex-shrink-0 flex flex-col items-center md:w-16">
                  <div className="w-16 h-16 flex items-center justify-center bg-background border-2 border-primary z-10 relative">
                    <span className="font-display text-xs font-black text-primary text-center leading-tight">{item.period}</span>
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border min-h-8 md:hidden" aria-hidden="true" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-12 flex-1">
                  <h2 className="font-display text-xl font-bold text-foreground mb-2 leading-snug">{item.title}</h2>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom image strip */}
      <div className="relative h-48 overflow-hidden">
        <Image src="/images/history.png" alt="" fill className="object-cover grayscale opacity-30" sizes="100vw" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-display text-3xl font-black text-foreground/30 tracking-widest uppercase">1895 — Aujourd'hui</p>
        </div>
      </div>
    </div>
  )
}
