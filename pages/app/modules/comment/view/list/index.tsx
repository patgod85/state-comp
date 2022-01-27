import React from 'react';

import styles from './styles.module.css';
import { Comment } from '../../model/post.model';

export interface IProps {
	comments: Comment[];
}

export const CommentsList = (props: IProps) => {
	const { comments } = props;
	return (
		<div className={styles.list}>
			<div className={styles.title}>Комментарии:</div>
			{comments.map((comment, index) => (
				<div key={index} className={styles.comment}>
					<strong>{comment.time}</strong> {comment.body}
				</div>
			))}
		</div>
	);
};
