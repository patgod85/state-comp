import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PostsListView } from '../../../modules/post/view/list';
import { getPosts, getExpanded } from '../selectors';
import { expandPost } from '../slices/postsSlice';

export const PostsListContainer = () => {
	const posts = useSelector(getPosts);
	const expandedPosts = useSelector(getExpanded);
	const dispatch = useDispatch();

	const onExpandPost = React.useCallback(
		(id: number) => {
			dispatch(expandPost({ id }));
		},
		[dispatch],
	);

	return <PostsListView posts={posts} expandedPosts={expandedPosts} onExpandPost={onExpandPost} />;
};
