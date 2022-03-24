import axios from 'axios';
import React from 'react';
import { container } from 'tsyringe';

import { useConstructor } from '../../src/hooks/useConstructor';
import { MobxContext } from '../../src/mobx/context';
import { HeaderView as Header, PAGE } from '../../src/modules/header/view';
import { Post } from '../../src/modules/posts/entities/post.entity';
import { Posts } from '../../src/modules/posts/views/list';
import styles from '../../styles/Home.module.css';

export async function getServerSideProps() {
	const url = process.env.POSTS_API_URL;
	const response = await axios.get(`${url}posts`, {});
	return {
		props: {
			posts: response.data as Post[],
			apiUrl: url,
		},
	};
}

const PostsPage = (props: any) => {
	const { posts } = props;
	container.register('PageData', { useValue: { postsPage: { posts: { items: posts } } } });
	const mobxRouterStore = React.useContext(MobxContext);

	useConstructor(() => {
		const store = container.resolve('IPostsPageStore');

		mobxRouterStore?.replaceStore(store);
	});

	return (
		<main className={styles.main}>
			<Header currentPage={PAGE.POSTS} />

			<div className={styles.container}>
				<Posts />
			</div>
		</main>
	);
};

PostsPage.pageKey = 'posts';

export default PostsPage;
