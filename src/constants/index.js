import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  RecipesApp,
  BlogsApi,
  TrybersAndDragons,
  StoreManager,
  OnlineStore,
  TrybeTunes,
  TestingLibrary,
  jobit,
  tripguide,
  threejs,
  flutter,
  sequelize,
  puc,
  trybe,
  sql,
  python,
  TrybeSmith,
  TalkerManager,
  TrybeFutebolClube,
  TrybeWallet,
  Tryunfo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mim",
  },
  {
    id: "work",
    title: "Formação / Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Desenvolvedor Front-End",
    icon: web,
  },
  {
    title: "Desenvolvedor Back-End",
    icon: mobile,
  },
  {
    title: "Desenvolvedor Full Stack",
    icon: creator,
  },
  {
    title: "Desenvolvedor Mobile",
    icon: backend,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Sequelize",
    icon: sequelize,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Ciência da Computação",
    company_name: "PUC Minas",
    icon: puc,
    iconBg: "#fff",
    date: "2019 - 2021 (5° Período)",
    points: [
      "Arquitetura de Banco de dados.",
      "Programação orientada a objetos (POO)",
      "Complexidade de algoritmos",
    ],
  },
  {
    title: "Desenvolvimento FullStack",
    company_name: "Trybe",
    icon: trybe,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Nov 2023",
    points: [
      "Mais de 1500 horas de formação que aborda fundamentos de desenvolvimento web, desenvolvimento, \
      Front-end, Back-end, ciência da computação, metodologias ágeis e habilidades comportamentais.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Trybe Futebol Clube",
    description:
      "Projeto que aborda: docker, modelagem de dados (MySQL, Sequelize), API REST em TypeScript com Node.js e Express. Bibliotecas: JWT para autenticação, bcrypt para hashing de senhas. Seguindo padrões de POO.",
    tags: [
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
    ],
    image: TrybeFutebolClube,
    source_code_link: "https://github.com/joaoboscodev/TrybeFutebolClubeFullStack",
  },
  {
    name: "Trybers And Dragons",
    description:
      "Projeto em TypeScript, feito para aplicar princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG (Role Playing Game).",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
    ],
    image: TrybersAndDragons,
    source_code_link: "https://github.com/joaoboscodev/TrybersAndDragons",
  },
  {
    name: "TrybeSmith",
    description:
      "Projeto de uma API de loja de itens medievais, utilizando um banco de dados SQL, onde é possível executar cadastro, login e autenticação de pessoas usuárias, busca e cadastro de produtos e pedidos",
    tags: [
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: TrybeSmith,
    source_code_link: "https://github.com/joaoboscodev/Trybesmith",
  },
  {
    name: "Blogs Api",
    description:
      "Desenvolvi uma infraestrutura composta por uma API e um sistema de gerenciamento de banco de dados para a criação de um blog usando Node.js, com a utilização do Sequelize para fazer um CRUD de posts.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Sequelize",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
    ],
    image: BlogsApi,
    source_code_link: "https://github.com/joaoboscodev/blogsApiProject",
  },
  {
    name: "Store Manager",
    description:
      "Projeto de gestão de produtos e vendas em Node.js e Sequelize, oferecendo controle com escalabilidade. É ideal para empresas simplificarem processos e tomarem decisões estratégicas.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Sequelize",
        color: "pink-text-gradient",
      },
    ],
    image: StoreManager,
    source_code_link: "https://github.com/joaoboscodev/StoreManager",
  },
  {
    name: "Recipes App",
    description:
      "App móvel em React.js que consome uma API para exibir diversas receitas de bebidas e comidas, fornece instruções e ingredientes para prepará-las. Também permite marcar suas receitas favoritas e compartilhá-las.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Testing library",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: RecipesApp,
    source_code_link: "https://github.com/joaoboscodev/Recipes-App",
  },
  {
    name: "Online Store",
    description:
      "Projeto de uma loja online feita em grupo, utilizando React. Possui uma API extensa para renderizar produtos por categorias, enquanto aprimoramos habilidades de comunicação , trabalho em equipe e resolução de conflitos.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: OnlineStore,
    source_code_link: "https://github.com/joaoboscodev/FrontendOnlineStore",
  },
  {
    name: "Trybe Tunes",
    description:
      "Desenvolvi um projeto individual com tecnologia React, semelhante ao Spotify, integrando uma API extensa de música. Construindo recursos como pesquisa de músicas e gerenciamento de favoritos.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: TrybeTunes,
    source_code_link: "https://github.com/joaoboscodev/Trybetunes",
  },
  {
    name: "React Testing Library",
    description:
      "Desenvolvi testes com Jest e Testing Library para renderização dos detalhes de um Pokémon, navegação para a página de detalhes, validação da URL e marcação de Pokémon como favoritos.",
    tags: [
      {
        name: "Jest",
        color: "blue-text-gradient",
      },
      {
        name: "Testing Library",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: TestingLibrary,
    source_code_link: "https://github.com/joaoboscodev/ReactTestingLibrary",
  },
  {
    name: "Talker Manager",
    description:
      "Projeto onde foi desenvolvido uma API de um CRUD (Create, Read, Update e Delete) de palestrantes (talkers), aprendendo como criar endpoints para ler e escrever arquivos usando o módulo fs do Node.js.",
    tags: [
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
    ],
    image: TalkerManager,
    source_code_link: "https://github.com/joaoboscodev/TalkerManager",
  },
  {
    name: "Tryunfo",
    description:
      "Projeto jogo estilo Super Trunfo. Destaques: manipulação de cartas, visualização do baralho e aplicação de conceitos como leitura/atualização de estado, eventos, renderização condicional e formulários JSX.",
    tags: [
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JSX",
        color: "pink-text-gradient",
      },
    ],
    image: Tryunfo,
    source_code_link: "https://github.com/joaoboscodev/Tryunfo",
  },
  {
    name: "TrybeWallet",
    description:
      "Projeto onde aprendi gerenciar stores, reducers e actions no Redux. Conectei o estado global aos componentes React, implementando funcionalidades de adição, remoção e edição de gastos.",
    tags: [
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: TrybeWallet,
    source_code_link: "https://github.com/joaoboscodev/TrybeWallet",
  },
];

export { services, technologies, experiences, testimonials, projects };