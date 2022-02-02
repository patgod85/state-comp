import React from 'react';
import { useSelector } from 'react-redux';

import { DetailView } from '../../../modules/post/view/details';
import { getPost } from '../selectors';

export const PostDetailViewContainer = () => {
	const post = useSelector(getPost);

	if (!post) {
		return null;
	}

	return <DetailView post={post} />;
};
