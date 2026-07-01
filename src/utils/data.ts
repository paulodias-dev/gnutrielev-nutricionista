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
  { label: 'Especialidades', href: '#especialidades', id: 'nav-especialidades' },
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
  aboutTitle: 'Nutrição Integrativa com Base em Evidências Científicas',
  aboutSubtitle: 'Construa uma rotina alimentar possível, individualizada e compatível com seus objetivos, sem promessas irreais ou restrições extremas.',
  whatsappPhone: '5579981425786',
  whatsappUrl: 'https://wa.me/5579981425786?text=Ol%C3%A1%2C%20Gislene!%20Visitei%20o%20site%20gnutrielev.com.br%20e%20gostaria%20de%20consultar%20a%20disponibilidade%20para%20atendimento%20nutricional.',
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
    value: 'Plano individual',
    label: 'Acompanhamento personalizado',
    description: 'Condutas definidas a partir da anamnese, rotina, preferências, objetivos e contexto clínico de cada paciente.'
  },
  {
    value: 'Sem extremos',
    label: 'Abordagem humanizada',
    description: 'Educação alimentar com flexibilidade, organização e estratégias sustentáveis para o dia a dia.'
  },
  {
    value: 'CRN informado',
    label: 'Responsabilidade técnica',
    description: 'Identificação profissional visível e atendimento orientado por avaliação individual.'
  }
];

export const SPECIALTIES: Specialty[] = [
  {
    id: 'emagrecimento',
    title: 'Emagrecimento Saudável',
    iconName: 'Apple',
    shortDescription: 'Estratégias para redução de gordura e melhora de hábitos alimentares de forma gradual, segura e compatível com a rotina.',
    detailedPoints: [
      'Déficit calórico avaliado conforme histórico, rotina e sinais clínicos.',
      'Estratégias para fome, saciedade, ansiedade alimentar e organização das refeições.',
      'Plano alimentar com alimentos acessíveis e adaptações possíveis para o cotidiano.'
    ],
    focus: 'Saúde & Estética'
  },
  {
    id: 'hipertrofia',
    title: 'Hipertrofia & Desempenho',
    iconName: 'Flame',
    shortDescription: 'Ajuste alimentar para ganho de massa muscular, recuperação e rendimento, respeitando treino, rotina e avaliação individual.',
    detailedPoints: [
      'Distribuição de macronutrientes conforme objetivo, composição corporal e treino.',
      'Suplementação discutida apenas quando houver indicação e benefício prático.',
      'Organização de refeições em torno dos horários de treino e recuperação.'
    ],
    focus: 'Performance Esportiva'
  },
  {
    id: 'reeducacao',
    title: 'Reeducação Alimentar',
    iconName: 'Utensils',
    shortDescription: 'Construção de autonomia alimentar, melhora de escolhas e rotina possível, sem culpa ou terrorismo nutricional.',
    detailedPoints: [
      'Mapeamento de gatilhos alimentares e dificuldades de adesão.',
      'Orientação para escolhas em casa, trabalho, restaurantes e eventos sociais.',
      'Metas progressivas para tornar o processo mais sustentável.'
    ],
    focus: 'Estilo de Vida'
  },
  {
    id: 'saude-intestinal',
    title: 'Saúde Gastrointestinal',
    iconName: 'Activity',
    shortDescription: 'Orientação nutricional para queixas como constipação, gases, distensão abdominal e refluxo, sempre conforme avaliação.',
    detailedPoints: [
      'Ajuste gradual de fibras, hidratação e padrão alimentar.',
      'Estratégias como FODMAPs apenas quando tecnicamente pertinentes.',
      'Encaminhamento ou integração com outros profissionais quando necessário.'
    ],
    focus: 'Qualidade de Vida'
  },
  {
    id: 'estilo-vida',
    title: 'Nutrição para Mulheres',
    iconName: 'Sparkles',
    shortDescription: 'Acompanhamento alimentar para demandas femininas, composição corporal, rotina, sintomas e objetivos individuais.',
    detailedPoints: [
      'Avaliação de ingestão, exames, rotina, ciclo e sinais clínicos relevantes.',
      'Estratégias alimentares para energia, saciedade e qualidade da dieta.',
      'Condutas personalizadas sem prometer regulação hormonal ou cura.'
    ],
    focus: 'Rotina Feminina'
  },
  {
    id: 'foco-mental',
    title: 'Energia & Rotina',
    iconName: 'Brain',
    shortDescription: 'Organização alimentar para melhorar consistência, energia percebida e qualidade da rotina, considerando sono, trabalho e hábitos.',
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
    context: 'Reeducação alimentar',
    quote: 'O acompanhamento me ajudou a entender melhor minhas escolhas e a montar refeições possíveis para minha rotina, sem a sensação de estar em uma dieta impossível.',
    period: 'Relato autorizado e anonimizado',
    rating: 5,
  },
  {
    id: 'test-2',
    patientLabel: 'Paciente R.',
    context: 'Rotina e desempenho',
    quote: 'Eu tinha dificuldade de manter constância por causa do trabalho. Com ajustes simples, consegui organizar melhor compras, refeições e horários.',
    period: 'Relato autorizado e anonimizado',
    rating: 5,
  },
  {
    id: 'test-3',
    patientLabel: 'Paciente L.',
    context: 'Saúde gastrointestinal',
    quote: 'A consulta foi cuidadosa, com explicações claras e mudanças graduais. Senti mais segurança para observar meu corpo e ajustar minha alimentação.',
    period: 'Relato autorizado e anonimizado',
    rating: 5,
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona a consulta online?',
    answer: 'A consulta online é realizada por chamada de vídeo, mediante confirmação de disponibilidade e envio das orientações prévias. Antes do atendimento, poderão ser solicitadas informações sobre rotina, preferências, histórico de saúde, exames, medicamentos e objetivos, sempre para avaliação nutricional individual.'
  },
  {
    id: 'faq-2',
    question: 'Como é feita a avaliação física se a consulta for online?',
    answer: 'No atendimento online, a avaliação pode incluir relato de rotina, medidas corporais autorreferidas, fotos padronizadas quando pertinentes e outros dados enviados pelo paciente. A indicação de cada recurso depende do objetivo, da segurança e da adequação ao caso.'
  },
  {
    id: 'faq-3',
    question: 'Você aceita plano de saúde?',
    answer: 'O atendimento é particular. Quando aplicável, podem ser emitidos recibo e/ou nota fiscal com os dados profissionais cabíveis. A possibilidade de reembolso depende exclusivamente das regras da operadora e do contrato do paciente.'
  },
  {
    id: 'faq-4',
    question: 'Vou receber um cardápio pronto na hora?',
    answer: 'O plano alimentar é construído conforme a avaliação individual. Em alguns casos, as orientações iniciais são alinhadas durante a consulta e o material final é enviado posteriormente por WhatsApp ou e-mail, conforme combinado no atendimento.'
  },
  {
    id: 'faq-5',
    question: 'Preciso gastar muito com alimentos caros e suplementos importados?',
    answer: 'Não necessariamente. A prioridade é adequar a alimentação à sua realidade, orçamento, rotina e preferências. Suplementos só devem ser considerados quando houver indicação, praticidade ou benefício compatível com o caso.'
  },
  {
    id: 'faq-6',
    question: 'O plano nutricional inclui suporte pós-consulta?',
    answer: 'O formato de suporte é informado antes da contratação e pode variar conforme o tipo de acompanhamento. Quando contratado, o suporte serve para dúvidas de execução, substituições e ajustes combinados, sem substituir nova avaliação quando necessário.'
  }
];
