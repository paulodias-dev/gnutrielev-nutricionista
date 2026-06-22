export const HEADER_OFFSET = 96;

export const scrollToSection = (targetId: string) => {
  const targetElement = document.getElementById(targetId);

  if (!targetElement) {
    return false;
  }

  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  window.history.replaceState(null, '', `#${targetId}`);
  return true;
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  window.history.replaceState(null, '', '#inicio');
};
