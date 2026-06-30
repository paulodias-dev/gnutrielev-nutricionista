export const HEADER_OFFSET = 96;

interface ScrollOptions {
  updateHash?: boolean;
}

export const scrollToSection = (targetId: string, options: ScrollOptions = {}) => {
  const { updateHash = true } = options;
  const targetElement = document.getElementById(targetId);

  if (!targetElement) {
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
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  window.history.pushState(null, '', '#inicio');
};
