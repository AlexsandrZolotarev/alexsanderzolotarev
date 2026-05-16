import type { Project, ProjectId } from '@/types/project';

// Все картинки берём из /public (никаких import)
const cover = (file: string) => `/images/Projects/${file}`;

const gallery = (folder: string, prefix: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/Projects/${folder}/${prefix}${i + 1}.webp`);

export const PROJECTS: Project[] = [
  {
    id: 'infologistic24',
    image: cover('infologistic24.webp'),
    images: gallery('infologistic24', 'infologistic24', 1),
    color: '#f2e965',
    title: 'Инфологистик 24',
    link: 'https://www.infolog24.ru/',
  },
  {
    id: 'renda',
    image: cover('RENDA.webp'),
    images: gallery('Renda', 'Renda', 3),
    color: '#b18e57',
    title: 'Renda',
    link: 'https://renda.su/',
  },
  {
    id: 'cleverrenta',
    image: cover('cleverrenta.webp'),
    images: gallery('cleverrenta', 'cleverrenta', 7),
    color: '#b18e57',
    title: 'cleverrenta',
    link: 'https://cleverrenta.ru',
  },
  {
    id: 'kaskad-davtian',
    image: cover('kaskad.webp'),
    images: gallery('kaskad', 'kaskad', 10),
    color: '#b18e57',
    title: 'Kaskad Davtian',
    link: 'https://kascadspb.ru',
  },
  {
    id: 'blossom',
    image: cover('Blossom.webp'),
    images: gallery('Blossom', 'Blossom', 2),
    color: 'white',
    title: 'Blossom',
    link: 'https://blossom-blinds.ru/',
  },
  {
    id: 'aiscreen',
    image: cover('AiScreen.webp'),
    images: gallery('Aiscreen', 'Aiscreen', 10),
    color: '#0071e2',
    title: 'Aiscreen',
    link: 'https://www.aiscreen.io/digital-signage-software-free-trial/',
  },
];

export const PROJECT_BY_ID: Record<ProjectId, Project> = Object.fromEntries(
  PROJECTS.map((p) => [p.id, p]),
) as Record<ProjectId, Project>;

export function getProject(id: string) {
  return PROJECTS.find((p) => p.id === id);
}
