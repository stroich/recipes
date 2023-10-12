export enum Folders {
  Recipes = '_source/_recipes',
  Posts = '_source/_blog',
}

export interface IArticle {
  title: string;
  subtitle: string;
  author: string;
  language: string;
  weight: number;
  slug: string;
  image: string;
  video: string;
}
