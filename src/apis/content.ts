import { IArtistRequest, IArtistsRequest } from '../models/request/ArtistRequest';
import { IGenreRequest, IGenresRequest } from '../models/request/GenreRequest';
import { ISelectionRequest, ISelectionsRequest } from '../models/request/SelectionRequest';
import { ISeriesListRequest, ISeriesRequest } from '../models/request/SeriesRequest';
import { IWorkRequest, IWorksRequest } from '../models/request/WorkRequest';
import { IYearBestRequest, IYearBestsRequest } from '../models/request/YearBestRequest';
import { API_BASE_URL, get } from './api';

const baseUrl = API_BASE_URL;

export interface ContentApis {
  getArtists: (req: IArtistsRequest) => Promise<any>;
  getGenres: (req: IGenresRequest) => Promise<any>;
  getSelections: (req: ISelectionsRequest) => Promise<any>;
  getSeriesList: (req: ISeriesListRequest) => Promise<any>;
  getWorks: (req: IWorksRequest) => Promise<any>;
  getYearBests: (req: IYearBestsRequest) => Promise<any>;

  getArtist: (req: IArtistRequest) => Promise<any>;
  getGenre: (req: IGenreRequest) => Promise<any>;
  getSelection: (req: ISelectionRequest) => Promise<any>;
  getSeries: (req: ISeriesRequest) => Promise<any>;
  getWork: (req: IWorkRequest) => Promise<any>;
  getYearBest: (req: IYearBestRequest) => Promise<any>;
}

export const contentApisBuilder = (): ContentApis => {
  const getArtists = (req: IArtistsRequest): Promise<any> => {
    const url = `${baseUrl}/json/artist/index.json`;
    return get<IArtistsRequest, any>(url, req);
  };

  const getGenres = (req: IGenresRequest): Promise<any> => {
    const url = `${baseUrl}/json/genre/index.json`;
    return get<IGenresRequest, any>(url, req);
  };

  const getSelections = (req: ISelectionsRequest): Promise<any> => {
    const url = `${baseUrl}/json/selection/index.json`;
    return get<ISelectionsRequest, any>(url, req);
  };

  const getSeriesList = (req: ISeriesListRequest): Promise<any> => {
    const url = `${baseUrl}/json/series/index.json`;
    return get<ISeriesListRequest, any>(url, req);
  };

  const getWorks = (req: IWorksRequest): Promise<any> => {
    const url = `${baseUrl}/json/works/index.json`;
    return get<IWorksRequest, any>(url, req);
  };

  const getYearBests = (req: IYearBestsRequest): Promise<any> => {
    const url = `${baseUrl}/json/yearBest/index.json`;
    return get<IYearBestsRequest, any>(url, req);
  };

  return {
    getArtists: getArtists,
    getGenres: getGenres,
    getSelections: getSelections,
    getSeriesList: getSeriesList,
    getWorks: getWorks,
    getYearBests: getYearBests,
    getArtist: (req: IArtistRequest): Promise<any> => {
      const url = `${baseUrl}/json/artist/${req.id}.json`;
      return get<IArtistRequest, any>(url, req);
    },
    getGenre: (req: IGenreRequest): Promise<any> => {
      const url = `${baseUrl}/json/genre/${req.id}.json`;
      return get<IGenreRequest, any>(url, req);
    },
    getSelection: (req: ISelectionRequest): Promise<any> => {
      const url = `${baseUrl}/json/selection/${req.id}.json`;
      return get<ISelectionRequest, any>(url, req);
    },
    getSeries: (req: ISeriesRequest): Promise<any> => {
      const url = `${baseUrl}/json/series/${req.id}.json`;
      return get<ISeriesRequest, any>(url, req);
    },
    getWork: (req: IWorkRequest): Promise<any> => {
      const url = `${baseUrl}/json/work/${req.id}.json`;
      return get<IWorkRequest, any>(url, req);
    },
    getYearBest: (req: IYearBestRequest): Promise<any> => {
      const url = `${baseUrl}/json/yearBest/${req.id}.json`;
      return get<IYearBestRequest, any>(url, req);
    },
  };
};

export const appApi = contentApisBuilder();
