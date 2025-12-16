export type ProjectId =
  | 'master-blacksmith'
  | 'rivo-agency'
  | 'future-tech'
  | 'four-horses-club'
  | 'hydra'
  | 'celestia'
  | 'generator-polygons'
  | 'kaskad-davtian'
  | 'modular-buildings'
  | 'aiscreen'
  | 'blossom';

export type Project = {
  id: ProjectId;
  image: string;
  color: string;
  title: string;
  link: string;
  images?: string[];
};
