export interface ISeriesSong {
  artist?: string[];
  disk_no?: number;
  track_no: number;
  comment: string;
}

export interface ISeriesWork {
  artist?: string[];
  uid: string;
  comment?: string;
  song_list: ISeriesSong[];
}

export interface ISeriesContent {
  description: string;
  subtitle?: string;
  work_list: ISeriesWork[];
  disabled?: boolean;
}

export interface ISeries {
  uid: string;
  name: string;
  content: ISeriesContent[];
  disabled?: boolean;
}
