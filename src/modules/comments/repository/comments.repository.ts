import { Comment } from '../entities/comment.entity';
import { injectable } from 'tsyringe';

export interface ICommentsRepository {
	getCommentsForPostId: (id: number) => Promise<Comment[]>,
}

@injectable()
export class CommentsRepository implements ICommentsRepository {
	constructor(
	) {
	}

	async getCommentsForPostId (id: number) {

		return [].filter(({ postId }) => postId === id);
	}
}
