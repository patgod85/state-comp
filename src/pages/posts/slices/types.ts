import { Post } from '../../../modules/post/model/post.model';

export interface IPageState {
	static: {
		posts: Post[];
	};
	userState: {
		expanded: number[];
	};
}

export interface IState {
	posts: IPageState;
}
