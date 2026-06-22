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
  patientName: string;
  age: number;
  goal: string;
  result: string;
  quote: string;
  period: string;
  rating: number;
  avatarUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio', id: 'nav-inicio' },
  { label: 'Sobre Mim', href: '#sobre', id: 'nav-sobre' },
  { label: 'Especialidades', href: '#especialidades', id: 'nav-especialidades' },
  { label: 'Depoimentos', href: '#depoimentos', id: 'nav-depoimentos' },
  { label: 'Dúvidas Frequentes', href: '#faq', id: 'nav-faq' },
];

export const NUTRI_PROFILE = {
  fullName: 'Gislene Gomes de Mendonça',
  shortName: 'Dra. Gislene Gomes',
  crn: 'CRN-3 84.215/P',
  graduation: 'Graduada em Nutrição pela Universidade do Sul de São Paulo (USP / UNIFESP-Ref)',
  postGraduation: 'Especialização em Nutrição Esportiva e Humana e Prescrição de Fitoterápicos',
  aboutTitle: 'Nutrição Integrativa com Base em Evidências Científicas',
  aboutSubtitle: 'Parcele o caminho para o seu bem-estar com planejamento prático, comendo o que você gosta, sem terrorismos nutricional.',
  whatsappPhone: '5579981425786',
  whatsappUrl: 'https://wa.me/5579981425786?text=Ol%C3%A1%2C%20Dra.%20Gislene!%20Gostaria%20de%20agendar%20uma%20consulta%20e%20saber%20mais%20detalhes%20sobre%20o%20acompanhamento%20nutricional.',
  address: 'Atendimento On-line e Presencial (Av. General Euclides Figueiredo, 425 - Japãozinho, Aracaju - SE)',
  email: 'contato@gnutrielev.com.br',
  instagram: '@g_nutrielev',
};

export const CLINIC_METRICS: Metric[] = [
  {
    value: '100%+',
    label: 'Acompanhamentos Individualizados',
    description: 'Nenhum plano é igual a outro. Criado do zero com base na sua rotina.'
  },
  {
    value: 'Sem Neuras',
    label: 'Abordagem Humanizada',
    description: 'Sem proibições drásticas. Inclua o chocolate ou o pão nos macros.'
  },
  {
    value: 'CRN Ativo',
    label: 'Segurança e Ciência',
    description: 'Formação rigorosa e registro profissional atualizado.'
  }
];

