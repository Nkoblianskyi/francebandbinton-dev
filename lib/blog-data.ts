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
      "Le smash est le geste le plus spectaculaire du volley-ball. Découvrez comment développer une frappe puissante et précise qui surprend les défenseurs adverses.",
    image: '/images/blog-1.png',
    content: `
Le smash, ou attaque, est l'action offensive par excellence au volley-ball. Maîtriser ce geste requiert une coordination parfaite entre l'élan, l'impulsion et la frappe de balle.

## La préparation de course

Tout commence par une lecture précise du passeur. Le joueur doit anticiper la trajectoire de la passe, ajuster ses appuis et déclencher une course d'élan de trois à quatre pas. Les deux derniers pas sont décisifs : ils permettent de transformer l'élan horizontal en force verticale.

## L'impulsion et l'armé de bras

Au moment du saut, les deux bras montent simultanément pour maximiser la hauteur. Le bras frappeur s'arme derrière la tête, coude haut, poignet souple. Cette position est fondamentale pour générer de la puissance sans contraindre l'articulation de l'épaule.

## La frappe et les variantes

La main frappe le sommet de la balle avec un claquement net, le poignet accompagnant vers l'avant. Les principales variantes sont :

- **L'attaque longue diagonale** : vers le coin opposé, difficile à défendre
- **L'attaque courte croisée** : exploite les espaces en zone 2
- **Le lob** : par-dessus le contre adverse, demande timing et finesse
- **L'attaque de puissance** : déstabilise toute la défense adverse

## Entraînement progressif

Les débutants commencent par des frappes statiques, puis progressent vers des smashes avec approche sur balles lancées à la main. La répétition en conditions réelles de jeu consolide les automatismes. L'objectif est de rendre chaque frappe naturelle, précise et difficile à lire pour le camp adverse.
    `,
  },
  {
    slug: 'defense-en-reception',
    title: 'La défense en réception : fondamentaux et posture',
    excerpt:
      "Une bonne réception conditionne tout le jeu offensif. Apprenez à lire le service adverse et à construire une plateforme solide pour alimenter vos attaquants.",
    image: '/images/blog-2.png',
    content: `
La réception est souvent perçue comme un geste défensif, mais elle est en réalité le premier acte de l'offensive. Une réception propre libère le passeur et permet de construire des combinaisons variées.

## La lecture du serveur

Avant tout, le réceptionneur observe le lancé de balle et l'angle d'épaule du serveur. Ces indices permettent d'anticiper la direction et la puissance du service. Une lecture rapide permet de se placer idéalement avant que la balle ne franchisse le filet.

## La posture de base

Les pieds écartés dans le sens de la largeur, légèrement décalés (pied directeur légèrement en avant), genoux fléchis, poids du corps sur l'avant du pied. Les bras sont tendus devant soi, poignets croisés ou pouces alignés, formant une plateforme stable.

## L'utilisation du corps entier

La force de la réception ne vient pas des bras : elle vient des jambes. On monte vers la balle avec les jambes, les bras servant de guide et non de propulseur. Ce principe évite les bras trop actifs qui provoquent des réceptions incontrôlées.

## Cas particuliers

- **Le service flottant** : la balle tourne peu mais change de trajectoire. Il faut garder ses appuis jusqu'au dernier moment et accompagner la plateforme.
- **Le service sauté puissant** : l'impact est violent. La plateforme doit être verrouillée, le dos droit, les jambes absorbant la puissance.
- **La balle courte** : nécessite une course rapide vers l'avant, en plongeant si nécessaire, pour ramener la balle sur le passeur.
    `,
  },
  {
    slug: 'volley-de-plage-initiation',
    title: 'Volley-ball de plage : initiation et spécificités',
    excerpt:
      "Le volley de plage possède ses propres codes et exigences physiques. Sable, soleil et règles distinctes : tout ce que vous devez savoir pour débuter.",
    image: '/images/blog-3.png',
    content: `
Avec deux joueurs par équipe, le volley-ball de plage est une discipline à part entière, reconnue aux Jeux olympiques depuis 1996. Si les fondamentaux techniques restent proches du jeu en salle, l'environnement modifie profondément les exigences physiques et tactiques.

## Les différences principales avec la salle

Le sable ralentit les déplacements et exige une musculature plus développée aux membres inférieurs. Les rotations serveur-réceptionneur n'existent pas en plage : chaque joueur défend son côté de terrain. L'absence de libéro et de spécialisation impose une polyvalence totale.

## Les règles spécifiques

- Deux sets gagnants de 21 points (avec deux points d'écart), tie-break à 15 points
- Chaque point est précédé d'un service tournant entre les joueurs
- La manchette avec les deux mains est autorisée, mais le double touche interdit au-dessus des épaules avec les doigts
- Le service par en bas reste courant chez les débutants

## Tactique à deux joueurs

La communication est essentielle. Avant chaque service adverse, les deux joueurs définissent par gestes leur placement. Le jeu en triangle (service, réception, attaque) est plus exposé qu'en salle ; il faut donc varier les cibles et perturber le passeur adverse.

## Condition physique

L'entraînement privilégie les sauts et déplacements spécifiques sur sable : squats, fentes, courses de côté et montées de genoux. La résistance au vent modifie le vol de la balle : l'adaptation sensorielle est une compétence à développer dès les premières sessions.
    `,
  },
  {
    slug: 'role-du-libero',
    title: 'Le rôle du libero : gardien du parquet',
    excerpt:
      "Vêtu d'un maillot distinct, le libero est le spécialiste de la défense. Un poste méconnu du grand public mais crucial pour la solidité de l'équipe.",
    image: '/images/blog-4.png',
    content: `
Introduit officiellement en 1998 par la Fédération internationale de volley-ball (FIVB), le libero a transformé le jeu défensif à un niveau mondial. Reconnaissable à son maillot de couleur différente, il est aujourd'hui indispensable dans tout système de jeu sérieux.

## Définition et règles spécifiques

Le libero ne peut pas attaquer au-dessus du bord supérieur du filet. Il ne peut pas servir, effectuer un contre ni bloquer. En revanche, il peut remplacer n'importe quel joueur de la ligne arrière sans limite de rotation, et ses remplacements ne comptent pas dans le quota réglementaire.

## Qualités requises

La réactivité et la lecture du jeu sont ses principales armes. Le libero analyse la trajectoire de la balle dès le contact du service ou de l'attaque adverse. Ses réflexes, sa souplesse et sa capacité à plonger en défense l'amènent à couvrir une surface de terrain considérable.

## Son rôle dans la construction du jeu

En récupérant des balles a priori impossibles, le libero donne au passeur le temps de se positionner et de construire un jeu varié. Ses passes basses vers la cible passeur doivent être précises malgré une posture souvent difficile.

## Communication et leadership

Sur le terrain, le libero est les yeux de l'équipe en défense. Il communique en permanence avec les autres défenseurs, ajuste les positions avant chaque service adverse et organise les couvertures d'attaque. Sa présence vocale est aussi importante que sa technique.
    `,
  },
  {
    slug: 'psychologie-du-sportif',
    title: 'Psychologie du sportif : gérer la pression du match',
    excerpt:
      "Le mental fait la différence dans les moments décisifs. Techniques de concentration, gestion du stress et routines de performance pour rester performant sous pression.",
    image: '/images/blog-5.png',
    content: `
Dans le sport de haut niveau, la différence entre deux joueurs techniquement similaires se joue souvent dans la tête. La préparation mentale est désormais une composante reconnue de l'entraînement volley-ball, des clubs amateurs aux structures professionnelles.

## Les sources de pression en match

La pression peut venir du score, du public, de l'adversaire réputé ou de la peur de décevoir ses coéquipiers. Chaque joueur vit ces pressions différemment, et les identifier est la première étape pour les gérer.

## La respiration comme outil de régulation

Avant un service décisif ou après une erreur, une respiration abdominale profonde (inspiration 4 secondes, expiration 6 secondes) ramène le système nerveux à un état plus stable. Cette technique simple peut être pratiquée discrètement sur le terrain.

## Les routines de performance

Les meilleurs joueurs ont des rituels avant chaque service ou réception : placement des pieds, regard sur l'adversaire, quelques mots-clés mentaux. Ces routines créent une fenêtre de concentration qui bloque les pensées parasites.

## Le discours interne positif

Remplacer "je vais rater" par "je vise l'angle droit" oriente l'attention sur l'action plutôt que sur la peur du résultat. Les instructions techniques internes (concise, précises) sont plus efficaces que les injonctions émotionnelles.

## Accepter l'erreur

Dans un sport où chaque point est visible et chaque faute comptabilisée, l'erreur est inévitable. Savoir passer à l'action suivante sans rumination est une compétence mentale qui se travaille, exactement comme le smash ou la réception.
    `,
  },
  {
    slug: 'histoire-volley-france',
    title: "Histoire du volley-ball en France : des origines à aujourd'hui",
    excerpt:
      "Du gymnase au stade, le volley-ball français a traversé des décennies d'évolution. Retour sur les grandes étapes qui ont construit une culture sportive unique.",
    image: '/images/blog-6.png',
    content: `
Le volley-ball est né aux États-Unis en 1895, mais c'est en France que ce sport a trouvé un terreau fertile pour se développer en Europe. L'histoire française du volley est une aventure collective, portée par des générations de joueurs passionnés.

## Les débuts en France

Les premières traces organisées du volley-ball en France remontent aux années 1920, introduit via les réseaux sportifs associatifs, notamment les associations de jeunesse. La Fédération française de volley-ball (FFVB) est fondée en 1936, formalisant une pratique déjà bien installée dans les lycées et les clubs.

## L'après-guerre et la structuration

Dans les années 1950 et 1960, le volley-ball s'installe dans les programmes scolaires et universitaires. Des championnats régionaux voient le jour et la culture du club se développe, notamment dans les grandes villes et les régions à forte tradition sportive.

## L'essor du haut niveau

Les années 1980 marquent un tournant avec la montée en puissance du niveau de jeu national. Les clubs français participent aux compétitions européennes, et le modèle d'entraînement professionnel commence à s'imposer.

## La nouvelle génération

Depuis les années 2000, le volley-ball français bénéficie d'infrastructures modernes et d'une formation structurée. Les ligues régionales alimentent un championnat national dense, et la discipline attire un public de plus en plus large, notamment grâce à la médiatisation des grandes compétitions internationales.

## Le volley féminin

Le développement du volley féminin en France mérite une attention particulière. Longtemps moins médiatisé, il a connu un essor remarquable depuis les années 1990, avec des clubs devenus références en Europe.
    `,
  },
]
