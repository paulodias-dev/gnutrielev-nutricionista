/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Centralized static data to maintain clean, scalable and DRY components

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface Specialty {
  id: string;
  title: string;
  iconName: 'Apple' | 'Flame' | 'Brain' | 'Sparkles' | 'Utensils' | 'Activity';
  shortDescription: string;
  detailedPoints: string[];
  focus: string;
}

export interface Testimonial {
  id: string;
  patientLabel: string;
  context: string;
  quote: string;
  period: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio', id: 'nav-inicio' },
  { label: 'Sobre Mim', href: '#sobre', id: 'nav-sobre' },
  { label: 'Objetivos', href: '#especialidades', id: 'nav-especialidades' },
  { label: 'Depoimentos', href: '#depoimentos', id: 'nav-depoimentos' },
  { label: 'Dúvidas Frequentes', href: '#faq', id: 'nav-faq' },
];

export const LEGAL_LINKS: LegalLink[] = [
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
  { label: 'Termos de Uso', href: '/termos-de-uso' },
  { label: 'Política de Cookies', href: '/politica-de-cookies' },
];

export const NUTRI_PROFILE = {
  fullName: 'Gislene Gomes de Mendonça',
  shortName: 'Gislene Gomes',
  displayTitle: 'Nutricionista Clínica e Esportiva',
  crn: 'CRN 26793/P',
  graduation: 'Graduação em Nutrição e formação complementar em nutrição clínica, esportiva e prescrição nutricional individualizada.',
  postGraduation: 'Atualização contínua em nutrição clínica, esportiva, comportamento alimentar e fitoterapia aplicada quando tecnicamente indicada.',
  whatsappPhone: '5562981979956',
  aboutTitle: 'Nutrição para Emagrecimento, Massa Muscular e Rotina Real',
  aboutSubtitle: 'Estratégias individualizadas para reduzir gordura, ganhar massa muscular e manter constância sem dietas extremas.',
  whatsappUrl: 'https://wa.me/5562981979956?text=Ol%C3%A1%2C%20Dra.%20Gislene!%20Visitei%20o%20site%20gnutrielev.com.br%20e%20quero%20avaliar%20uma%20estrat%C3%A9gia%20nutricional%20para%20perda%20de%20peso%20e%2Fou%20ganho%20de%20massa%20muscular.%20Qual%20a%20disponibilidade%20de%20hor%C3%A1rios%3F',
  address: 'Atendimento on-line e presencial — Av. General Euclides Figueiredo, 425 - Japãozinho, Aracaju - SE',
  addressStreet: 'Av. General Euclides Figueiredo, 425',
  addressDistrict: 'Japãozinho',
  city: 'Aracaju',
  state: 'SE',
  country: 'BR',
  email: 'contato@gnutrielev.com.br',
  privacyEmail: 'contato@gnutrielev.com.br',
  instagram: '@g_nutrielev',
  businessName: 'GNutriElev Nutrição',
  businessStatus: 'Dados empresariais em validação',
  serviceArea: 'Aracaju-SE e atendimento on-line para pacientes elegíveis',
  consultationDisclaimer: 'Acompanhamento nutricional depende de avaliação individual. Resultados variam conforme histórico, exames, adesão e condições clínicas.',
};

export const CLINIC_METRICS: Metric[] = [
  {
    value: 'Perda de gordura',
    label: 'Estratégia com avaliação',
    description: 'Plano alimentar orientado por rotina, preferências, fome, exames e adesão para buscar redução de gordura com segurança.'
  },
  {
    value: 'Massa muscular',
    label: 'Nutrição para treino',
    description: 'Ajustes de proteínas, carboidratos, horários e recuperação para favorecer hipertrofia conforme o treino e o objetivo.'
  },
  {
    value: 'Sem extremos',
    label: 'Constância na rotina',
    description: 'Estratégias práticas para manter o plano possível em casa, no trabalho, em viagens e em momentos sociais.'
  }
];

