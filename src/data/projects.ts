import { Project, ProjectId } from '@/types/project';
import kuznec from '@/images/Projects/Blacksmith.webp';
import RivoAgency from '@/images/Projects/Rivo.webp';
import futuretech from '@/images/Projects/FutureTech.webp';
import fourHorsesClub from '@/images/Projects/Four-Horses.webp';
import Hydra from '@/images/Projects/HYDRA.webp';
import Celestia from '@/images/Projects/Celestia.webp';
import Blossom from '@/images/Projects/Blossom.webp';
import AiScreen from '@/images/Projects/AiScreen.webp';
import Kaskad from '@/images/Projects/Kascad.webp';
import GeneratePolygons from '@/images/Projects/GeneratePolygons.webp';
import ModularBuildings from '@/images/Projects/ModularBuildings.webp';
function projectImages(project: string, count: number) {
  return Array.from(
    { length: count },
    (_, i) => `/src/images/Projects/${project}/${project}${i + 1}.webp`,
  );
}
export const PROJECTS: Project[] = [
  {
    id: 'master-blacksmith',
    image: kuznec,
    images: projectImages('Kuznec12', 4),
    color: '#F88335',
    title: 'Master Blacksmith',
    link: 'https://alexsandrzolotarev.github.io/Kuznec12',
  },
  {
    id: 'rivo-agency',
    image: RivoAgency,
    images: projectImages('RivoAgency', 13),
    color: '#FDDD0A',
    title: 'Rivo Agency',
    link: 'https://alexsandrzolotarev.github.io/RivoAgency',
  },
  {
    id: 'future-tech',
    image: futuretech,
    images: projectImages('Future', 8),
    color: '#FFD11A',
    title: 'Future Tech',
    link: 'https://alexsandrzolotarev.github.io/futuretech',
  },
  {
    id: 'four-horses-club',
    image: fourHorsesClub,
    images: projectImages('4-horses', 4),
    color: '#E9DED4',
    title: 'Four Horses Club',
    link: 'https://alexsandrzolotarev.github.io/The-4-Horse-Club',
  },
  {
    id: 'hydra',
    image: Hydra,
    images: [],
    color: '#C0B7E8',
    title: 'Hydra',
    link: '',
  },
  {
    id: 'celestia',
    image: Celestia,
    images: [],
    color: '#422862',
    title: 'Celestia',
    link: '',
  },
  {
    id: 'Generator Polygons',
    image: GeneratePolygons,
    images: projectImages('GenaratePolygons', 1),
    color: '#910023',
    title: 'Generator Polygons',
    link: 'https://alexsandrzolotarev.github.io/GeneratorPolygons',
  },
  {
    id: 'Kaskad Davtian',
    image: Kaskad,
    images: projectImages('kaskad', 10),
    color: '#b18e57',
    title: 'Kaskad  Davtian',
    link: 'https://kascadspb.ru',
  },
  {
    id: 'Blossom',
    image: Blossom,
    images: projectImages('blossom', 2),
    color: 'white',
    title: 'Blossom',
    link: 'https://blossom-blinds.ru/',
  },
  {
    id: 'Aiscreen',
    image: AiScreen,
    images: projectImages('Aiscreen', 10),
    color: '#0071e2',
    title: 'Aiscreen',
    link: 'https://www.aiscreen.io/digital-signage-software-free-trial/',
  },
  {
    id: 'Modular Buildings',
    image: ModularBuildings,
    images: projectImages('ModularBuild', 6),
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
