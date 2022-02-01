import React from 'react';
import { useDispatch } from 'react-redux';

import * as commentsActions from '../../../../app/modules/comment/actions/form';
import { CommentForm } from '../../../modules/comment/view/form';

export const CommentsFormContainer = () => {
	const dispatch = useDispatch();

	const addComment = React.useCallback(
		(text: string) => {
			dispatch(commentsActions.addComment(text));
		},
		[dispatch],
	);
	return <CommentForm addComment={addComment} />;
};
