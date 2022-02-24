import { createSlice, SliceCaseReducers, PayloadAction } from '@reduxjs/toolkit';

import { Post } from '../../../modules/post/model/post.model';
import { IPageState } from './types';

export const defaultState: IPageState = {
	static: {
		post: undefined,
	},
	userState: {
		comments: [],
	},
};

export const postSlice = createSlice<IPageState, SliceCaseReducers<IPageState>>({
	name: 'post',
	initialState: defaultState,
	reducers: {
		loadInitialData: (state, action: PayloadAction<{ post: Post }>) => {
			const { payload } = action;
			state.static = payload;
		},
		addComment: (state, action: PayloadAction<{ text: string }>) => {
			const { text } = action.payload;

			const now = new Date();

			state.userState.comments.push({
				body: text,
				time: `${now.getHours()}:${now.getMinutes()}`,
			});
		},
	},
});

// Action creators are generated for each case reducer function
export const { loadInitialData, addComment } = postSlice.actions;

export default postSlice.reducer;
