import { Uid } from '../Id';

export default interface IContent<U extends Uid> {
  uid: U;
  name: string;
}

export interface IContentListContent<U extends Uid> {
  uid?: U;
  name: string;
}

export interface IContentList {}
