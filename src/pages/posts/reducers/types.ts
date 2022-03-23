import { Post } from '../../../modules/post/model/post.model';

export interface IState {
	posts: {
		static: {
			posts: Post[];
		};
		userState: {
			expanded: number[];
		};
	};
}
