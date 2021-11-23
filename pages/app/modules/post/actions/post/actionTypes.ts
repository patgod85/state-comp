import { IAction } from '../../../../interfaces';

export const ADD_COMMENT = 'POST/ADD_COMMENT';

export interface AddCommentAction extends IAction {
	payload: {
		text: string;
	};
}
