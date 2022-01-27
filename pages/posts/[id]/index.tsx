import React from 'react';
import type { GetStaticPropsContext, InferGetServerSidePropsType } from 'next';
import axios from 'axios';
import styles from '../../../styles/Home.module.css';
import { DetailView } from '../../app/modules/post/view/details';
import { Post } from '../../app/modules/post/model/post.model';
import { connect } from 'react-redux';
import { Dispatch, Reducer } from 'redux';
import * as commentsActions from '../../app/modules/comment/actions/form';
import { IState, postReducer } from '../../app/modules/post/reducer/post.reducer';
import { HeaderView as Header } from '../../app/modules/header/view';
import { CommentForm } from '../../app/modules/comment/view/form';
import { CommentsList } from '../../app/modules/comment/view/list';
import { Comment } from '../../app/modules/comment/model/post.model';

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
	comments: Comment[];
	addComment: (text: string) => void;
};

function PostPage({ post, replacePageReducer, comments, addComment }: IProps) {
	React.useEffect(() => {
		replacePageReducer('post', postReducer);
	}, []);

	return (
		<main className={styles.main}>
			<Header currentPage="post" />
			<div className={styles.container}>
				<DetailView post={post} />

				<CommentsList comments={comments} />

				<CommentForm addComment={addComment} />
			</div>
		</main>
	);
}

const mapStateToProps = (state: { post: IState }) => ({
	comments: state.post?.userState?.comments || [],
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	addComment: (text: string) => dispatch(commentsActions.addComment(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
