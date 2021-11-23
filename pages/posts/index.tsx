import React from 'react';
import type { InferGetServerSidePropsType } from 'next';
import axios from 'axios';
import styles from '../../styles/Home.module.css';
import { ListItemView } from '../app/modules/post/view/listItem';
import { Post } from '../app/modules/post/model/post.model';
import { Dispatch, Reducer } from 'redux';
import { replaceReducer } from '../app/actions';
import { postsReducer } from '../app/modules/post/reducer/postsList.reducer';
import { connect } from 'react-redux';

export async function getServerSideProps() {
	const url = process.env.POSTS_API_URL;
	const response = await axios.get(`${url}/posts`, {});
	return {
		props: {
			posts: response.data as Post[],
		}, // will be passed to the page component as props
	};
}

export type IProps = InferGetServerSidePropsType<typeof getServerSideProps> & {
	onLoad: () => void;
	replacePageReducer: (key: string, reducer: Reducer) => void;
};

const Posts = ({ posts, replacePageReducer }: IProps) => {
	React.useEffect(() => {
		replacePageReducer('posts', postsReducer);
	}, []);
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				{posts.map(post => (
					<ListItemView key={post.id} post={post} />
				))}
			</main>
		</div>
	);
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onLoad: () => dispatch(replaceReducer('posts', postsReducer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
