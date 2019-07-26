export interface IAlbums {
  uid: string;
  title: string;
  albums: string[]; // uids
}

export interface ITunes {
  // TBD
  uid: string;
  title: string;
  tunes: string[]; // uids
}

export interface IMonth {
  [x: string]: string[];
}

export interface IYearBest {
  year: number;
  covers: string[];
  albums: IAlbums[];
  tunes: ITunes[];
  month: IMonth;
  compilations: string[]; // uids
  amazingTopics: string[];
  brightestHopes: string[]; // uids
}
