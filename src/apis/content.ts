import IArtistRequest, { IArtistListRequest } from '../models/requests/ArtistRequest';
import IGenreRequest, { IGenreListRequest } from '../models/requests/GenreRequest';
import ISelectionRequest, { ISelectionListRequest } from '../models/requests/SelectionRequest';
import ISeriesRequest, { ISeriesListRequest } from '../models/requests/SeriesRequest';
import IWorkRequest, { IWorkListRequest } from '../models/requests/WorkRequest';
import IYearBestRequest, { IYearBestListRequest } from '../models/requests/YearBestRequest';
import { API_BASE_URL, get } from './api';

const baseUrl = API_BASE_URL;

export interface ContentApis {
  getArtists: (req: IArtistListRequest) => Promise<any>;
  getGenres: (req: IGenreListRequest) => Promise<any>;
  getSelections: (req: ISelectionListRequest) => Promise<any>;
  getSeriesList: (req: ISeriesListRequest) => Promise<any>;
  getWorks: (req: IWorkListRequest) => Promise<any>;
  getYearBests: (req: IYearBestListRequest) => Promise<any>;

  getArtist: (req: IArtistRequest) => Promise<any>;
  getGenre: (req: IGenreRequest) => Promise<any>;
  getSelection: (req: ISelectionRequest) => Promise<any>;
  getSeries: (req: ISeriesRequest) => Promise<any>;
  getWork: (req: IWorkRequest) => Promise<any>;
  getYearBest: (req: IYearBestRequest) => Promise<any>;
}
// [TODO] add score, reviewSchdule, newRelease

export const contentApisBuilder = (): ContentApis => {
  const getArtists = (req: IArtistListRequest): Promise<any> => {
    const url = `${baseUrl}/json/artists/index.json`;
    return get<IArtistListRequest, any>(url, req);
  };

  const getGenres = (req: IGenreListRequest): Promise<any> => {
    const url = `${baseUrl}/json/genres/index.json`;
    return get<IGenreListRequest, any>(url, req);
  };

  const getSelections = (req: ISelectionListRequest): Promise<any> => {
    const url = `${baseUrl}/json/selections/index.json`;
    return get<ISelectionListRequest, any>(url, req);
  };

  const getSeriesList = (req: ISeriesListRequest): Promise<any> => {
    const url = `${baseUrl}/json/series/index.json`;
    return get<ISeriesListRequest, any>(url, req);
  };

  const getWorks = (req: IWorkListRequest): Promise<any> => {
    const url = `${baseUrl}/json/works/index.json`;
    return get<IWorkListRequest, any>(url, req);
  };

  const getYearBests = (req: IYearBestListRequest): Promise<any> => {
    const url = `${baseUrl}/json/yearbests/index.json`;
    return get<IYearBestListRequest, any>(url, req);
  };

  return {
    getArtists: getArtists,
    getGenres: getGenres,
    getSelections: getSelections,
    getSeriesList: getSeriesList,
    getWorks: getWorks,
    getYearBests: getYearBests,
    getArtist: (req: IArtistRequest): Promise<any> => {
      const url = `${baseUrl}/json/artist/${req.artistUid}.json`;
      return get<IArtistRequest, any>(url, req);
    },
    getGenre: (req: IGenreRequest): Promise<any> => {
      const url = `${baseUrl}/json/genre/${req.genreUid}.json`;
      return get<IGenreRequest, any>(url, req);
    },
    getSelection: (req: ISelectionRequest): Promise<any> => {
      const url = `${baseUrl}/json/selection/${req.selectionUid}.json`;
      return get<ISelectionRequest, any>(url, req);
    },
    getSeries: (req: ISeriesRequest): Promise<any> => {
      const url = `${baseUrl}/json/series/${req.seriesUid}.json`;
      return get<ISeriesRequest, any>(url, req);
    },
    getWork: (req: IWorkRequest): Promise<any> => {
      const url = `${baseUrl}/json/work/${req.workUid}.json`;
      return get<IWorkRequest, any>(url, req);
    },
    getYearBest: (req: IYearBestRequest): Promise<any> => {
      const url = `${baseUrl}/json/yearBest/${req.yearBestUid}.json`;
      return get<IYearBestRequest, any>(url, req);
    },
  };
};

export const appApi = contentApisBuilder();
