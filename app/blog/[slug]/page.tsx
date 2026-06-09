import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '@/lib/blog-data'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
  }
}

/* Very simple markdown-like renderer: ## becomes h2, **text** becomes bold, plain lines become p */
function renderContent(raw: string) {
  const lines = raw.trim().split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) { key++; continue }

    if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="font-display text-2xl font-bold text-foreground mt-10 mb-4 leading-snug">
          {trimmed.slice(3)}
        </h2>
      )
    } else if (trimmed.startsWith('- ')) {
      const content = trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      elements.push(
        <li key={key++} className="text-muted-foreground leading-relaxed ml-4 list-disc" dangerouslySetInnerHTML={{ __html: content }} />
      )
    } else {
      const html = trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      elements.push(
        <p key={key++} className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} />
      )
    }
  }
  return elements
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const others = articles.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-64 overflow-hidden bg-secondary">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-12 w-full">
            <Link href="/blog" className="inline-block text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-4">
              ← Blog
            </Link>
            <h1 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-black leading-tight tracking-tight text-foreground text-balance">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-14">
        <p className="text-lg leading-relaxed text-muted-foreground mb-10 border-l-4 border-primary pl-5 italic">
          {article.excerpt}
        </p>
        <div className="flex flex-col gap-5">
          {renderContent(article.content)}
        </div>
      </article>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* Other articles */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="section-label mb-8">Autres articles</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((a) => (
            <Link key={a.slug} href={`/blog/${a.slug}`} className="group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden mb-4">
                <Image src={a.image} alt={a.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:640px) 100vw, 33vw" />
                <div className="absolute inset-0 border border-border" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">{a.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
