import axios from 'axios';
import type { GetStaticPropsContext } from 'next';
import React from 'react';

import styles from '../../../styles/Home.module.css';
import { HeaderView as Header } from '../../app/modules/header/view';
import { loadInitialData } from '../../app/modules/post/actions/post';
import { Post } from '../../app/modules/post/model/post.model';
import { postReducer } from '../../app/modules/post/reducer/post.reducer';
import { CommentsFormContainer as CommentsForm } from '../../app/pages/post/containers/commentsForm';
import { CommentsListContainer as CommentsList } from '../../app/pages/post/containers/commentsList';
import { PostDetailViewContainer as DetailView } from '../../app/pages/post/containers/postDetailView';

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
			<Header currentPage="post" />
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
