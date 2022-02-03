import React from 'react';

import styles from './styles.module.css';
import { useRouter } from 'next/router';
import { Post } from '../../model/post.model';

export interface IProps {
	post: Post;
}

export const ListItemView = (props: IProps) => {
	const { post } = props;
	const router = useRouter();

	const { id, title } = post;

	const onMoveToPost = React.useCallback(() => {
		router.push(`/posts/${id}`);
	}, [id, router]);

	return (
		<div className={styles.card} onClick={onMoveToPost}>
			<ul>
				<li>id: {id}</li>
				<li>title: {title}</li>
			</ul>
		</div>
	);
};
