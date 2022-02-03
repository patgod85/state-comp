import { IAction } from '../../../../interfaces';
import { Post } from '../../model/post.model';

export const LOAD_INITIAL_DATA = 'POST/LOAD_INITIAL_DATA';

export interface LoadInitialDataAction extends IAction {
	payload: {
		posts: Post[];
	};
}

export const EXPAND_POST = 'POSTS_LIST/EXPAND_POST';

export interface ExpandPostAction extends IAction {
	payload: {
		id: number;
	};
}
