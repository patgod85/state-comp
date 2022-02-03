import { createSelector } from 'reselect';

import { IState } from '../reducers/types';

export const id = (_: IState) => _;

export const getPosts = createSelector(id, state => state.posts?.static?.posts);
