import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { appActions, ContentActions } from '../../actions/content';
import { ContentName } from '../../constants/ContentName';
import { IContentsState } from '../../models/ContentState';

const initialState: IContentsState = {
  artist: {},
  genre: {},
  selection: {},
  series: {},
  work: {},
  yearBest: {},
};

export const contentReducerBuilder = (actions: ContentActions, contentName?: ContentName) => {
  const reducer = reducerWithInitialState(initialState);
  return reducer
    .casesWithAction(
      [actions.getArtist.done, actions.getGenre.done, actions.getSelection.done, actions.getSeries.done],
      (state, action) => ({ ...state, ...action.payload.result })
    )
    .caseWithAction(actions.getArtist.done, (state, action) => ({
      ...state,
      artist: { ...state.artist, doc: action.payload.result },
    }))
    .caseWithAction(actions.getArtists.done, (state, action) => ({
      ...state,
      artist: { ...state.artist, list: action.payload.result },
    }))
    .caseWithAction(actions.getGenre.done, (state, action) => ({
      ...state,
      genre: { ...state.genre, doc: action.payload.result },
    }))
    .caseWithAction(actions.getGenres.done, (state, action) => ({
      ...state,
      genre: { ...state.genre, list: action.payload.result },
    }))
    .caseWithAction(actions.getSelection.done, (state, action) => ({
      ...state,
      selection: { ...state.selection, doc: action.payload.result },
    }))
    .caseWithAction(actions.getSelections.done, (state, action) => ({
      ...state,
      selection: { ...state.selection, list: action.payload.result },
    }))
    .caseWithAction(actions.getSeries.done, (state, action) => ({
      ...state,
      series: { ...state.series, doc: action.payload.result },
    }))
    .caseWithAction(actions.getSeriesContent.done, (state, action) => ({
      ...state,
      series: { ...state.series, content: action.payload.result },
    }))
    .caseWithAction(actions.getSeriesList.done, (state, action) => ({
      ...state,
      series: { ...state.series, list: action.payload.result },
    }))
    .caseWithAction(actions.getWork.done, (state, action) => ({
      ...state,
      work: { ...state.work, doc: action.payload.result },
    }))
    .caseWithAction(actions.getWorks.done, (state, action) => ({
      ...state,
      work: { ...state.work, list: action.payload.result },
    }))
    .caseWithAction(actions.getYearBest.done, (state, action) => ({
      ...state,
      yearBest: { ...state.yearBest, doc: action.payload.result },
    }))
    .caseWithAction(actions.getYearBests.done, (state, action) => ({
      ...state,
      yearBest: { ...state.yearBest, list: action.payload.result },
    }))
    .caseWithAction(actions.prepareGenrePage.done, (state, action) => ({
      ...state,
      artist: { ...state.artist, list: action.payload.result.artist.list },
      genre: { ...state.genre, doc: action.payload.result.genre.doc },
    }));
};

export const appReducer = contentReducerBuilder(appActions);
