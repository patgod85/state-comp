import { Comment } from '../../../modules/comment/model/comment.model';
import { Post } from '../../../modules/post/model/post.model';

export interface IPageState {
	static: {
		post?: Post;
	};
	userState: {
		comments: Comment[];
	};
}

export interface IState {
	post: IPageState;
}
