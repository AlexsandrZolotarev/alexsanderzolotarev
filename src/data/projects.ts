import type { Project, ProjectId } from '@/types/project';

// Все картинки берём из /public (никаких import)
const cover = (file: string) => `/images/Projects/${file}`;

const gallery = (folder: string, prefix: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/Projects/${folder}/${prefix}${i + 1}.webp`);

export const PROJECTS: Project[] = [
  {
    id: 'master-blacksmith',
    image: cover('Blacksmith.webp'),
    images: gallery('Kuznec12', 'Kuznec12', 4),
    color: '#F88335',
    title: 'Master Blacksmith',
    link: 'https://alexsandrzolotarev.github.io/Kuznec12',
  },
  {
    id: 'rivo-agency',
    image: cover('Rivo.webp'),
    images: gallery('RivoAgency', 'RivoAgency', 13),
    color: '#FDDD0A',
    title: 'Rivo Agency',
    link: 'https://alexsandrzolotarev.github.io/RivoAgency',
  },
  {
    id: 'future-tech',
    image: cover('FutureTech.webp'),
    images: gallery('Future', 'Future', 8),
    color: '#FFD11A',
    title: 'Future Tech',
    link: 'https://alexsandrzolotarev.github.io/futuretech',
  },
  {
    id: 'four-horses-club',
    image: cover('Four-Horses.webp'),
    images: gallery('4-horses', '4-horses', 4),
    color: '#E9DED4',
    title: 'Four Horses Club',
    link: 'https://alexsandrzolotarev.github.io/The-4-Horse-Club',
  },
  {
    id: 'hydra',
    image: cover('HYDRA.webp'),
    images: [],
    color: '#C0B7E8',
    title: 'Hydra',
    link: '',
  },
  {
    id: 'celestia',
    image: cover('Celestia.webp'),
    images: [],
    color: '#422862',
    title: 'Celestia',
    link: '',
  },
  {
    id: 'generator-polygons',
    image: cover('GeneratorPolygons.webp'),
    images: gallery('GenaratePolygons', 'GenaratePolygons', 1),
    color: '#910023',
    title: 'Generator Polygons',
    link: 'https://alexsandrzolotarev.github.io/GeneratorPolygons',
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
  {
    id: 'modular-buildings',
    image: cover('ModularBuildings.webp'),
    images: gallery('ModularBuild', 'ModularBuild', 6),
    color: '#b9f558',
    title: 'Modular Buildings',
    link: 'https://project17987866.tilda.ws/',
  },
];

export const PROJECT_BY_ID: Record<ProjectId, Project> = Object.fromEntries(
  PROJECTS.map((p) => [p.id, p]),
) as Record<ProjectId, Project>;

export function getProject(id: string) {
  return PROJECTS.find((p) => p.id === id);
}
