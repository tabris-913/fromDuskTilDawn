import SiderRightMenu from './json/SiderRightMenu.json';
import PageName from './PageName';

import { ISider, ISiderSub } from '../models/wireframe/Sider';

export const SiderLeftMenu: Array<ISider | ISiderSub> = [
  { key: 'top', label: 'Top', toPage: PageName.TOP },
  { key: 'review', label: 'Review', toPage: PageName.REVIEW_TOP },
  {
    title: 'Content',
    items: [
      { key: 'new_release', label: 'New Release', toPage: PageName.NEW_RELEASE },
      { key: 'artists', label: 'Artists', toPage: PageName.REVIEW_ARTIST },
      { key: 'score', label: 'Score', toPage: PageName.SCORE },
      { key: 'year_best', label: 'Year Best', toPage: PageName.YEAR_BESTS },
      { key: 'selection', label: 'Selections', toPage: PageName.SELECTIONS },
      { key: 'series', label: 'Series', toPage: PageName.SERIES },
    ],
  },
  { key: 'about', label: 'About', toPage: PageName.ABOUT },
  { key: 'link', label: 'Link', toPage: PageName.LINK },
];

export { SiderRightMenu };
