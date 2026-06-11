import Image from 'next/image'
import Link from 'next/link'
import { articles } from '@/lib/blog-data'

export const metadata = {
  title: 'Blog — Articles sur le badminton',
  description: 'Articles, analyses et conseils sur le badminton en France : technique, tactique, histoire et culture du jeu.',
}

export default function BlogPage() {
  const [featured, ...rest] = articles

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="border-b border-border py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Blog &amp; Articles</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tight leading-tight text-foreground text-balance">
            Chroniques du badminton
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
            Technique, culture, tactique et histoire. Des articles approfondis pour tout passionné du badminton.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured article */}
        <div className="mb-16">
          <p className="section-label mb-6">À la une</p>
          <Link href={`/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 border border-border" />
            </div>
            <div>
              <h2 className="font-display text-[clamp(1.6rem,3vw,2.5rem)] font-black leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors mb-4 text-balance">
                {featured.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
              <span className="inline-block text-sm tracking-widest uppercase text-primary border-b border-primary pb-0.5 group-hover:text-accent group-hover:border-accent transition-colors">
                Lire l'article
              </span>
            </div>
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-16" />

        {/* All other articles */}
        <p className="section-label mb-8">Tous les articles</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden mb-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 border border-border" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2 flex-1">
                {article.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">{article.excerpt}</p>
              <span className="mt-4 text-xs tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors">
                Lire l'article →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
