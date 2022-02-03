import axios from 'axios';
import type { GetStaticPropsContext } from 'next';
import React from 'react';

import { HeaderView as Header, PAGE } from '../../../src/modules/header/view';
import { loadInitialData } from '../../../src/modules/post/actions/post';
import { Post } from '../../../src/modules/post/model/post.model';
import { postReducer } from '../../../src/modules/post/reducer/post.reducer';
import { CommentsFormContainer as CommentsForm } from '../../../src/pages/post/containers/commentsForm';
import { CommentsListContainer as CommentsList } from '../../../src/pages/post/containers/commentsList';
import { PostDetailViewContainer as DetailView } from '../../../src/pages/post/containers/postDetailView';
import styles from '../../../styles/Home.module.css';

export async function getServerSideProps(context: GetStaticPropsContext) {
	const { params } = context;
	const { id } = params || {};
	if (!id) {
		throw new Error('Id is not defined');
	}
	const url = process.env.POSTS_API_URL;
	const response = await axios.get(`${url}/posts/${id}`, {});
	return {
		props: {
			post: response.data as Post,
		},
	};
}

function PostPage() {
	return (
		<main className={styles.main}>
			<Header currentPage={PAGE.POST} />
			<div className={styles.container}>
				<DetailView />

				<CommentsList />

				<CommentsForm />
			</div>
		</main>
	);
}

PostPage.pageKey = 'post';
PostPage.reducer = postReducer;
PostPage.initialAction = loadInitialData;

export default PostPage;
