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
			<ul>
				<div>Post title: {title}</div>
				<div>Post content: {body}</div>
			</ul>
		</div>
	);
};
