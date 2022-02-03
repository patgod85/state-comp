import React from 'react';
import { useSelector } from 'react-redux';

import { PostsListView } from '../../../modules/post/view/list';
import { getPosts } from '../selectors';

export const PostsListContainer = () => {
	const posts = useSelector(getPosts);

	return <PostsListView posts={posts} />;
};
