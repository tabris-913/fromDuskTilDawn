import PageName from '../constants/PageName';

export interface IListItem {
  title: string;
  description?: string;
}

export interface IListItemExtra extends IListItem {
  src?: string;
  icon?: string;
  disabled?: boolean;
}

export interface ILink extends IListItemExtra {
  address: string;
}

export interface ILocalLink extends IListItemExtra {
  address?: PageName;
}
