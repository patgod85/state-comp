import { EXPAND_POST, ExpandPostAction } from './actionTypes';

export const expandPost = (id: number): ExpandPostAction => ({
	type: EXPAND_POST,
	payload: { id },
});
