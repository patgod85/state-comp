import {
	EXPAND_POST,
	ExpandPostAction,
	LOAD_INITIAL_DATA,
	LoadInitialDataAction,
} from '../../../modules/post/actions/postsList/actionTypes';
import { Post } from '../../../modules/post/model/post.model';

export interface IState {
	static: {
		posts: Post[];
	};
	userState: {
		expanded: number[];
	};
}

export const defaultState: IState = {
	static: {
		posts: [],
	},
	userState: {
		expanded: [],
	},
};

export const postsReducer = (state: IState = defaultState, action: any) => {
	switch (action.type) {
		case LOAD_INITIAL_DATA: {
			const payload = (action as LoadInitialDataAction).payload;

			return {
				...state,
				static: payload,
			};
		}
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
