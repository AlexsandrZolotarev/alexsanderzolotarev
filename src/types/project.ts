export type ProjectId =
  | 'infologistic24'
  | 'kaskad-davtian'
  | 'modular-buildings'
  | 'aiscreen'
  | 'blossom'
  | 'renda'
  | 'cleverrenta';

export type Project = {
  id: ProjectId;
  image: string;
  color: string;
  title: string;
  link: string;
  images?: string[];
};
