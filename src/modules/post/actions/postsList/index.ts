import { Post } from '../../model/post.model';
import { EXPAND_POST, ExpandPostAction, LOAD_INITIAL_DATA, LoadInitialDataAction } from './actionTypes';

export const loadInitialData = ({ posts }: { posts: Post[] }): LoadInitialDataAction => ({
	type: LOAD_INITIAL_DATA,
	payload: { posts },
});

export const expandPost = (id: number): ExpandPostAction => ({
	type: EXPAND_POST,
	payload: { id },
});
