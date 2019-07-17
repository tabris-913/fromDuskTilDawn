import { ISider, ISiderSub } from '../models/wireframe/Sider';

export const isSider = (sider: ISider | ISiderSub): sider is ISider => Object.keys(sider).includes('key');

export const isSiderSub = (sider: ISider | ISiderSub): sider is ISiderSub => Object.keys(sider).includes('title');
