import { useRouter } from 'next/router';
import React from 'react';

import { Post } from '../../model/post.model';
import styles from './styles.module.css';

export interface IProps {
	post: Post;
	isExpanded: boolean;

	onExpandPost: (id: number) => void;
}

export const ListItemView = (props: IProps) => {
	const { post, isExpanded, onExpandPost: onExpandPostOuter } = props;
	const router = useRouter();

	const { id, title, body } = post;

	const onMoveToPost = React.useCallback(() => {
		router.push(`/posts/${id}`);
	}, [id, router]);

	const onExpandPost = React.useCallback(() => {
		onExpandPostOuter(id);
	}, [onExpandPostOuter, id]);

	return (
		<div className={styles.card}>
			<ul>
				<li>
					id: {id} <button onClick={onMoveToPost}>Перейти</button>
				</li>
				<li>title: {title}</li>
				{isExpanded && <li>body: {body}</li>}

				{isExpanded && (
					<li>
						<button onClick={onExpandPost}>&and; Свернуть</button>
					</li>
				)}
				{!isExpanded && (
					<li>
						<button onClick={onExpandPost}>&or; Развернуть</button>
					</li>
				)}
			</ul>
		</div>
	);
};
