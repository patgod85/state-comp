import { Post } from '../../model/post.model';
import { LOAD_INITIAL_DATA, LoadInitialDataAction } from './actionTypes';

export const loadInitialData = ({ post }: { post: Post }): LoadInitialDataAction => ({
	type: LOAD_INITIAL_DATA,
	payload: { post },
});
