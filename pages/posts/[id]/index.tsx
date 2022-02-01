import axios from 'axios';
import type { GetStaticPropsContext, InferGetServerSidePropsType } from 'next';
import React from 'react';
import { Reducer } from 'redux';

import styles from '../../../styles/Home.module.css';
import { HeaderView as Header } from '../../app/modules/header/view';
import { Post } from '../../app/modules/post/model/post.model';
import { postReducer } from '../../app/modules/post/reducer/post.reducer';
import { DetailView } from '../../app/modules/post/view/details';
import { CommentsFormContainer as CommentsForm } from '../../app/pages/post/containers/commentsForm';
import { CommentsListContainer as CommentsList } from '../../app/pages/post/containers/commentsList';

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

export type IProps = InferGetServerSidePropsType<typeof getServerSideProps> & {
	replacePageReducer: (key: string, reducer: Reducer) => void;
	addComment: (text: string) => void;
};

function PostPage({ post, replacePageReducer }: IProps) {
	React.useEffect(() => {
		replacePageReducer('post', postReducer);
	}, []);

	return (
		<main className={styles.main}>
			<Header currentPage="post" />
			<div className={styles.container}>
				<DetailView post={post} />

				<CommentsList />

				<CommentsForm />
			</div>
		</main>
	);
}

export default PostPage;
