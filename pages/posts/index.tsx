import React from 'react';
import type { InferGetServerSidePropsType } from 'next';
import { Reducer } from 'redux';
import axios from 'axios';
import styles from '../../styles/Home.module.css';
import { ListItemView } from '../app/modules/post/view/listItem';
import { Post } from '../app/modules/post/model/post.model';
import { postsReducer } from '../app/modules/post/reducer/postsList.reducer';
import { connect } from 'react-redux';
import { HeaderView as Header } from '../app/modules/header/view';

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
		<main className={styles.main}>
			<Header currentPage="posts" />

			<div className={styles.container}>
				{posts.map(post => (
					<ListItemView key={post.id} post={post} />
				))}
			</div>
		</main>
	);
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
