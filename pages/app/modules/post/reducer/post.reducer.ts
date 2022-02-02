import { AddCommentAction, ADD_COMMENT } from '../../comment/actions/form/actionTypes';
import { Comment } from '../../comment/model/comment.model';
import { LOAD_INITIAL_DATA, LoadInitialDataAction } from '../actions/post/actionTypes';
import { Post } from '../model/post.model';

export interface IState {
	static: {
		post?: Post;
	};
	userState: {
		comments: Comment[];
	};
}

export const defaultState: IState = {
	static: {
		post: undefined,
	},
	userState: {
		comments: [],
	},
};

export const postReducer = (state: IState = defaultState, action: any) => {
	switch (action.type) {
		case LOAD_INITIAL_DATA: {
			const payload = (action as LoadInitialDataAction).payload;

			return {
				...state,
				static: payload,
			};
		}
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
