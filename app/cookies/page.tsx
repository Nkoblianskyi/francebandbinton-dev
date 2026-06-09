export const metadata = {
  title: 'Politique de cookies — France Bandbinton',
  description: 'Informations sur les cookies utilisés par francebandbinton.com et comment gérer vos préférences.',
}

const sections = [
  {
    title: "Qu'est-ce qu'un cookie ?",
    body: [
      "Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou téléphone) lors de la visite d'un site web. Il permet au site de mémoriser certaines informations relatives à votre navigation.",
      "Les cookies ne peuvent pas exécuter de programme ni transmettre de virus. Ils sont strictement dédiés aux usages décrits dans la présente politique.",
    ],
  },
  {
    title: 'Types de cookies utilisés',
    body: [
      "Cookies strictement nécessaires : ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés dans nos systèmes. Ils sont généralement activés en réponse à des actions que vous effectuez (connexion, mémorisation de vos préférences de confidentialité). Vous pouvez configurer votre navigateur pour bloquer ces cookies, mais certaines parties du site pourraient ne pas fonctionner correctement.",
      "Cookies de performance et d'analyse : ces cookies nous permettent de comptabiliser les visites et les sources de trafic afin de mesurer et améliorer les performances du site. Ils nous aident à savoir quelles pages sont les plus et les moins populaires. Toutes les informations recueillies sont agrégées et donc anonymisées. Si vous n'autorisez pas ces cookies, nous ne saurons pas quand vous avez visité notre site.",
      "Cookies de fonctionnalité : ces cookies permettent au site de proposer des fonctionnalités et une personnalisation améliorées. Ils peuvent être utilisés par nous ou par des prestataires tiers dont nous avons intégré les services à nos pages.",
    ],
  },
  {
    title: 'Durée de conservation',
    body: [
      "Les cookies de préférence (comme votre choix de consentement) sont conservés pendant 13 mois maximum à compter de leur dépôt.",
      "Les cookies de session sont supprimés automatiquement à la fermeture de votre navigateur.",
      "Au-delà de la durée de conservation, les données collectées via les cookies sont supprimées ou anonymisées.",
    ],
  },
  {
    title: 'Gestion de vos préférences',
    body: [
      "Vous pouvez à tout moment modifier vos préférences en matière de cookies. La plupart des navigateurs vous permettent de refuser les cookies, de les supprimer ou d'être alerté lors de leur dépôt.",
      "Pour gérer les cookies via votre navigateur : accédez aux paramètres ou préférences de votre navigateur, puis à la section relative à la confidentialité ou à la sécurité. La procédure varie selon le navigateur utilisé (Chrome, Firefox, Safari, Edge, etc.).",
      "Veuillez noter que la désactivation de certains cookies peut affecter votre expérience de navigation et limiter certaines fonctionnalités du site.",
    ],
  },
  {
    title: 'Cookies tiers',
    body: [
      "Certains cookies sont déposés par des services tiers apparaissant sur nos pages. Nous n'avons pas de contrôle sur ces cookies. Nous vous invitons à consulter les politiques de confidentialité des prestataires concernés pour en savoir plus.",
      "Nous nous engageons à ne pas revendre les données collectées via les cookies à des tiers à des fins publicitaires.",
    ],
  },
  {
    title: 'Base légale',
    body: [
      "Conformément au Règlement général sur la protection des données (RGPD) et à la loi française Informatique et Libertés, les cookies non strictement nécessaires ne sont déposés qu'après recueil de votre consentement explicite.",
      "Vous disposez du droit de retirer votre consentement à tout moment, sans que cela n'affecte la licéité du traitement fondé sur le consentement effectué avant ce retrait.",
    ],
  },
]

export default function CookiesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <p className="section-label mb-3">Légal</p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight tracking-tight text-foreground mb-4 text-balance">
            Politique de cookies
          </h1>
          <p className="text-sm text-muted-foreground">Dernière mise à jour : 2026 · francebandbinton.com</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-14">
          {sections.map((sec, i) => (
            <div key={sec.title}>
              <div className="flex items-baseline gap-4 mb-5">
                <span className="font-display text-3xl font-black text-border leading-none flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="font-display text-xl font-bold text-foreground leading-snug">{sec.title}</h2>
              </div>
              <div className="flex flex-col gap-4 pl-14">
                {sec.body.map((para, j) => (
                  <p key={j} className="text-sm leading-relaxed text-muted-foreground">{para}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Contact */}
          <div className="border-t border-border pt-10">
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Contact</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Pour toute question relative à cette politique de cookies, vous pouvez nous écrire à{' '}
              <a href="mailto:info@francebandbinton.com" className="text-primary hover:text-accent transition-colors underline">
                info@francebandbinton.com
              </a>{' '}
              ou utiliser notre{' '}
              <a href="/about#contact" className="text-primary hover:text-accent transition-colors underline">
                formulaire de contact
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
