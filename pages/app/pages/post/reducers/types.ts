import { Post } from '../../../modules/post/model/post.model';

export interface IComment {
	body: string;
	time: string;
}

export interface IState {
	post: {
		static: {
			post: Post;
		};
		userState: {
			comments: IComment[];
		};
	};
}
