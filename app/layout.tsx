import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import CookieBanner from '@/components/cookie-banner'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'France Badminton — Волейбол у Франції',
    template: '%s | France Badminton',
  },
  description:
    'Усе про волейбол у Франції: техніка, тактика, правила гри, історія, спорядження та статті для любителів і гравців.',
  metadataBase: new URL('https://francebandbinton.com'),
  openGraph: {
    siteName: 'France Badminton',
    locale: 'fr_FR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#f7f4ee',
  width: 'device-width',
  initialScale: 1,
}

const navLinks = [
  { href: '/technique', label: 'Technique' },
  { href: '/rules', label: 'Règles' },
  { href: '/history', label: 'Histoire' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'À propos' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        {/* ── HEADER ── */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo + wordmark */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="France Badminton — accueil">
              {/* Abstract volleyball logo mark */}
              <span className="flex-shrink-0 w-8 h-8 relative" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
                  <path d="M3.5 16 Q10 8 16 16 Q22 24 28.5 16" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary" />
                  <path d="M16 3.5 Q24 10 16 16 Q8 22 16 28.5" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-accent" />
                </svg>
              </span>
              <span className="font-display text-lg font-semibold tracking-tight leading-none text-foreground">
                france <span className="text-primary">bandbinton</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors hover-underline"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Mobile nav toggle — pure CSS checkbox trick */}
            <label htmlFor="mobile-nav-toggle" className="md:hidden cursor-pointer p-2 -mr-2" aria-label="Menu">
              <span className="block w-5 h-px bg-foreground mb-1.5 transition-transform" />
              <span className="block w-5 h-px bg-foreground mb-1.5" />
              <span className="block w-3 h-px bg-foreground" />
            </label>
            <input type="checkbox" id="mobile-nav-toggle" className="hidden peer/nav" />
            <nav
              aria-label="Navigation mobile"
              className="hidden peer-checked/nav:flex flex-col absolute top-16 left-0 right-0 bg-background border-b border-border px-6 py-4 gap-4 md:hidden z-50"
            >
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Page content — offset for fixed header */}
        <main className="flex-1 pt-16">
          {children}
        </main>

        {/* ── FOOTER ── */}
        <footer className="bg-foreground text-background" role="contentinfo">
          <div className="max-w-7xl mx-auto px-6 py-10">
            {/* Top row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-8 border-b border-background/10">
              {/* Wordmark */}
              <div className="flex flex-col gap-2">
                <span className="font-display text-2xl font-bold tracking-tight text-background">
                  france <span className="opacity-50">bandbinton</span>
                </span>
                <p className="text-xs tracking-widest uppercase text-background/40">Volley-ball · France</p>
              </div>

              {/* Nav columns */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
                <div>
                  <p className="text-background/40 text-xs tracking-widest uppercase mb-3">Explorer</p>
                  <ul className="flex flex-col gap-2">
                    <li><Link href="/technique" className="text-background/70 hover:text-background transition-colors">Technique</Link></li>
                    <li><Link href="/rules" className="text-background/70 hover:text-background transition-colors">Règles du jeu</Link></li>
                    <li><Link href="/history" className="text-background/70 hover:text-background transition-colors">Histoire</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-background/40 text-xs tracking-widest uppercase mb-3">Contenu</p>
                  <ul className="flex flex-col gap-2">
                    <li><Link href="/blog" className="text-background/70 hover:text-background transition-colors">Blog</Link></li>
                    <li><Link href="/about" className="text-background/70 hover:text-background transition-colors">À propos</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-background/40 text-xs tracking-widest uppercase mb-3">Légal</p>
                  <ul className="flex flex-col gap-2">
                    <li><Link href="/privacy" className="text-background/70 hover:text-background transition-colors">Confidentialité</Link></li>
                    <li><Link href="/cookies" className="text-background/70 hover:text-background transition-colors">Cookies</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="pt-6 flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-background/30">
              <span>© 2026 francebandbinton.com</span>
              <span>info@francebandbinton.com</span>
            </div>
          </div>
        </footer>

        <CookieBanner />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
