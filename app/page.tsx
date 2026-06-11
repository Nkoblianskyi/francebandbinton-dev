import Image from 'next/image'
import Link from 'next/link'
import { articles } from '@/lib/blog-data'

export const metadata = {
  title: 'France Badminton — Badminton en France',
  description:
    'Le guide complet du badminton en France : technique, règles, histoire, équipement et actualités pour tous les passionnés.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label mb-4">{children}</p>
}

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden bg-foreground" style={{ minHeight: '100svh' }}>

        {/* Right-side full-bleed image panel */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[52%] pointer-events-none">
          <Image
            src="/images/hero-badminton.png"
            alt="Joueur de badminton en plein smash"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width:1024px) 100vw, 52vw"
          />
          {/* Gradient fade toward the left so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-transparent lg:via-foreground/30" />
          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-foreground to-transparent" />
        </div>

        {/* France tricolor vertical stripe — far left */}
        <div className="absolute left-0 inset-y-0 w-1.5 flex flex-col z-20" aria-hidden="true">
          <div className="flex-1 bg-primary" />
          <div className="flex-1 bg-background" />
          <div className="flex-1 bg-accent" />
        </div>

        {/* Main typographic content */}
        <div className="relative z-10 flex flex-col justify-between min-h-[100svh] px-8 lg:px-16 pl-10 lg:pl-20 py-10 lg:py-14">

          {/* Top bar */}
          <div className="flex items-center justify-between">
            <p className="text-[10px] tracking-[0.3em] uppercase text-background/40 font-sans">
              France · Badminton
            </p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-background/40 font-sans hidden md:block">
              Est. 1873 — présent
            </p>
          </div>

          {/* Centre: giant headline */}
          <div className="flex flex-col gap-0 max-w-3xl lg:max-w-[60%]">
            {/* Rotated side label */}
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px bg-accent flex-shrink-0" aria-hidden="true" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-accent font-sans">
                Découvrir le sport
              </span>
            </div>

            <h1
              className="font-display font-black leading-[0.92] tracking-tighter text-background"
              style={{ fontSize: 'clamp(4.5rem, 12vw, 10rem)' }}
            >
              <span className="block">Le</span>
              <span className="block text-primary" style={{ WebkitTextStroke: '0px' }}>
                Badminton
              </span>
              <span className="block relative">
                Français
                {/* Underline accent */}
                <span
                  className="absolute bottom-1 left-0 h-[5px] bg-accent"
                  style={{ width: 'clamp(3rem, 8vw, 7rem)' }}
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p className="mt-10 text-base leading-relaxed text-background/55 max-w-sm font-sans">
              Technique, tactique, règles et histoire. Tout ce que vous devez
              savoir sur le badminton en France.
            </p>

            <div className="flex gap-3 flex-wrap mt-8">
              <Link
                href="/technique"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-accent/85 transition-colors font-sans"
              >
                Explorer la technique
                <span className="ml-1" aria-hidden="true">→</span>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 border border-background/25 text-background text-xs tracking-widest uppercase px-6 py-3.5 hover:border-background/60 transition-colors font-sans"
              >
                Lire le blog
              </Link>
            </div>
          </div>

          {/* Bottom bar: stats */}
          <div className="flex items-end justify-between gap-6 pt-10 border-t border-background/10">
            <div className="flex gap-8 md:gap-14 flex-wrap">
              {[
                { value: '2', label: 'joueurs\nen simple' },
                { value: '21', label: 'points\npar manche' },
                { value: '1,55 m', label: 'hauteur\ndu filet' },
                { value: '13,4 m', label: 'longueur\ndu terrain' },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="font-display font-black text-background leading-none"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[10px] tracking-wide text-background/40 mt-1 uppercase whitespace-pre-line font-sans leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            {/* Scroll nudge */}
            <div className="flex flex-col items-center gap-1.5 opacity-30 flex-shrink-0 hidden md:flex">
              <span className="text-[9px] tracking-[0.3em] uppercase text-background font-sans">Défiler</span>
              <span className="block w-px h-10 bg-background animate-pulse" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ TECHNIQUE PREVIEW ══ */}
      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>01 — Technique &amp; entraînement</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black leading-tight tracking-tight text-foreground mb-5 text-balance">
                Maîtrisez chaque geste du jeu
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Du service au smash, chaque coup se travaille. Découvrez des plans d'entraînement, des conseils techniques et des exercices progressifs pour améliorer votre niveau.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {["Déplacements et position de base", "Service et retour de service", "Amorti, clear et lift", "Plans d'entraînement hebdomadaires"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/technique" className="inline-block text-sm tracking-widest uppercase text-primary border-b border-primary pb-0.5 hover:text-accent hover:border-accent transition-colors">
                Voir toutes les techniques
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/images/technique.png" alt="Technique de clear au badminton" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
              <div className="absolute inset-0 border border-border" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ RULES PREVIEW ══ */}
      <section className="py-24 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden order-2 md:order-1">
              <Image src="/images/rules.png" alt="Terrain de badminton vue du dessus" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
              <div className="absolute inset-0 border border-border" />
            </div>
            <div className="order-1 md:order-2">
              <SectionLabel>02 — Règles &amp; disciplines</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black leading-tight tracking-tight text-foreground mb-5 text-balance">
                Connaître les règles pour mieux jouer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Simple, double, para-badminton : règles officielles et disciplines adaptées. Comprenez le cadre du jeu et ses nuances.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { n: '3', label: 'Manches max par match' },
                  { n: '21', label: 'Points par manche' },
                  { n: '6,1×13,4m', label: 'Dimensions du terrain' },
                  { n: '2', label: 'Joueurs en double' },
                ].map((s) => (
                  <div key={s.label} className="border border-border bg-background p-4">
                    <p className="font-display text-2xl font-black text-primary">{s.n}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/rules" className="inline-block text-sm tracking-widest uppercase text-primary border-b border-primary pb-0.5 hover:text-accent hover:border-accent transition-colors">
                Lire les règles complètes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ EQUIPMENT ══ */}
      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <SectionLabel>03 — Équipement &amp; matériel</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black leading-tight tracking-tight text-foreground text-balance">
                L'équipement fait partie du jeu
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              { title: 'La raquette', desc: "Légère (70–100 g), cadre en graphite ou aluminium, tension des cordes entre 8 et 12 kg. Le choix de la raquette influence puissance et contrôle.", number: '01' },
              { title: 'Le volant', desc: "Plumes naturelles ou synthétiques. Les volants à plumes offrent une trajectoire plus stable ; les synthétiques durent plus longtemps à l'entraînement.", number: '02' },
              { title: 'Les chaussures', desc: "Semelle non marquante, bonne adhérence latérale et amorti au talon. Essentielles pour les déplacements rapides et les changements de direction.", number: '03' },
              { title: 'Le filet', desc: "Hauteur réglementaire : 1,55 m aux poteaux, 1,524 m au centre. Largeur de 6,1 m pour le double.", number: '04' },
              { title: 'Le grip', desc: "Poignée antidérapante ou surgrip pour absorber la transpiration et garantir une prise ferme lors des frappes puissantes.", number: '05' },
              { title: 'La tenue', desc: "Maillot respirant, short ou jupe léger. Les vêtements doivent permettre une amplitude de mouvement totale sans gêner les bras.", number: '06' },
            ].map((item) => (
              <div key={item.number} className="bg-background p-8 flex flex-col gap-3">
                <span className="font-display text-4xl font-black text-border leading-none">{item.number}</span>
                <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HISTORY PREVIEW ══ */}
      <section className="py-24 bg-foreground text-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>04 — Histoire</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black leading-tight tracking-tight text-background mb-5 text-balance">
                Plus d'un siècle de badminton en France
              </h2>
              <p className="text-background/70 leading-relaxed mb-6">
                Depuis son introduction en France au début du XXe siècle, le badminton a traversé des décennies de passion sportive, de structuration fédérale et de montée en puissance internationale.
              </p>
              <Link href="/history" className="inline-block text-sm tracking-widest uppercase text-background border-b border-background/40 pb-0.5 hover:border-background transition-colors">
                Lire l'histoire complète
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/images/history.png" alt="Histoire du badminton en France" fill className="object-cover grayscale" sizes="(max-width:768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-foreground/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ ACHIEVEMENTS ══ */}
      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>05 — Achievements</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black leading-tight tracking-tight text-foreground mb-12 text-balance">
            Le badminton français sur la scène mondiale
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "Championnats d'Europe", detail: "Les joueurs français participent régulièrement aux championnats d'Europe, avec des podiums en simple et en double mixte." },
              { metric: 'Championnats du monde', detail: "La BWF World Championships rassemble chaque année les meilleurs joueurs mondiaux, dont les représentants tricolores." },
              { metric: 'Jeux Olympiques', detail: "Le badminton est olympique depuis 1992. Les Jeux constituent l'objectif ultime pour chaque génération de joueurs français." },
              { metric: 'Thomas & Uber Cup', detail: "Les compétitions par équipes nationales voient la France affronter les meilleures nations mondiales du badminton." },
            ].map((a) => (
              <div key={a.metric} className="border-t-2 border-primary pt-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-3 leading-snug">{a.metric}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FACTS — TWO COLUMNS ══ */}
      <section className="py-24 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionLabel>Faits remarquables</SectionLabel>
              <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-foreground mb-8">Le saviez-vous ?</h2>
              <div className="flex flex-col gap-6">
                {[
                  { q: 'Inventé vers 1873', a: "Le badminton tire son nom du château de Badminton, en Angleterre, où le jeu fut popularisé. Les règles modernes furent codifiées en 1877." },
                  { q: 'Sport olympique depuis 1992', a: "Le badminton a fait ses débuts olympiques à Barcelone en 1992. Cinq épreuves sont aujourd'hui au programme : simple et double hommes, femmes et mixte." },
                  { q: 'Le volant le plus rapide du sport', a: "Un smash peut dépasser 400 km/h, faisant du volant l'objet le plus rapide de tous les sports de raquette." },
                ].map((f) => (
                  <div key={f.q} className="border-l-2 border-primary pl-5">
                    <p className="font-semibold text-foreground mb-1">{f.q}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionLabel>Chiffres clés</SectionLabel>
              <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-foreground mb-8">Le badminton en France</h2>
              <div className="flex flex-col gap-8">
                {[
                  { n: '170 000+', label: 'licenciés FFBaD', detail: "La Fédération française de badminton compte parmi les fédérations de raquette les plus dynamiques en France." },
                  { n: '2 500+', label: 'clubs affiliés', detail: "Des clubs répartis sur l'ensemble du territoire français, des petites communes aux grandes métropoles." },
                  { n: '1928', label: 'création de la FFBaD', detail: "L'une des premières fédérations de badminton fondées en Europe, pionnière du développement du sport en France." },
                ].map((f) => (
                  <div key={f.n} className="flex gap-5 items-start">
                    <span className="font-display text-3xl font-black text-accent leading-none flex-shrink-0 w-28">{f.n}</span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{f.label}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{f.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BLOG PREVIEW ══ */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <SectionLabel>06 — Blog &amp; articles</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black leading-tight tracking-tight text-foreground text-balance">
                Derniers articles
              </h2>
            </div>
            <Link href="/blog" className="text-sm tracking-widest uppercase text-primary border-b border-primary pb-0.5 hover:text-accent hover:border-accent transition-colors whitespace-nowrap">
              Voir tous les articles
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <Link href={`/blog/${articles[0].slug}`} className="md:col-span-7 group block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={articles[0].image} alt={articles[0].title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 58vw" />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors" />
              </div>
              <div className="mt-4">
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">{articles[0].title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">{articles[0].excerpt}</p>
              </div>
            </Link>
            <div className="md:col-span-5 flex flex-col gap-6">
              {articles.slice(1, 4).map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`} className="group flex gap-4 items-start">
                  <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden">
                    <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="96px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">{article.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
