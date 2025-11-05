import kuznec from '../../images/Portfolio/Kuznec12_big.webp';
import RivoAgency from '../../images/Portfolio/RivoAgancy_big.png';
import futuretech from '../../images/Portfolio/futuretech_big.png';
import fourHorsesClub from '../../images/Portfolio/Four-Horses-Club_big.webp';
const deleteFancyBox = () => {
  const fancybox = document.getElementById('fancybox');
  if (!fancybox) return;
  fancybox.classList.remove('is-visible');
  setTimeout(() => {
    fancybox.remove();
    document.documentElement.classList.remove('is-lock');
  }, 300);
};

const addEventHandlers = (fancybox: HTMLDivElement) => {
  fancybox.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') deleteFancyBox();
  });
};

const addEventHandlersMousemove = (image: HTMLImageElement) => {
  image.addEventListener('click', onZoom);
  image.addEventListener('dblclick', offZoom);
  image.addEventListener('mouseleave', offZoom);

  function onZoom(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const x = e.clientX - target.offsetLeft;
    const y = e.clientY - target.offsetTop;
    image.style.transformOrigin = `${x}px ${y}px`;
    image.style.transform = 'scale(2.5)';
  }

  function offZoom() {
    image.style.transformOrigin = `center center`;
    image.style.transform = 'scale(1)';
  }
};

const addEventHandlersViewport = (viewport: HTMLDivElement) => {
  viewport.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('fancybox__viewport')) deleteFancyBox();
  });
};

const FancyBox = (caption: string | null | undefined) => {
  if (document.getElementById('fancybox')) return;
  document.documentElement.classList.add('is-lock');

  const spinner = document.createElement('div');
  spinner.className = 'fancybox__spinner';
  document.body.appendChild(spinner);

  const fancybox = document.createElement('div');
  fancybox.className = 'fancybox';
  fancybox.id = 'fancybox';
  fancybox.tabIndex = -1;
  fancybox.setAttribute('role', 'dialog');
  fancybox.setAttribute('aria-modal', 'true');
  fancybox.setAttribute('aria-hidden', 'false');
  fancybox.setAttribute('aria-label', 'You can close the window by pressing ESC');

  const background = document.createElement('div');
  background.className = 'fancybox__background';
  fancybox.appendChild(background);

  const toolbar = document.createElement('div');
  toolbar.className = 'fancybox__toolbar';

  const closeButton = document.createElement('button');
  closeButton.className = 'fancybox__button';
  closeButton.title = 'Close';
  closeButton.tabIndex = 0;
  closeButton.addEventListener('click', deleteFancyBox);
  toolbar.appendChild(closeButton);

  const viewport = document.createElement('div');
  viewport.className = 'fancybox__viewport';
  addEventHandlersViewport(viewport);

  const content = document.createElement('div');
  content.className = 'fancybox__content';

  const image = document.createElement('img');
  debugger;
  image.src =
    caption === 'Future Tech'
      ? futuretech
      : caption === 'Rivo Agency'
        ? RivoAgency
        : caption === 'The Four Horses Club'
          ? fourHorsesClub
          : kuznec;
  image.loading = 'lazy';

  image.onload = () => {
    image.classList.add('is-loaded');
    spinner.remove();
  };

  addEventHandlersMousemove(image);
  content.appendChild(image);

  const captionDiv = document.createElement('div');
  captionDiv.className = 'fancybox__caption';
  captionDiv.textContent = caption || '';

  viewport.appendChild(content);
  viewport.appendChild(captionDiv);

  fancybox.appendChild(toolbar);
  fancybox.appendChild(viewport);
  document.body.appendChild(fancybox);

  addEventHandlers(fancybox);

  requestAnimationFrame(() => {
    fancybox.classList.add('is-visible');
  });
};

export default FancyBox;
