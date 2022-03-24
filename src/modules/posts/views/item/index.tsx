import { observer } from 'mobx-react-lite';
import React from 'react';

import { MobxContext } from '../../../../mobx/context';
import { PostPageStore } from '../../../../pages/post/postPageStore';
import { Post as PostView, IProps as IViewProps } from './view';

export type IProps = Omit<IViewProps, 'post' | 'submitForm'>;

const PostViewWrapped = observer(PostView);

export const Post = observer((props: IProps) => {
	const mobxRouterStore = React.useContext(MobxContext);
	const { activeStore } = mobxRouterStore || {};

	if (!activeStore) {
		throw new Error('Posts module :: activeStore is not defined');
	}

	const { postStore } = activeStore as PostPageStore;

	if (!postStore) {
		throw new Error('Posts module :: postStore is not defined');
	}

	const { post, submitForm } = postStore;

	if (!post) {
		return null;
	}

	return <PostViewWrapped post={post} submitForm={submitForm} {...props} />;
});
