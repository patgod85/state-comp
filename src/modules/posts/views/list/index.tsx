import { observer } from 'mobx-react-lite';
import React from 'react';

import { MobxContext } from '../../../../mobx/context';
import { PostsPageStore } from '../../../../pages/posts/postsPage.store';
import { Posts as PostsView, IProps as IViewProps } from './view';

export type IProps = Omit<IViewProps, 'posts' | 'openPost' | 'expandedPost'>;

export const Posts = observer((props: IProps) => {
	const mobxRouterStore = React.useContext(MobxContext);

	const { activeStore } = mobxRouterStore || {};

	if (!activeStore) {
		throw new Error('Posts module :: activeStore is not defined');
	}

	const { postsStore } = activeStore as PostsPageStore;

	if (!postsStore) {
		throw new Error('Posts module :: postsStore is not defined');
	}

	const { expandedPost, posts, openPost } = postsStore;

	return <PostsView expandedPost={expandedPost} posts={posts} openPost={openPost} {...props} />;
});
