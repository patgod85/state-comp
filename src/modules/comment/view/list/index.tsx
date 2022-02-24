import React from 'react';

import { Comment } from '../../model/comment.model';
import styles from './styles.module.css';

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
