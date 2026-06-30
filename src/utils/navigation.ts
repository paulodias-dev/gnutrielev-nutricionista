export const HEADER_OFFSET = 96;

interface ScrollOptions {
  updateHash?: boolean;
}

const allowedSections = new Set(['inicio', 'sobre', 'especialidades', 'depoimentos', 'faq']);

const goToHomeSection = (targetId: string) => {
  if (!allowedSections.has(targetId)) {
    return;
  }

  const safeHash = encodeURIComponent(targetId);
  window.location.assign(`/#${safeHash}`);
};

export const scrollToSection = (targetId: string, options: ScrollOptions = {}) => {
  const { updateHash = true } = options;
  const targetElement = document.getElementById(targetId);

  if (!targetElement) {
    if (updateHash) {
      goToHomeSection(targetId);
    }
    return false;
  }

  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  if (updateHash) {
    window.history.pushState(null, '', `#${targetId}`);
  }

  const heading = targetElement.querySelector<HTMLElement>('h1, h2, h3');
  if (heading) {
    heading.setAttribute('tabindex', '-1');
    window.setTimeout(() => heading.focus({ preventScroll: true }), 350);
  }

  return true;
};

export const scrollToTop = () => {
  if (window.location.pathname !== '/') {
    goToHomeSection('inicio');
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  window.history.pushState(null, '', '#inicio');
};
