import IArtist, { IArtistList } from '../models/contents/artist';
import IGenre, { IGenreList } from '../models/contents/genre';
import ISelection, { ISelectionList } from '../models/contents/selection';
import ISeries, { ISeriesContent, ISeriesList } from '../models/contents/series';
import { ITopTopic } from '../models/contents/top';
import IWork, { IWorkList } from '../models/contents/work';
import IYearBest, { IYearBestList } from '../models/contents/yearBest';
import IArtistRequest, { IArtistListRequest } from '../models/requests/ArtistRequest';
import IGenreRequest, { IGenreListRequest } from '../models/requests/GenreRequest';
import ISelectionRequest, { ISelectionListRequest } from '../models/requests/SelectionRequest';
import ISeriesRequest, { ISeriesListRequest } from '../models/requests/SeriesRequest';
import IWorkRequest, { IWorkListRequest } from '../models/requests/WorkRequest';
import IYearBestRequest, { IYearBestListRequest } from '../models/requests/YearBestRequest';
import { API_BASE_URL, get } from './api';

const baseUrl = API_BASE_URL;

export interface ContentApis {
  getArtists: (req: IArtistListRequest) => Promise<IArtistList>;
  getGenres: (req: IGenreListRequest) => Promise<IGenreList>;
  getSelections: (req: ISelectionListRequest) => Promise<ISelectionList>;
  getSeriesList: (req: ISeriesListRequest) => Promise<ISeriesList>;
  getWorks: (req: IWorkListRequest) => Promise<IWorkList>;
  getYearBests: (req: IYearBestListRequest) => Promise<IYearBestList>;

  getArtist: (req: IArtistRequest) => Promise<IArtist>;
  getGenre: (req: IGenreRequest) => Promise<IGenre>;
  getSelection: (req: ISelectionRequest) => Promise<ISelection>;
  getSeriesContent: (req: ISeriesRequest) => Promise<ISeriesContent>;
  getSeries: (req: ISeriesRequest) => Promise<ISeries>;
  getWork: (req: IWorkRequest) => Promise<IWork>;
  getYearBest: (req: IYearBestRequest) => Promise<IYearBest>;

  getTopTopic: (req: void) => Promise<ITopTopic>;
}
// [TODO] add score, reviewSchdule, newRelease

export const contentApisBuilder = (): ContentApis => {
  const getArtists = (req: IArtistListRequest) => {
    const url = `${baseUrl}/json/artists/index.json`;
    return get<IArtistListRequest, IArtistList>(url, req);
  };

  const getGenres = (req: IGenreListRequest) => {
    const url = `${baseUrl}/json/genres/index.json`;
    return get<IGenreListRequest, IGenreList>(url, req);
  };

  const getSelections = (req: ISelectionListRequest) => {
    const url = `${baseUrl}/json/selections/index.json`;
    return get<ISelectionListRequest, ISelectionList>(url, req);
  };

  const getSeriesList = (req: ISeriesListRequest) => {
    const url = `${baseUrl}/json/series/index.json`;
    return get<ISeriesListRequest, ISeriesList>(url, req);
  };

  const getWorks = (req: IWorkListRequest) => {
    const url = `${baseUrl}/json/artists/${req.artistUid}/works/index.json`;
    const url2 = `${baseUrl}/json/works/${req.artistUid}/index.json`;
    return get<IWorkListRequest, IWorkList>(url, req).catch(() => get<IWorkListRequest, IWorkList>(url2, req));
  };

  const getYearBests = (req: IYearBestListRequest) => {
    const url = `${baseUrl}/json/yearbests/index.json`;
    return get<IYearBestListRequest, IYearBestList>(url, req);
  };

  return {
    getArtists: getArtists,
    getGenres: getGenres,
    getSelections: getSelections,
    getSeriesList: getSeriesList,
    getWorks: getWorks,
    getYearBests: getYearBests,
    getArtist: (req: IArtistRequest) => {
      const url = `${baseUrl}/json/artists/${req.artistUid}/info.json`;
      return get<IArtistRequest, IArtist>(url, req);
    },
    getGenre: (req: IGenreRequest) => {
      const url = `${baseUrl}/json/genres/${req.genreUid}.json`;
      return get<IGenreRequest, IGenre>(url, req);
    },
    getSelection: (req: ISelectionRequest) => {
      const url = `${baseUrl}/json/selections/${req.selectionUid}.json`;
      return get<ISelectionRequest, ISelection>(url, req);
    },
    getSeriesContent: (req: ISeriesRequest) => {
      const url = `${baseUrl}/json/series/${req.seriesUid}/${req.contentUid}.json`;
      return get<ISeriesRequest, ISeriesContent>(url, req);
    },
    getSeries: (req: ISeriesRequest) => {
      const url = `${baseUrl}/json/series/${req.seriesUid}/index.json`;
      return get<ISeriesRequest, ISeries>(url, req);
    },
    getWork: (req: IWorkRequest) => {
      const url = `${baseUrl}/json/artists/${req.artistUid}/works/${req.workUid}.json`;
      const url2 = `${baseUrl}/json/works/${req.artistUid}/${req.workUid}.json`;
      return get<IWorkRequest, IWork>(url, req).catch(() => get<IWorkRequest, IWork>(url2, req));
    },
    getYearBest: (req: IYearBestRequest) => {
      const url = `${baseUrl}/json/yearbests/${req.yearBestUid}.json`;
      return get<IYearBestRequest, IYearBest>(url, req);
    },
    getTopTopic: (req: void) => {
      const url = `${baseUrl}/json/top.json`;
      return get<void, ITopTopic>(url, req);
    },
  };
};

export const appApi = contentApisBuilder();
