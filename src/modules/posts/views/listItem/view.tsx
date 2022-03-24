import { useRouter } from 'next/router';
import React from 'react';

import { Post as PostEntity } from '../../entities/post.entity';
import { IPostExpanded } from '../../entities/postExpanded.entity';
import styles from './styles.module.css';

export interface IProps {
	post: PostEntity;
	expandedPost?: IPostExpanded;
	openPost: (id: number) => void;
}

export const Post = (props: IProps) => {
	const { post, expandedPost, openPost } = props;

	const { id, title } = post;

	const isExpanded = !!expandedPost;

	const router = useRouter();

	const onMoveToPost = React.useCallback(() => {
		router.push(`/posts/${id}`);
	}, [id, router]);

	return (
		<div className={styles.wrapper}>
			<a onClick={onMoveToPost} href="#">
				#{id}. {title}
			</a>

			{!isExpanded && (
				<button type="button" onClick={() => openPost(id)}>
					expand
				</button>
			)}

			{expandedPost && id === expandedPost.id && (
				<div className={styles.details}>
					<div>
						Comments:
						{expandedPost?.comments.map(comment => (
							<ul key={comment.id}>
								<li>{comment.body}</li>
							</ul>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
