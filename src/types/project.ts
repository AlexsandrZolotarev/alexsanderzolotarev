export type ProjectId =
  | 'master-blacksmith'
  | 'rivo-agency'
  | 'future-tech'
  | 'four-horses-club'
  | 'hydra'
  | 'celestia';

export type Project = {
  id: ProjectId;
  image: string;
  color: string;
  title: string;
};
