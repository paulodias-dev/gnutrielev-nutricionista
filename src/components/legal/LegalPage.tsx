import React from 'react';
import { SEO } from '../seo/SEO';
import { NUTRI_PROFILE } from '../../utils/data';

type LegalPageType = 'privacy' | 'terms' | 'cookies';

interface LegalPageProps {
  type: LegalPageType;
}

const lastUpdated = '30 de junho de 2026';

const pageContent = {
  privacy: {
    title: 'Política de Privacidade',
    description: 'Entenda como a GNutriElev trata dados pessoais em contatos, agendamentos e atendimento nutricional.',
    path: '/politica-de-privacidade',
    sections: [
      {
        heading: '1. Controlador e canal de contato',
        body: `Esta Política de Privacidade descreve como ${NUTRI_PROFILE.businessName}, sob responsabilidade técnica de ${NUTRI_PROFILE.fullName}, trata dados pessoais recebidos por meio do site gnutrielev.com.br, WhatsApp, e-mail e demais canais de contato. Para dúvidas ou solicitações relacionadas à privacidade, entre em contato pelo e-mail ${NUTRI_PROFILE.privacyEmail}.`,
      },
      {
        heading: '2. Dados que podem ser tratados',
        body: 'Podemos tratar dados de identificação e contato, como nome, telefone, e-mail, cidade e mensagens enviadas voluntariamente. No contexto de pré-consulta ou atendimento nutricional, também podem ser solicitadas informações de saúde, rotina, preferências alimentares, exames, medicamentos, objetivos e histórico relevante para avaliação nutricional individual.',
      },
      {
        heading: '3. Finalidades do tratamento',
        body: 'Os dados são utilizados para responder solicitações, organizar agendamentos, prestar atendimento nutricional, enviar orientações combinadas, cumprir obrigações legais ou regulatórias, emitir documentos fiscais ou recibos quando aplicável e manter registros necessários à relação profissional.',
      },
      {
        heading: '4. Compartilhamento de dados',
        body: 'Dados podem ser compartilhados com plataformas utilizadas na comunicação e atendimento, como WhatsApp, e-mail, ferramentas de videoconferência e sistemas administrativos. Também poderá haver compartilhamento quando necessário para cumprimento de obrigação legal, exercício regular de direitos ou solicitação de autoridade competente.',
      },
      {
        heading: '5. Dados sensíveis de saúde',
        body: 'Informações relacionadas à saúde recebem tratamento restrito às finalidades assistenciais e administrativas necessárias. O envio de exames, fotos, medidas ou informações clínicas deve ocorrer apenas pelos canais orientados durante o atendimento.',
      },
      {
        heading: '6. Retenção e segurança',
        body: 'Os dados são mantidos pelo período necessário para atendimento das finalidades informadas, cumprimento de obrigações legais, regulatórias e profissionais, e exercício regular de direitos. São adotadas medidas razoáveis de segurança, acesso restrito e cuidado na guarda das informações.',
      },
      {
        heading: '7. Direitos do titular',
        body: `Você pode solicitar confirmação de tratamento, acesso, correção, atualização, eliminação quando cabível, informação sobre compartilhamento e demais direitos previstos na legislação aplicável pelo canal ${NUTRI_PROFILE.privacyEmail}.`,
      },
      {
        heading: '8. Alterações desta política',
        body: 'Esta política pode ser atualizada para refletir mudanças no site, nos canais de atendimento, nas práticas internas ou na legislação aplicável. A versão vigente será sempre publicada nesta página.',
      },
    ],
  },
  terms: {
    title: 'Termos de Uso',
    description: 'Condições de uso do site GNutriElev, limites do conteúdo informativo e regras de contato.',
    path: '/termos-de-uso',
    sections: [
      {
        heading: '1. Uso do site',
        body: 'O site gnutrielev.com.br tem finalidade informativa, institucional e de contato para atendimento nutricional. Ao navegar pelo site, você concorda em utilizar as informações de forma lícita, responsável e sem comprometer a segurança, integridade ou disponibilidade da página.',
      },
      {
        heading: '2. Conteúdo de saúde',
        body: 'As informações publicadas neste site têm caráter educativo e não substituem consulta individualizada, diagnóstico médico, acompanhamento multiprofissional ou avaliação nutricional. Nenhum conteúdo deve ser interpretado como prescrição alimentar, promessa de resultado, cura ou garantia de evolução clínica.',
      },
      {
        heading: '3. Agendamento e atendimento',
        body: 'O contato pelo WhatsApp, e-mail ou Instagram não garante disponibilidade imediata de agenda. Condições, valores, prazos de entrega de materiais, formato de suporte e demais regras do acompanhamento devem ser confirmados diretamente nos canais oficiais antes da contratação.',
      },
      {
        heading: '4. Responsabilidades do usuário',
        body: 'O usuário é responsável por fornecer informações verdadeiras, completas e atualizadas, especialmente em temas relacionados a saúde, medicamentos, exames, alergias, restrições, gestação, doenças pré-existentes e demais fatores relevantes para avaliação nutricional.',
      },
      {
        heading: '5. Propriedade intelectual',
        body: 'Textos, identidade visual, layout, componentes, imagens e demais conteúdos do site são protegidos por direitos autorais e não podem ser copiados, reproduzidos ou explorados comercialmente sem autorização, salvo usos permitidos por lei.',
      },
      {
        heading: '6. Links externos',
        body: 'O site pode conter links para plataformas externas, como WhatsApp, Instagram, e-mail e ferramentas de videoconferência. A GNutriElev não controla políticas, disponibilidade ou práticas de privacidade dessas plataformas.',
      },
      {
        heading: '7. Reembolso por plano de saúde',
        body: 'Quando aplicável, poderão ser emitidos documentos com dados profissionais cabíveis. A possibilidade de reembolso depende exclusivamente da operadora, do contrato do paciente e das regras vigentes no momento da solicitação.',
      },
      {
        heading: '8. Atualização dos termos',
        body: 'Estes Termos de Uso podem ser atualizados a qualquer momento. A continuidade de navegação após alterações representa ciência da versão publicada.',
      },
    ],
  },
  cookies: {
    title: 'Política de Cookies',
    description: 'Informações sobre uso de cookies e tecnologias similares no site GNutriElev.',
    path: '/politica-de-cookies',
    sections: [
      {
        heading: '1. O que são cookies',
        body: 'Cookies são pequenos arquivos ou identificadores armazenados no navegador para permitir funcionalidades, lembrar preferências ou medir uso de páginas. Tecnologias similares podem incluir armazenamento local, pixels e scripts de terceiros.',
      },
      {
        heading: '2. Uso atual no site',
        body: 'Na versão atual, o site tem finalidade institucional e de contato. Não há formulário próprio de cadastro nem área autenticada. Caso sejam adicionadas ferramentas de analytics, pixels de publicidade, chat ou consentimento, esta política deverá ser atualizada antes da ativação.',
      },
      {
        heading: '3. Plataformas externas',
        body: 'Ao clicar em links para WhatsApp, Instagram, e-mail ou outros serviços externos, você passa a interagir com plataformas que podem utilizar cookies e tecnologias próprias, de acordo com suas respectivas políticas.',
      },
      {
        heading: '4. Como gerenciar cookies',
        body: 'Você pode bloquear ou apagar cookies diretamente nas configurações do seu navegador. O bloqueio de cookies de terceiros pode afetar recursos de plataformas externas acessadas a partir do site.',
      },
      {
        heading: '5. Atualizações',
        body: 'Esta política será revisada sempre que o site passar a utilizar novas ferramentas de mensuração, publicidade, atendimento, consentimento ou personalização.',
      },
    ],
  },
};

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const content = pageContent[type];

  return (
    <main className="flex-grow bg-slate-50 pt-32 pb-20">
      <SEO title={content.title} description={content.description} canonicalPath={content.path} />
      <article className="max-w-4xl mx-auto px-6 text-left">
        <div className="mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-emerald-800 bg-emerald-100/60 uppercase border border-emerald-200/40 mb-4">
            Legal & Compliance
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-display text-slate-900 tracking-tight">
            {content.title}
          </h1>
          <p className="mt-4 text-sm text-slate-500">Última atualização: {lastUpdated}</p>
        </div>

        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 md:p-10 space-y-8">
          {content.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">{section.heading}</h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-5 text-sm text-emerald-900 leading-relaxed">
          Para solicitações relacionadas a privacidade, dados pessoais ou atendimento, utilize o e-mail{' '}
          <a className="font-semibold underline underline-offset-2" href={`mailto:${NUTRI_PROFILE.privacyEmail}`}>
            {NUTRI_PROFILE.privacyEmail}
          </a>.
        </div>
      </article>
    </main>
  );
};
