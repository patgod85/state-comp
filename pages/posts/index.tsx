import axios from 'axios';
import React from 'react';

import { HeaderView as Header, PAGE } from '../../src/modules/header/view';
import { loadInitialData } from '../../src/modules/post/actions/postsList';
import { Post } from '../../src/modules/post/model/post.model';
import { postsReducer } from '../../src/modules/post/reducer/postsList.reducer';
import { PostsListContainer } from '../../src/pages/posts/containers/postsList';
import styles from '../../styles/Home.module.css';

export async function getServerSideProps() {
	const url = process.env.POSTS_API_URL;
	const response = await axios.get(`${url}/posts`, {});
	return {
		props: {
			posts: response.data as Post[],
		},
	};
}

const Posts = () => {
	return (
		<main className={styles.main}>
			<Header currentPage={PAGE.POSTS} />

			<div className={styles.container}>
				<PostsListContainer />
			</div>
		</main>
	);
};

Posts.pageKey = 'posts';
Posts.reducer = postsReducer;
Posts.initialAction = loadInitialData;

export default Posts;
