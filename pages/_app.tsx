import type { AppProps } from 'next/app';
import React from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { runMobx } from '../src/mobx/bootstrap';
import { MobxContext } from '../src/mobx/context';
import { PageDataRepository } from '../src/mobx/repositories/pageData.repository';
import { CommentsRepository } from '../src/modules/comments/repository/comments.repository';
import { PostsRepository } from '../src/modules/posts/repository/posts.repository';
import { PostStore } from '../src/modules/posts/useCases/post.store';
import { PostsStore } from '../src/modules/posts/useCases/posts.store';
import { PostPageStore } from '../src/pages/post/postPageStore';
import { PostsPageStore } from '../src/pages/posts/postsPage.store';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	container.register('IPostsPageStore', { useClass: PostsPageStore });
	container.register('IPostPageStore', { useClass: PostPageStore });

	container.register('ApiUrl', { useValue: pageProps.apiUrl });
	container.register('IPageDataRepository', { useClass: PageDataRepository });
	container.register('IPostsRepository', { useClass: PostsRepository });
	container.register('ICommentsRepository', { useClass: CommentsRepository });
	container.register('IPostStore', { useClass: PostStore });
	container.register('IPostsStore', { useClass: PostsStore });

	const currentStore = runMobx();

	return (
		<MobxContext.Provider value={currentStore}>
			<Component {...pageProps} />
		</MobxContext.Provider>
	);
}
