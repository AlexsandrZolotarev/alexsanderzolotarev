export type ProjectId =
  | 'master-blacksmith'
  | 'rivo-agency'
  | 'future-tech'
  | 'four-horses-club'
  | 'hydra'
  | 'celestia'
  | 'Generator Polygons'
  | 'Kaskad Davtian'
  | 'Modular Buildings'
  | 'Aiscreen'
  | 'Blossom';

export type Project = {
  id: ProjectId;
  image: string;
  color: string;
  title: string;
  link: string;
  images?: string[];
};
