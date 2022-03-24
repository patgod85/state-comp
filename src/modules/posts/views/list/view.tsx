import React from 'react';

import { Post as PostEntity } from '../../entities/post.entity';
import { IPostExpanded } from '../../entities/postExpanded.entity';
import { Post } from '../listItem';

export interface IProps {
	posts: PostEntity[];
	expandedPost?: IPostExpanded;
	openPost: (id: number) => void;
}

export const Posts = (props: IProps) => {
	const { posts, expandedPost, openPost } = props;

	return (
		<>
			Posts:
			{posts?.map(x => (
				<Post key={x.id} expandedPost={expandedPost} post={x} openPost={openPost} />
			))}
		</>
	);
};
