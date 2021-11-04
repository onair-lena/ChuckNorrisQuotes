export type ChuckNorrisResponse = {
  categories: string;
  created_at?: Date;
  icon_url?: string;
  id: string;
  updated_at?: Date;
  url?: string;
  value: string;
};

export type SearchByKeyWordResult = {
  result: ChuckNorrisResponse[];
  total?: number;
};
