import { Project, ProjectId } from '@/types/project';
import kuznec from '@/images/Projects/Blacksmith.webp';
import RivoAgency from '@/images/Projects/Rivo.webp';
import futuretech from '@/images/Projects/FutureTech.webp';
import fourHorsesClub from '@/images/Projects/Four-Horses.webp';
import Hydra from '@/images/Projects/HYDRA.webp';
import Celestia from '@/images/Projects/Celestia.webp';

export const PROJECTS: Project[] = [
  {
    id: 'master-blacksmith',
    image: kuznec,
    color: '#F88335',
    title: 'Master Blacksmith',
  },
  {
    id: 'rivo-agency',
    image: RivoAgency,
    color: '#FDDD0A',
    title: 'Rivo Agency',
  },
  {
    id: 'future-tech',
    image: futuretech,
    color: '#FFD11A',
    title: 'Future Tech',
  },
  {
    id: 'four-horses-club',
    image: fourHorsesClub,
    color: '#E9DED4',
    title: 'Four Horses Club',
  },
  {
    id: 'hydra',
    image: Hydra,
    color: '#C0B7E8',
    title: 'Hydra',
  },
  {
    id: 'celestia',
    image: Celestia,
    color: '#422862',
    title: 'Celestia',
  },
];

export const PROJECT_BY_ID: Record<ProjectId, Project> = Object.fromEntries(
  PROJECTS.map((p) => [p.id, p]),
) as Record<ProjectId, Project>;

export function getProject(id: string) {
  return PROJECTS.find((p) => p.id === id);
}
