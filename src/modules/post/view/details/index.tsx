import React from 'react';

import styles from './styles.module.css';
import { Post } from '../../model/post.model';

export interface IProps {
	post: Post;
}

export const DetailView = (props: IProps) => {
	const { post } = props;

	const { title, body } = post;

	return (
		<div className={styles.post}>
			<p className={styles.title}>{title}</p>
			<p>{body}</p>
		</div>
	);
};
