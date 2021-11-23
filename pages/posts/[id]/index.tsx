import React from 'react';
import type { GetStaticPropsContext, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import axios from 'axios';
import styles from '../../../styles/Home.module.css';
import { DetailView } from '../../app/modules/post/view/details';
import { Post } from '../../app/modules/post/model/post.model';
import { connect } from 'react-redux';
import { Dispatch, Reducer } from 'redux';
import * as actions from '../../app/modules/post/actions/post';
import { IState, postReducer } from '../../app/modules/post/reducer/post.reducer';

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
	comments: string[];
	addComment: (text: string) => void;
};

function PostPage({ post, replacePageReducer, comments, addComment }: IProps) {
	React.useEffect(() => {
		replacePageReducer('post', postReducer);
	}, []);

	const inputEl: any = React.useRef();

	const onAdd = React.useCallback(() => {
		addComment(inputEl.current?.value);
	}, [addComment]);

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<p>
					<Link href="/posts/">К списку</Link>
				</p>

				<DetailView post={post} />

				<h1>Comments:</h1>
				{comments.map((comment, index) => (
					<div key={index}>{comment}</div>
				))}

				<div>
					<input type="text" ref={inputEl} />
					<button type="button" onClick={onAdd}>
						add
					</button>
				</div>
			</main>
		</div>
	);
}

const mapStateToProps = (state: { post: IState }) => ({
	comments: state.post?.userState?.comments || [],
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	addComment: (text: string) => dispatch(actions.addComment(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
