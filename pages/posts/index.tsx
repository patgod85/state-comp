import axios from 'axios';
import type { InferGetServerSidePropsType } from 'next';
import React from 'react';

import styles from '../../styles/Home.module.css';
import { HeaderView as Header, PAGE } from '../app/modules/header/view';
import { loadInitialData } from '../app/modules/post/actions/postsList';
import { Post } from '../app/modules/post/model/post.model';
import { postsReducer } from '../app/modules/post/reducer/postsList.reducer';
import { ListItemView } from '../app/modules/post/view/listItem';

export async function getServerSideProps() {
	const url = process.env.POSTS_API_URL;
	const response = await axios.get(`${url}/posts`, {});
	return {
		props: {
			posts: response.data as Post[],
		},
	};
}

export type IProps = InferGetServerSidePropsType<typeof getServerSideProps> & {};

const Posts = ({ posts }: IProps) => {
	return (
		<main className={styles.main}>
			<Header currentPage={PAGE.POSTS} />

			<div className={styles.container}>
				{posts.map(post => (
					<ListItemView key={post.id} post={post} />
				))}
			</div>
		</main>
	);
};

Posts.pageKey = 'posts';
Posts.reducer = postsReducer;
Posts.initialAction = loadInitialData;

export default Posts;
