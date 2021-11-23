import { ADD_COMMENT, AddCommentAction } from './actionTypes';

export const addComment = (text: string): AddCommentAction => ({
	type: ADD_COMMENT,
	payload: { text },
});
