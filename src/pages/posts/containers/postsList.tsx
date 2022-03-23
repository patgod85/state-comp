import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { expandPost } from '../../../modules/post/actions/postsList';
import { PostsListView } from '../../../modules/post/view/list';
import { getExpanded, getPosts } from '../selectors';

export const PostsListContainer = () => {
	const posts = useSelector(getPosts);
	const expandedPosts = useSelector(getExpanded);
	const dispatch = useDispatch();

	const onExpandPost = React.useCallback(
		(id: number) => {
			dispatch(expandPost(id));
		},
		[dispatch],
	);

	return <PostsListView posts={posts} expandedPosts={expandedPosts} onExpandPost={onExpandPost} />;
};
