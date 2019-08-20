export interface IWork {
  title: string;
  date: string;
  year: number;
  description: string;
  artist: string[];
  list: string[][];
  comment: string;
  uid: string;
  img?: string[];
  rate?: number;
  review_done?: boolean;
}

export interface ISong {
  title: string;
  artist: string;
  work: IWork[];
}
