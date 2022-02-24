import React from 'react';
import { useDispatch } from 'react-redux';

import { CommentForm } from '../../../modules/comment/view/form';
import { addComment } from '../slices/postSlice';

export const CommentsFormContainer = () => {
	const dispatch = useDispatch();

	const onAddComment = React.useCallback(
		(text: string) => {
			dispatch(addComment(text));
		},
		[dispatch],
	);
	return <CommentForm addComment={onAddComment} />;
};
