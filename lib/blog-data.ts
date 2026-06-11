export interface Article {
  slug: string
  title: string
  excerpt: string
  image: string
  content: string
}

export const articles: Article[] = [
  {
    slug: 'art-du-smash',
    title: "L'art du smash : maîtriser l'attaque décisive",
    excerpt:
      "Le smash est le geste le plus spectaculaire du badminton. Découvrez comment développer une frappe puissante et précise qui surprend les défenseurs adverses.",
    image: '/images/blog-1.png',
    content: `
Le smash est l'action offensive par excellence au badminton. Maîtriser ce geste requiert une coordination parfaite entre le saut, l'armé de bras et la frappe du volant.

## La préparation

Tout commence par une lecture précise de la trajectoire du volant adverse. Le joueur doit anticiper le point d'impact, ajuster ses appuis et se placer sous le volant. Le split step avant le coup adverse permet une réaction plus rapide.

## L'impulsion et l'armé de bras

Au moment du saut, le bras frappeur s'arme derrière la tête, coude haut, poignet souple. Cette position est fondamentale pour générer de la puissance sans contraindre l'articulation de l'épaule.

## La frappe et les variantes

La raquette frappe le volant au point le plus haut, avec un claquement net du poignet vers le bas. Les principales variantes sont :

- **Le smash croisé** : vers le coin opposé, difficile à défendre
- **Le smash long de ligne** : exploite l'espace latéral
- **L'amorti** : feinte de smash suivi d'une chute douce au filet
- **Le smash de puissance** : déstabilise toute la défense adverse

## Entraînement progressif

Les débutants commencent par des frappes statiques, puis progressent vers des smashes sur volants lancés à la main. La répétition en conditions réelles de jeu consolide les automatismes. L'objectif est de rendre chaque frappe naturelle, précise et difficile à lire pour le camp adverse.
    `,
  },
  {
    slug: 'defense-en-retour',
    title: 'Le retour de service : fondamentaux et posture',
    excerpt:
      "Un bon retour de service conditionne tout le jeu offensif. Apprenez à lire le service adverse et à construire une base solide pour reprendre l'initiative.",
    image: '/images/blog-2.png',
    content: `
Le retour de service est souvent perçu comme un geste défensif, mais il est en réalité le premier acte de l'offensive. Un retour de qualité permet de repousser l'adversaire et de construire des échanges variés.

## La lecture du serveur

Avant tout, le réceptionneur observe la position du serveur et le geste de frappe. Ces indices permettent d'anticiper la direction et la profondeur du service. Une lecture rapide permet de se placer idéalement avant que le volant ne franchisse le filet.

## La posture de base

Les pieds écartés dans le sens de la largeur, légèrement décalés, genoux fléchis, poids du corps sur l'avant du pied. La raquette est devant le corps, prête à réagir dans toutes les directions.

## L'utilisation du corps entier

La force du retour ne vient pas uniquement du bras : elle vient des jambes et du transfert de poids. On accompagne le volant avec un mouvement court et contrôlé, en visant le fond de court ou le filet selon la tactique.

## Cas particuliers

- **Le service court** : nécessite un pas rapide vers l'avant et une touche délicate au-dessus du filet.
- **Le service long** : le retour en clear ou en drive repousse l'adversaire au fond de court.
- **Le service sauté** : l'impact est violent. La raquette doit être bien positionnée, le dos droit, les jambes absorbant le choc.
    `,
  },
  {
    slug: 'badminton-en-simple',
    title: 'Badminton en simple : initiation et spécificités',
    excerpt:
      "Le simple possède ses propres codes et exigences physiques. Endurance, vitesse et couverture de terrain : tout ce que vous devez savoir pour débuter.",
    image: '/images/blog-3.png',
    content: `
Avec un joueur par équipe, le badminton en simple est une discipline exigeante qui met à l'épreuve l'endurance, la vitesse et la précision technique sur toute la surface du terrain.

## Les différences principales avec le double

Le terrain est plus étroit (lignes latérales intérieures). Chaque joueur doit couvrir seul toute la surface, ce qui exige une condition physique supérieure et une excellente lecture du jeu.

## Les règles spécifiques

- Deux manches gagnantes de 21 points (avec deux points d'écart)
- Service en diagonale vers la zone de service adverse
- Le serveur change de côté de service après chaque point marqué
- En cas d'égalité à 20-20, jeu jusqu'à 2 points d'écart (maximum 30 points)

## Tactique en simple

Varier les coups (clear, drop, smash, drive) pour déstabiliser l'adversaire. Jouer au fond de court pour fatiguer, puis exploiter les espaces au filet. La patience et la construction du point sont essentielles.

## Condition physique

L'entraînement privilégie les déplacements latéraux, les fentes et les sauts répétés. La résistance cardiovasculaire est déterminante : un match de simple peut durer plus d'une heure à haute intensité.
    `,
  },
  {
    slug: 'jeu-en-double',
    title: 'Le jeu en double : coordination et rotation',
    excerpt:
      "À deux sur le terrain, le double exige communication, rotation de service et complémentarité. Un format dynamique et tactiquement riche.",
    image: '/images/blog-4.png',
    content: `
Le badminton en double est une discipline à part entière, reconnue aux Jeux olympiques. Si les fondamentaux techniques restent proches du simple, la présence d'un partenaire modifie profondément les exigences tactiques.

## Les règles spécifiques du double

- Deux joueurs par équipe sur le terrain complet (6,10 × 13,40 m)
- Rotation de service : seul le serveur peut marquer des points lors de son service
- Le partenaire du serveur ne peut pas recevoir le service adverse
- Communication gestuelle avant chaque service pour définir les placements

## Rôles et complémentarité

En double, un joueur est souvent plus offensif (au filet) et l'autre plus défensif (au fond). La rotation après chaque coup permet de couvrir le terrain efficacement. Le jeu au filet est décisif : intercepter les amortis et placer des kills.

## Tactique à deux joueurs

La communication est essentielle. Avant chaque service adverse, les deux joueurs définissent par gestes leur placement. Varier les cibles et perturber la construction adverse sont les clés du succès.

## Entraînement spécifique

Travailler les échanges au filet, les rotations de service et les combinaisons attaque-défense en duo. Les exercices à deux développent la complicité et la réactivité collective.
    `,
  },
  {
    slug: 'psychologie-du-sportif',
    title: 'Psychologie du sportif : gérer la pression du match',
    excerpt:
      "Le mental fait la différence dans les moments décisifs. Techniques de concentration, gestion du stress et routines de performance pour rester performant sous pression.",
    image: '/images/blog-5.png',
    content: `
Dans le sport de haut niveau, la différence entre deux joueurs techniquement similaires se joue souvent dans la tête. La préparation mentale est désormais une composante reconnue de l'entraînement badminton, des clubs amateurs aux structures professionnelles.

## Les sources de pression en match

La pression peut venir du score, du public, de l'adversaire réputé ou de la peur de décevoir ses coéquipiers. Chaque joueur vit ces pressions différemment, et les identifier est la première étape pour les gérer.

## La respiration comme outil de régulation

Avant un service décisif ou après une erreur, une respiration abdominale profonde (inspiration 4 secondes, expiration 6 secondes) ramène le système nerveux à un état plus stable. Cette technique simple peut être pratiquée discrètement sur le terrain.

## Les routines de performance

Les meilleurs joueurs ont des rituels avant chaque service ou retour : placement des pieds, regard sur l'adversaire, quelques mots-clés mentaux. Ces routines créent une fenêtre de concentration qui bloque les pensées parasites.

## Le discours interne positif

Remplacer "je vais rater" par "je vise le coin arrière" oriente l'attention sur l'action plutôt que sur la peur du résultat. Les instructions techniques internes (concises, précises) sont plus efficaces que les injonctions émotionnelles.

## Accepter l'erreur

Dans un sport où chaque point est visible et chaque faute comptabilisée, l'erreur est inévitable. Savoir passer à l'action suivante sans rumination est une compétence mentale qui se travaille, exactement comme le smash ou le clear.
    `,
  },
  {
    slug: 'histoire-badminton-france',
    title: "Histoire du badminton en France : des origines à aujourd'hui",
    excerpt:
      "Du gymnase aux grandes compétitions internationales, le badminton français a traversé des décennies d'évolution. Retour sur les grandes étapes qui ont construit une culture sportive unique.",
    image: '/images/blog-6.png',
    content: `
Le badminton est né en Angleterre au XIXe siècle, mais c'est en France que ce sport a trouvé un terreau fertile pour se développer en Europe. L'histoire française du badminton est une aventure collective, portée par des générations de joueurs passionnés.

## Les débuts en France

Les premières traces organisées du badminton en France remontent aux années 1920, introduit via les cercles sportifs et les clubs anglophones. La Fédération française de badminton (FFBaD) est fondée en 1928, formalisant une pratique déjà bien installée dans les lycées et les clubs.

## L'après-guerre et la structuration

Dans les années 1950 et 1960, le badminton s'installe dans les programmes sportifs associatifs. Des championnats régionaux voient le jour et la culture du club se développe, notamment dans les grandes villes et les régions à forte tradition sportive.

## L'essor du haut niveau

Les années 1980 marquent un tournant avec la montée en puissance du niveau de jeu national. Les clubs français participent aux compétitions européennes, et le modèle d'entraînement professionnel commence à s'imposer.

## La nouvelle génération

Depuis les années 2000, le badminton français bénéficie d'infrastructures modernes et d'une formation structurée. Les ligues régionales alimentent un championnat national dense, et la discipline attire un public de plus en plus large, notamment grâce à la médiatisation des grandes compétitions internationales.

## Le badminton féminin

Le développement du badminton féminin en France mérite une attention particulière. Longtemps moins médiatisé, il a connu un essor remarquable depuis les années 1990, avec des joueuses devenues références sur la scène européenne.
    `,
  },
]
