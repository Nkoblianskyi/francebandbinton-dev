'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentement aux cookies"
      className="fixed bottom-0 left-0 right-0 z-[100] bg-foreground text-background"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <p className="text-sm leading-relaxed text-background/80 max-w-xl">
          Ce site utilise des cookies pour améliorer votre expérience. En continuant, vous acceptez notre{' '}
          <Link href="/cookies" className="underline text-background hover:text-background/70 transition-colors">
            politique en matière de cookies
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-xs tracking-widest uppercase px-4 py-2 border border-background/30 text-background/60 hover:text-background hover:border-background/60 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="text-xs tracking-widest uppercase px-4 py-2 bg-background text-foreground hover:bg-background/90 transition-colors font-semibold"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
