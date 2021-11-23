import { Post } from '../model/post.model';
import { EXPAND_POST, ExpandPostAction } from '../actions/postsList/actionTypes';

export interface IState {
	posts: Post[];
	userState: {
		expanded: number[];
	};
}

export const defaultState: IState = {
	posts: [],
	userState: {
		expanded: [],
	},
};

export const postsReducer = (state: IState = defaultState, action: any) => {
	switch (action.type) {
		case EXPAND_POST: {
			const { id } = (action as ExpandPostAction).payload;

			let expanded;

			if (state.userState.expanded.includes(id)) {
				expanded = state.userState.expanded.filter(_id => _id !== id);
			} else {
				expanded = {
					...state.userState.expanded,
					id,
				};
			}

			return {
				...state,
				userState: {
					...state.userState,
					expanded,
				},
			};
		}
	}
	return state;
};
