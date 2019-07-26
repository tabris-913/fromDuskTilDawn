export interface ISeriesSong {
  disk_no?: number;
  track_no: number;
  artist?: string[];
  comment: string;
  explanation?: string;
}

export interface ISeriesWork {
  uid: string;
  artist?: string[];
  song_list: ISeriesSong[];
  comment?: string;
}

export interface ISeriesContent {
  uid: string;
  title: string;
  subtitle?: string;
  description: string;
  work_list: ISeriesWork[];
  disabled?: boolean;
}

export interface ISeries {
  uid: string;
  name: string;
  content: string[];
  disabled?: boolean;
}
