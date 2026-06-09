'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AboutPage() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [fields, setFields] = useState({ name: '', email: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState('sending')
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 900))
    setFormState('sent')
  }

  return (
    <div className="bg-background min-h-screen">
      {/* ── Hero banner ── */}
      <div className="bg-foreground text-background">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="section-label text-background/40 mb-4">À propos</p>
          <h1 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-black leading-tight tracking-tight text-balance mb-6">
            Qui sommes-nous&nbsp;?
          </h1>
          <p className="text-background/60 text-lg leading-relaxed max-w-2xl">
            francebandbinton.com est un espace éditorial indépendant consacré au volley-ball en France — technique, histoire, règles et culture du jeu.
          </p>
        </div>
      </div>

      {/* ── Mission ── */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-4">Notre mission</p>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-black leading-tight tracking-tight text-foreground mb-6 text-balance">
              Rendre le volley-ball accessible à tous
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed text-sm">
              <p>
                Créé par des passionnés de volley-ball, ce site a pour vocation de centraliser des ressources de qualité sur la pratique, la culture et le développement du sport en France.
              </p>
              <p>
                Nous croyons que la connaissance technique — correctement expliquée et illustrée — permet à chaque joueur, débutant comme confirmé, d'améliorer sa pratique et de mieux comprendre le jeu qu'il aime.
              </p>
              <p>
                Notre contenu est écrit par des contributeurs qui pratiquent le volley-ball depuis de nombreuses années, avec une attention particulière portée à la précision des informations et à la pédagogie.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="flex flex-col gap-0 border border-border">
            {[
              { label: 'Indépendance éditoriale', body: "Aucune affiliation à une fédération, un club ou une marque. Notre seul objectif est d'informer." },
              { label: 'Précision technique', body: "Chaque article est relu et validé pour garantir l'exactitude des informations sportives." },
              { label: 'Accessibilité', body: "Nous écrivons pour tous les niveaux — du joueur débutant à l'entraîneur chevronné." },
              { label: 'Passion du jeu', body: 'Le volley-ball est notre moteur. Cette passion transparaît dans chaque page du site.' },
            ].map((v, i, arr) => (
              <div key={v.label} className={`px-6 py-5 flex flex-col gap-1 ${i < arr.length - 1 ? 'border-b border-border' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                  <h3 className="font-semibold text-foreground text-sm">{v.label}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-4">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── What we cover ── */}
      <div className="bg-secondary border-t border-b border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Ce que nous couvrons</p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-black leading-tight tracking-tight text-foreground mb-12 text-balance">
            Des ressources complètes sur le volley-ball
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              {
                title: 'Technique',
                href: '/technique',
                desc: 'Réception, passe, service, smash, contre, défense — chaque geste expliqué avec des exercices.',
              },
              {
                title: 'Règles',
                href: '/rules',
                desc: 'Les règles officielles de la FIVB, du terrain aux disciplines en passant par les fautes courantes.',
              },
              {
                title: 'Histoire',
                href: '/history',
                desc: "L'évolution du volley-ball en France depuis les premières pratiques des années 1920 jusqu'à aujourd'hui.",
              },
              {
                title: 'Blog',
                href: '/blog',
                desc: 'Articles de fond, analyses tactiques, conseils pratiques et portraits du sport.',
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-secondary p-8 flex flex-col gap-3 group hover:bg-background transition-colors"
              >
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">{item.desc}</p>
                <span className="text-xs tracking-widest uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Explorer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Contact form ── */}
      <div className="max-w-3xl mx-auto px-6 py-24" id="contact">
        <p className="section-label mb-4">Contact</p>
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-black leading-tight tracking-tight text-foreground mb-3 text-balance">
          Nous écrire
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-lg">
          Une question, une suggestion ou une envie de collaborer&nbsp;? Remplissez le formulaire ci-dessous. Nous répondons sous 48 heures ouvrées.
        </p>

        {formState === 'sent' ? (
          <div className="border border-primary bg-primary/5 px-8 py-10 flex flex-col gap-3">
            <p className="font-display text-xl font-bold text-foreground">Message envoyé.</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Merci de nous avoir contactés. Nous reviendrons vers vous dans les meilleurs délais à l'adresse <strong>{fields.email}</strong>.
            </p>
            <button
              onClick={() => { setFormState('idle'); setFields({ name: '', email: '', message: '' }) }}
              className="mt-2 text-xs tracking-widest uppercase text-primary hover:text-accent transition-colors self-start"
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs tracking-widest uppercase text-muted-foreground">
                  Nom <span aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={fields.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs tracking-widest uppercase text-muted-foreground">
                  E-mail <span aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={fields.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs tracking-widest uppercase text-muted-foreground">
                Message <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={fields.message}
                onChange={handleChange}
                placeholder="Votre message..."
                className="bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-y"
              />
            </div>

            {formState === 'error' && (
              <p className="text-sm text-accent">Une erreur est survenue. Veuillez réessayer ou écrire directement à info@francebandbinton.com.</p>
            )}

            <div className="flex items-center gap-6">
              <button
                type="submit"
                disabled={formState === 'sending'}
                className="bg-foreground text-background text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-primary transition-colors font-semibold disabled:opacity-50"
              >
                {formState === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
              </button>
              <a
                href="mailto:info@francebandbinton.com"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                info@francebandbinton.com
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
