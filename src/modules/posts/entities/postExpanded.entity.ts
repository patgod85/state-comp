import { makeObservable, observable } from 'mobx';

import { Comment } from '../../comments/entities/comment.entity';
import { Post } from './post.entity';

export type IPostExpanded = Post & {
	comments: Comment[];
};

export class PostExpanded extends Post implements IPostExpanded {
	comments: Comment[] = [];

	constructor({ id, userId, title, body, comments }: any) {
		super({ id, userId, title, body });
		makeObservable(this, {
			comments: observable,
		});
		this.comments = comments;
	}
}
