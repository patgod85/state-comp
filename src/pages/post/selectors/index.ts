import { createSelector } from 'reselect';

import { IState } from '../reducers/types';

export const id = (_: IState) => _;

export const getComments = createSelector(id, state => state.post?.userState?.comments || []);

export const getPost = createSelector(id, state => state.post?.static?.post);
