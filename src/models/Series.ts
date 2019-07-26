export interface ISeriesSong {
  artist?: string[];
  disk_no?: number;
  track_no: number;
  comment: string;
  explanation?: string;
}

export interface ISeriesWork {
  artist?: string[];
  uid: string;
  comment?: string;
  song_list: ISeriesSong[];
}

export interface ISeriesContent {
  title: string;
  description: string;
  subtitle?: string;
  work_list: ISeriesWork[];
  disabled?: boolean;
  uid: string;
}

export interface ISeries {
  uid: string;
  name: string;
  content: string[];
  disabled?: boolean;
}
