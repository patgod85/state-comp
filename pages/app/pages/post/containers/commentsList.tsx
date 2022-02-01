import React from 'react';
import { useSelector } from 'react-redux';

import { CommentsList } from '../../../modules/comment/view/list';
import { getComments } from '../selectors/comments';

export const CommentsListContainer = () => {
	const comments = useSelector(getComments);

	return <CommentsList comments={comments} />;
};