export const SPECIALTIES: Specialty[] = [
  {
    id: 'emagrecimento',
    title: 'Emagrecimento Definitivo',
    iconName: 'Apple',
    shortDescription: 'Perca gordura de forma saudável e sustentável, sem passar fome ou aderir a dietas da moda que quebram seu metabolismo.',
    detailedPoints: [
      'Cálculo preciso do déficit calórico ideal para o seu perfil.',
      'Estratégias para controle de ansiedade e fome por doces.',
      'Plano alimentar acessível com alimentos do seu dia a dia.'
    ],
    focus: 'Saúde & Estética'
  },
  {
    id: 'hipertrofia',
    title: 'Hipertrofia & Desempenho',
    iconName: 'Flame',
    shortDescription: 'Ganho de massa muscular magra, aumento de força física e melhor rendimento nos treinos (musculação, corrida, funcional).',
    detailedPoints: [
      'Ajuste inteligente de macronutrientes (proteínas, carboidratos e gorduras).',
      'Protocolos de suplementação eficiente (Creatina, Whey, Cafeína, etc.).',
      'Sincronização da alimentação com os horários de treino (Pré e pós-treino).'
    ],
    focus: 'Performance Esportiva'
  },
  {
    id: 'reeducacao',
    title: 'Reeducação Alimentar',
    iconName: 'Utensils',
    shortDescription: 'Faça as pazes com a comida. Aprenda a equilibrar jantares fora, vida social e festas com uma rotina que gera resultados.',
    detailedPoints: [
      'Análise comportamental para tratar gatilhos de compulsão ou gula.',
      'Identificação de mitos alimentares e terrorismo nutricional.',
      'Desenvolvimento de autonomia alimentar completa.'
    ],
    focus: 'Estilo de Vida'
  },
  {
    id: 'saude-intestinal',
    title: 'Saúde Gastrointestinal',
    iconName: 'Activity',
    shortDescription: 'Tratamento dietoterápico para constipação (intestino preso), gases, distensão abdominal, refluxo e melhora da microbiota.',
    detailedPoints: [
      'Protocolo FODMAPs controlado quando necessário.',
      'Prebióticos e probióticos individuais sugeridos sob demanda.',
      'Adequação de fibras estruturada com volume de hidratação customizado.'
    ],
    focus: 'Qualidade de Vida'
  },
  {
    id: 'estilo-vida',
    title: 'Nutrição para Mulheres',
    iconName: 'Sparkles',
    shortDescription: 'Foco na regulação hormonal feminina, tratamento dietético para SOP, sintomas de TPM e melhora da pele, unhas e cabelos.',
    detailedPoints: [
      'Ajuste de minerais críticos (Zinco, Ferro, Magnésio) e vitaminas vitais.',
      'Suporte para ciclo menstrual equilibrado sem oscilações drásticas.',
      'Estratégias anti-inflamatórias naturais na rotina diária.'
    ],
    focus: 'Equilíbrio Hormonal'
  },
  {
    id: 'foco-mental',
    title: 'Nutrição Mental & Energia',
    iconName: 'Brain',
    shortDescription: 'Melhore seus níveis diários de clareza mental, energia, foco intelectual no trabalho e qualidade do sono através de nutrientes sinérgicos.',
    detailedPoints: [
      'Alimentos ricos em precursores de dopamina e serotonina.',
      'Configurações de café e fitoterápicos de alta estabilidade.',
      'Mitigação da fadiga mental crônica do estilo de vida corporativo.'
    ],
    focus: 'Performance no Dia a Dia'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'Mariana Silveira',
    age: 28,
    goal: 'Combater a SOP e emagrecer',
    result: '-8kg em 3 meses com exames perfeitamente regulados',
    quote: 'A Dra. Gislene mudou minha relação com a comida. Eu vinha de dietas de 800kcal onde passava mal. Com ela, comi arroz, feijão, pão brioche e meu resultado foi mil vezes melhor. Indico de olhos fechados!',
    period: 'Paciente há 4 meses',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 'test-2',
    patientName: 'Rodrigo Fontes',
    age: 34,
    goal: 'Hipertrofia e melhora no treino de corrida',
    result: '+4kg de massa muscular e redução da fadiga',
    quote: 'Por trabalhar muito, eu achava impossível cozinhar e seguir dieta. Ela adaptou tudo para marmitas práticas que compro no mercado e ajustou a suplementação. O resultado no espelho e na minha energia foi absurdo.',
    period: 'Paciente há 2 meses',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 'test-3',
    patientName: 'Letícia Albuquerque',
    age: 31,
    goal: 'Fim do inchaço e dor de estômago crónica',
    result: 'Intestino 100% regulado e saúde recuperada',
    quote: 'Fui a médicos por anos para resolver gases e refluxo e me davam omeprazol. Com as mudanças simples de fibras, limitação temporária de alguns FODMAPs e hidratação da Dra., eu melhorei em duas semanas!',
    period: 'Paciente há 3 meses',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona a consulta online?',
    answer: 'A consulta online é feita via chamada de vídeo criptografada de alta definição (Google Meet). Antes da consulta, você preenche um questionário pré-consulta detalhado. Durante a chamada, fazemos a anamnese clínica completa, avaliamos sua rotina de sono, treinos, preferências, medicamentos e montamos o plano juntos na tela, garantindo que tudo caiba na sua realidade comercial ou caseira.'
  },
  {
    id: 'faq-2',
    question: 'Como é feita a avaliação física se a consulta for online?',
    answer: 'Para o acompanhamento online, utilizamos o método de Fotos Padronizadas de Evolução acompanhadas das Principais Circunferências Corporais (ensinamos você a medir passo a passo com uma fita métrica simples). Este método é extremamente fidedigno à perda de gordura e ganho de massa, muitas vezes sendo mais visual e prático para o paciente do que o compasso de dobras cutâneas.'
  },
  {
    id: 'faq-3',
    question: 'Você aceita plano de saúde?',
    answer: 'Atendemos de forma particular, mas emitimos Recibo Técnico Completo e Nota Fiscal Eletrônica com todos os dados profissionais necessários (CRN ativo, código da consulta e CID de acompanhamento) para você solicitar o reembolso integral ou parcial no seu plano de saúde (como Bradesco, SulAmérica, Amil, Care Plus, etc.). Nós te entregamos o material mastigado.'
  },
  {
    id: 'faq-4',
    question: 'Vou receber um cardápio pronto na hora?',
    answer: 'O cardápio é desenhado junto com você durante o atendimento. Nós discutimos substituições ao vivo, combinamos as porções e analisamos o que você compra normalmente. O arquivo PDF final higienizado e a lista de compras personalizada são entregues em até 24 a 48 horas úteis diretamente no seu WhatsApp e e-mail.'
  },
  {
    id: 'faq-5',
    question: 'Preciso gastar muito com alimentos caros e suplementos importados?',
    answer: 'Definitivamente não. A base da sua dieta de sucesso comercial será o arroz, feijão, ovos, carnes vermelhas magras ou brancas, frutas da estação, pão de fôrma comum, leite, queijo e vegetais. Suplementos são recomendados somente quando necessários pela clínica ou praticidade, utilizando marcas nacionais de altíssimo custo-benefício.'
  },
  {
    id: 'faq-6',
    question: 'O plano nutricional inclui suporte pós-consulta?',
    answer: 'Sim, esse é o nosso maior diferencial de alta performance. Você não fica desamparado após um atendimento. Nós oferecemos suporte contínuo via WhatsApp diretamente com a Dra. Gislene durante 30 dias úteis para tirar dúvidas de substituição de alimentos, compras de última hora ou adaptações.'
  }
];
