import { Uid } from '../Id';

export default interface IContent<U extends Uid> {
  uid: U;
  name: string;
}

export interface IContentListContent {
  name: string;
}

export interface IContentList {}