export const SPECIALTIES: Specialty[] = [
  {
    id: 'emagrecimento',
    title: 'Perda de Peso e Gordura',
    iconName: 'Apple',
    shortDescription: 'Estratégias para reduzir gordura corporal com plano alimentar possível, organização de rotina e acompanhamento individual.',
    detailedPoints: [
      'Déficit calórico definido conforme histórico, exames, rotina e sinais clínicos.',
      'Estratégias para fome, saciedade, ansiedade alimentar e escolhas fora de casa.',
      'Ajustes progressivos para perder peso sem depender de restrições radicais.'
    ],
    focus: 'Objetivo Principal'
  },
  {
    id: 'hipertrofia',
    title: 'Ganho de Massa Muscular',
    iconName: 'Flame',
    shortDescription: 'Ajuste alimentar para hipertrofia, recuperação e rendimento, respeitando treino, rotina, preferências e avaliação individual.',
    detailedPoints: [
      'Distribuição de proteínas, carboidratos e gorduras conforme composição corporal e treino.',
      'Suplementação discutida apenas quando houver indicação e benefício prático.',
      'Organização de refeições em torno dos horários de treino, apetite e recuperação.'
    ],
    focus: 'Hipertrofia'
  },
  {
    id: 'recomposicao-corporal',
    title: 'Recomposição Corporal',
    iconName: 'Sparkles',
    shortDescription: 'Estratégia para quem quer reduzir medidas, melhorar definição e preservar ou ganhar massa magra com acompanhamento.',
    detailedPoints: [
      'Definição de prioridade entre perda de gordura, manutenção e ganho de massa.',
      'Acompanhamento de medidas, sinais de evolução e ajustes de adesão.',
      'Plano pensado para treino, sono, rotina profissional e preferências alimentares.'
    ],
    focus: 'Definição'
  },
  {
    id: 'reeducacao',
    title: 'Reeducação Alimentar',
    iconName: 'Utensils',
    shortDescription: 'Construção de autonomia alimentar para sustentar o emagrecimento, o ganho de massa e uma rotina mais consistente.',
    detailedPoints: [
      'Mapeamento de gatilhos alimentares e dificuldades de adesão.',
      'Orientação para escolhas em casa, trabalho, restaurantes e eventos sociais.',
      'Metas progressivas para tornar o processo mais sustentável.'
    ],
    focus: 'Estilo de Vida'
  },
  {
    id: 'acompanhamento-evolucao',
    title: 'Acompanhamento de Evolução',
    iconName: 'Activity',
    shortDescription: 'Monitoramento da evolução para ajustar o plano conforme peso, medidas, treino, fome, energia e adesão ao processo.',
    detailedPoints: [
      'Revisão de sinais de evolução, dificuldades práticas e pontos de baixa adesão.',
      'Ajustes no plano para evitar estagnação e manter direção no objetivo.',
      'Estratégias para platôs, rotina corrida, refeições fora de casa e eventos sociais.'
    ],
    focus: 'Evolução'
  },
  {
    id: 'foco-mental',
    title: 'Energia & Rotina',
    iconName: 'Brain',
    shortDescription: 'Organização alimentar para melhorar consistência, energia percebida e adesão ao plano, considerando sono, trabalho e hábitos.',
    detailedPoints: [
      'Análise de horários, hidratação, qualidade das refeições e pausas alimentares.',
      'Estratégias práticas para dias corridos, viagens e rotina profissional.',
      'Discussão responsável sobre café, suplementos e fitoterápicos quando aplicável.'
    ],
    focus: 'Performance no Dia a Dia'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patientLabel: 'Paciente M.',
    context: 'Emagrecimento',
    quote: 'O acompanhamento me ajudou a organizar melhor as refeições e entender o que fazia sentido para meu objetivo, sem sentir que estava em uma dieta impossível.',
    period: 'Relato autorizado e anonimizado',
    rating: 5,
  },
  {
    id: 'test-2',
    patientLabel: 'Paciente R.',
    context: 'Ganho de massa muscular',
    quote: 'Eu tinha dificuldade de comer o suficiente e ajustar os horários ao treino. Com o plano, ficou mais fácil organizar refeições e manter constância.',
    period: 'Relato autorizado e anonimizado',
    rating: 5,
  },
  {
    id: 'test-3',
    patientLabel: 'Paciente L.',
    context: 'Recomposição corporal',
    quote: 'A consulta foi clara e cuidadosa. Consegui entender prioridades, ajustar a rotina e acompanhar melhor minha evolução sem medidas extremas.',
    period: 'Relato autorizado e anonimizado',
    rating: 5,
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona a consulta para perda de peso ou ganho de massa?',
    answer: 'A consulta começa com avaliação de rotina, preferências, histórico de saúde, exames, treino, medicamentos e objetivo principal. A partir disso, são definidas estratégias alimentares individualizadas para emagrecimento, ganho de massa muscular ou recomposição corporal.'
  },
  {
    id: 'faq-2',
    question: 'Como é feita a avaliação corporal no atendimento online?',
    answer: 'No atendimento online, a avaliação pode incluir relato de rotina, medidas corporais autorreferidas, fotos padronizadas quando pertinentes, evolução de peso e outros dados enviados pelo paciente. A indicação de cada recurso depende do objetivo, da segurança e da adequação ao caso.'
  },
  {
    id: 'faq-3',
    question: 'Você aceita plano de saúde?',
    answer: 'O atendimento é particular. Quando aplicável, podem ser emitidos recibo e/ou nota fiscal com os dados profissionais cabíveis. A possibilidade de reembolso depende exclusivamente das regras da operadora e do contrato do paciente.'
  },
  {
    id: 'faq-4',
    question: 'O plano é diferente para emagrecimento e hipertrofia?',
    answer: 'Sim. Para perda de gordura, o foco costuma envolver déficit calórico, saciedade e adesão. Para ganho de massa muscular, entram ajustes de energia, proteínas, carboidratos, horários de treino e recuperação. Tudo depende da avaliação individual.'
  },
  {
    id: 'faq-5',
    question: 'Preciso usar suplementos para ganhar massa muscular?',
    answer: 'Não necessariamente. A prioridade é adequar a alimentação à sua realidade, orçamento, rotina e preferências. Suplementos só devem ser considerados quando houver indicação, praticidade ou benefício compatível com o caso.'
  },
  {
    id: 'faq-6',
    question: 'Em quanto tempo começo a ver resultados?',
    answer: 'Resultados variam conforme objetivo, histórico, exames, treino, adesão, sono e condições clínicas. O acompanhamento busca monitorar sinais de evolução e ajustar a estratégia quando necessário, sem prometer prazo fixo ou resultado garantido.'
  }
];
