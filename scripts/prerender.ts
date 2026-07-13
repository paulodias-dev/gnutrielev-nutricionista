import fs from 'node:fs';
import path from 'node:path';
import { FAQ_ITEMS, LEGAL_LINKS, NUTRI_PROFILE, SPECIALTIES } from '../src/utils/data';
import { seoConfig } from '../src/config/seo';

const distDir = path.resolve(process.cwd(), 'dist');
const indexPath = path.join(distDir, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const rootContainer = (markup: string) => `<div id="root">${markup}</div>`;

const replaceRoot = (html: string, markup: string) => html.replace('<div id="root"></div>', rootContainer(markup));

const replaceTag = (html: string, pattern: RegExp, replacement: string) => {
  if (!pattern.test(html)) {
    return html;
  }

  return html.replace(pattern, replacement);
};

const updateMeta = (html: string, title: string, description: string, canonicalPath: string) => {
  const canonicalUrl = `${seoConfig.baseUrl}${canonicalPath === '/' ? '' : canonicalPath}`;

  return [
    (value: string) => value.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(title)}</title>`),
    (value: string) => replaceTag(value, /<meta\b(?=[^>]*\bname=["']description["'])[^>]*>/i, `<meta name="description" content="${escapeHtml(description)}" />`),
    (value: string) => replaceTag(value, /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i, `<link rel="canonical" href="${canonicalUrl}" />`),
    (value: string) => replaceTag(value, /<meta\b(?=[^>]*\bproperty=["']og:title["'])[^>]*>/i, `<meta property="og:title" content="${escapeHtml(title)}" />`),
    (value: string) => replaceTag(value, /<meta\b(?=[^>]*\bproperty=["']og:description["'])[^>]*>/i, `<meta property="og:description" content="${escapeHtml(description)}" />`),
    (value: string) => replaceTag(value, /<meta\b(?=[^>]*\bproperty=["']og:url["'])[^>]*>/i, `<meta property="og:url" content="${canonicalUrl}" />`),
    (value: string) => replaceTag(value, /<meta\b(?=[^>]*\bname=["']twitter:title["'])[^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(title)}" />`),
    (value: string) => replaceTag(value, /<meta\b(?=[^>]*\bname=["']twitter:description["'])[^>]*>/i, `<meta name="twitter:description" content="${escapeHtml(description)}" />`),
  ].reduce((value, transform) => transform(value), html);
};

const homeMarkup = `
  <main data-prerendered="true">
    <section>
      <p>Atendimento nutricional online e presencial em Aracaju-SE</p>
      <h1>Nutricionista em Aracaju e online para emagrecimento e ganho de massa muscular</h1>
      <p>${escapeHtml(seoConfig.description)}</p>
      <p>${escapeHtml(NUTRI_PROFILE.consultationDisclaimer)}</p>
      <p>Responsável técnica: ${escapeHtml(NUTRI_PROFILE.fullName)} — ${escapeHtml(NUTRI_PROFILE.crn)}</p>
      <p>Endereço: ${escapeHtml(NUTRI_PROFILE.address)}</p>
      <p>E-mail: ${escapeHtml(NUTRI_PROFILE.email)}</p>
      <p>Instagram: ${escapeHtml(NUTRI_PROFILE.instagram)}</p>
    </section>
    <section>
      <h2>Objetivos do atendimento nutricional</h2>
      <ul>
        ${SPECIALTIES.map((item) => `<li><strong>${escapeHtml(item.title)}</strong>: ${escapeHtml(item.shortDescription)}</li>`).join('')}
      </ul>
    </section>
    <section>
      <h2>Perguntas frequentes</h2>
      ${FAQ_ITEMS.map((item) => `<article><h3>${escapeHtml(item.question)}</h3><p>${escapeHtml(item.answer)}</p></article>`).join('')}
    </section>
    <section>
      <h2>Documentos legais</h2>
      <ul>
        ${LEGAL_LINKS.map((item) => `<li><a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a></li>`).join('')}
      </ul>
    </section>
  </main>
`;

const legalPages = [
  {
    path: '/politica-de-privacidade',
    title: 'Política de Privacidade | GNutriElev',
    description: 'Entenda como a GNutriElev trata dados pessoais em contatos, agendamentos e atendimento nutricional.',
    heading: 'Política de Privacidade',
  },
  {
    path: '/termos-de-uso',
    title: 'Termos de Uso | GNutriElev',
    description: 'Condições de uso do site GNutriElev, limites do conteúdo informativo e regras de contato.',
    heading: 'Termos de Uso',
  },
  {
    path: '/politica-de-cookies',
    title: 'Política de Cookies | GNutriElev',
    description: 'Informações sobre uso de cookies e tecnologias similares no site GNutriElev.',
    heading: 'Política de Cookies',
  },
];

const updatedHomeHtml = replaceRoot(updateMeta(indexHtml, seoConfig.title, seoConfig.description, '/'), homeMarkup);
fs.writeFileSync(indexPath, updatedHomeHtml);

for (const page of legalPages) {
  const legalMarkup = `
    <main data-prerendered="true">
      <article>
        <h1>${escapeHtml(page.heading)}</h1>
        <p>${escapeHtml(page.description)}</p>
        <p>Última atualização: 30 de junho de 2026.</p>
        <p>Canal de privacidade: ${escapeHtml(NUTRI_PROFILE.privacyEmail)}</p>
      </article>
    </main>
  `;
  const pageHtml = replaceRoot(updateMeta(indexHtml, page.title, page.description, page.path), legalMarkup);
  const pageDir = path.join(distDir, page.path.replace(/^\//, ''));
  fs.mkdirSync(pageDir, { recursive: true });
  fs.writeFileSync(path.join(pageDir, 'index.html'), pageHtml);
}
