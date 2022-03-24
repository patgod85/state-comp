import axios from 'axios';
import type { GetStaticPropsContext } from 'next';
import React from 'react';
import { container } from 'tsyringe';

import { useConstructor } from '../../../src/hooks/useConstructor';
import { MobxContext } from '../../../src/mobx/context';
import { HeaderView as Header, PAGE } from '../../../src/modules/header/view';
import { Post as PostEntity } from '../../../src/modules/posts/entities/post.entity';
import { Post } from '../../../src/modules/posts/views/item';
import styles from '../../../styles/Home.module.css';

export async function getServerSideProps(context: GetStaticPropsContext) {
	const { params } = context;
	const { id } = params || {};
	if (!id) {
		throw new Error('Id is not defined');
	}
	const url = process.env.POSTS_API_URL;
	const response = await axios.get(`${url}posts/${id}`, {});
	return {
		props: {
			post: response.data as PostEntity,
			apiUrl: url,
		},
	};
}

function PostPage(props: any) {
	const { post } = props;

	container.register('PageData', { useValue: { postPage: { post } } });

	const mobxRouterStore = React.useContext(MobxContext);

	useConstructor(() => {
		container.register('PostId', { useValue: post.id });
		const store = container.resolve('IPostPageStore');

		mobxRouterStore?.replaceStore(store);
	});

	return (
		<main className={styles.main}>
			<Header currentPage={PAGE.POST} />
			<div className={styles.container}>
				<Post />
			</div>
		</main>
	);
}

PostPage.pageKey = 'post';

export default PostPage;
