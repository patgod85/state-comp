// import { PostsStore } from './stores/posts.store';
// import { PostsRepository } from './repository/posts.repository';
// import { CommentsRepository } from './repository/comments.repository';
import { RouterStore } from './useCases/router.store';

export const runMobx = () => {
	// const store = new PostsStore({
	// 	postsRepository: new PostsRepository(),
	// 	commentsRepository: new CommentsRepository(),
	// });

	// store.openPost(3);
	return new RouterStore();
};
