import { createSlice, SliceCaseReducers, PayloadAction } from '@reduxjs/toolkit';

import { Post } from '../../../modules/post/model/post.model';
import { IPageState } from './types';

export const defaultState: IPageState = {
	static: {
		posts: [],
	},
	userState: {
		expanded: [],
	},
};

export const postsSlice = createSlice<IPageState, SliceCaseReducers<IPageState>>({
	name: 'posts',
	initialState: defaultState,
	reducers: {
		loadInitialData: (state, action: PayloadAction<{ posts: Post[] }>) => {
			const { payload } = action;
			state.static = payload;
		},
		expandPost: (state, action: PayloadAction<{ id: number }>) => {
			const { id } = action.payload;

			let expanded;

			if (state.userState.expanded.includes(id)) {
				expanded = state.userState.expanded.filter(_id => _id !== id);
			} else {
				expanded = [...state.userState.expanded, id];
			}

			state.userState.expanded = expanded;
		},
	},
});

// Action creators are generated for each case reducer function
export const { loadInitialData, expandPost } = postsSlice.actions;

export default postsSlice.reducer;
