import { Post } from '../model/post.model';
import { AddCommentAction, ADD_COMMENT } from '../actions/post/actionTypes';

export interface IState {
	post?: Post;
	userState: {
		comments: string[];
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

			return {
				...state,
				userState: {
					...state.userState,
					comments: [...state.userState.comments, text],
				},
			};
		}
	}
	return state;
};
