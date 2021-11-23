import { IAction } from '../../../../interfaces';

export const EXPAND_POST = 'POSTS_LIST/EXPAND_POST';

export interface ExpandPostAction extends IAction {
	payload: {
		id: number;
	};
}
