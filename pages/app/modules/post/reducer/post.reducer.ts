import { Post } from '../model/post.model';
import { AddCommentAction, ADD_COMMENT } from '../../comment/actions/form/actionTypes';
import { Comment } from '../../comment/model/post.model';

export interface IState {
	post?: Post;
	userState: {
		comments: Comment[];
	};
}

export const defaultState: IState = {
	post: undefined,
	userState: {
		comments: [],
	},
};

export const postReducer = (state: IState = defaultState, action: any) => {
	switch (action.type) {
		case ADD_COMMENT: {
			const { text } = (action as AddCommentAction).payload;

			const now = new Date();

			return {
				...state,
				userState: {
					...state.userState,
					comments: [
						...state.userState.comments,
						{
							body: text,
							time: `${now.getHours()}:${now.getMinutes()}`,
						},
					],
				},
			};
		}
	}
	return state;
};
