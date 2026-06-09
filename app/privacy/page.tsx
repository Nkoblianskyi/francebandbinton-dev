export const metadata = {
  title: 'Politique de confidentialité — France Bandbinton',
  description: 'Découvrez comment francebandbinton.com collecte, utilise et protège vos données personnelles conformément au RGPD.',
}

const sections = [
  {
    title: 'Responsable du traitement',
    body: [
      "Le site francebandbinton.com est édité et exploité par une entité indépendante à but éditorial non commercial, dédiée à la diffusion de contenus relatifs au volley-ball en France.",
      "Pour toute demande relative à vos données personnelles, vous pouvez nous contacter à l'adresse : info@francebandbinton.com.",
    ],
  },
  {
    title: 'Données collectées',
    body: [
      "Données de navigation : adresse IP (anonymisée), type de navigateur, pages visitées, durée de la session. Ces données sont collectées automatiquement lors de votre navigation sur le site.",
      "Données de formulaire de contact : nom, adresse e-mail, contenu du message. Ces données sont collectées uniquement lorsque vous nous soumettez volontairement un message via notre formulaire de contact.",
      "Cookies et traceurs : voir notre politique de cookies pour le détail des cookies utilisés et leur finalité.",
    ],
  },
  {
    title: 'Finalités du traitement',
    body: [
      "Les données collectées sont utilisées exclusivement aux fins suivantes :",
      "– Assurer le bon fonctionnement technique du site (données de navigation).",
      "– Analyser l'audience du site de manière agrégée et anonymisée afin d'améliorer les contenus.",
      "– Traiter et répondre à vos demandes envoyées via le formulaire de contact.",
      "Nous ne procédons à aucun traitement de données à des fins publicitaires, commerciales ou de profilage.",
    ],
  },
  {
    title: 'Base légale des traitements',
    body: [
      "Les traitements effectués reposent sur les bases légales suivantes, conformément au RGPD (Règlement UE 2016/679) :",
      "– Intérêt légitime (article 6.1.f) : pour les données de navigation nécessaires au bon fonctionnement du site.",
      "– Consentement (article 6.1.a) : pour les cookies non strictement nécessaires.",
      "– Exécution de mesures précontractuelles (article 6.1.b) : pour les données transmises via le formulaire de contact.",
    ],
  },
  {
    title: 'Conservation des données',
    body: [
      "Les données de formulaire de contact sont conservées pour une durée maximale de 3 ans à compter de votre dernier contact avec nous.",
      "Les données de navigation anonymisées sont conservées pour une durée maximale de 25 mois.",
      "Au-delà de ces délais, les données sont supprimées ou anonymisées de façon irréversible.",
    ],
  },
  {
    title: 'Partage des données',
    body: [
      "Nous ne vendons ni ne louons vos données personnelles à des tiers. Vos données ne sont pas partagées à des fins commerciales.",
      "Dans le cadre du fonctionnement technique du site (hébergement, infrastructure), vos données peuvent transiter par des prestataires techniques opérant en tant que sous-traitants, liés par des obligations contractuelles conformes au RGPD.",
      "En cas d'obligation légale, nous pouvons être amenés à transmettre certaines données aux autorités compétentes.",
    ],
  },
  {
    title: 'Vos droits',
    body: [
      "Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :",
      "– Droit d'accès : obtenir la confirmation que vos données sont traitées et en recevoir une copie.",
      "– Droit de rectification : corriger des données inexactes ou incomplètes vous concernant.",
      "– Droit à l'effacement : demander la suppression de vos données dans les cas prévus par le RGPD.",
      "– Droit à la limitation : demander la suspension temporaire du traitement.",
      "– Droit d'opposition : vous opposer au traitement fondé sur l'intérêt légitime.",
      "– Droit à la portabilité : recevoir vos données dans un format structuré.",
      "Pour exercer ces droits, écrivez-nous à info@francebandbinton.com. Nous nous engageons à répondre dans un délai d'un mois.",
      "En cas de réponse insatisfaisante, vous disposez du droit d'introduire une réclamation auprès de la CNIL (Commission nationale de l'informatique et des libertés) sur www.cnil.fr.",
    ],
  },
  {
    title: 'Sécurité',
    body: [
      "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, toute perte ou toute destruction accidentelle.",
      "Le site est accessible via HTTPS afin de chiffrer les communications entre votre navigateur et nos serveurs.",
    ],
  },
  {
    title: 'Modifications de cette politique',
    body: [
      "Nous pouvons mettre à jour cette politique de confidentialité à tout moment. La date de mise à jour est indiquée en haut de page. Nous vous encourageons à consulter régulièrement cette page.",
      "En cas de modification substantielle, nous nous efforcerons d'en informer les utilisateurs de manière visible sur le site.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <p className="section-label mb-3">Légal</p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight tracking-tight text-foreground mb-4 text-balance">
            Politique de confidentialité
          </h1>
          <p className="text-sm text-muted-foreground">Dernière mise à jour : 2026 · francebandbinton.com</p>
        </div>
      </div>

      {/* Intro callout */}
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-0">
        <p className="text-sm leading-relaxed text-muted-foreground border-l-4 border-primary pl-5 italic">
          francebandbinton.com s'engage à respecter votre vie privée et à traiter vos données personnelles conformément au Règlement général sur la protection des données (RGPD) et à la législation française en vigueur.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Table of contents */}
        <div className="bg-secondary border border-border p-6 mb-14">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Sommaire</p>
          <ol className="flex flex-col gap-2">
            {sections.map((sec, i) => (
              <li key={sec.title} className="flex gap-3 text-sm">
                <span className="text-muted-foreground/50 flex-shrink-0 w-5">{i + 1}.</span>
                <span className="text-muted-foreground">{sec.title}</span>
              </li>
            ))}
          </ol>
        </div>

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

          {/* Contact block */}
          <div className="border-t border-border pt-10">
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Nous contacter</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Pour toute question relative à cette politique ou à l'exercice de vos droits :{' '}
              <a href="mailto:info@francebandbinton.com" className="text-primary hover:text-accent transition-colors underline">
                info@francebandbinton.com
              </a>
              {' '}ou via notre{' '}
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
