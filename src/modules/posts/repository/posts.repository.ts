import axios from 'axios';
import { Post } from '../entities/post.entity';
import { inject, injectable } from 'tsyringe';

export interface IPostsRepository {
	getPosts: () => Promise<Post[]>,
	getPost: (id: number) => Promise<Post>,
	updatePost: (post: Post) => void,
}

@injectable()
export class PostsRepository implements IPostsRepository {
	constructor(
		@inject('ApiUrl') private readonly url: string,
	) {
		console.log('###### PostsRepository', this.url);
	}


	async getPosts () {
		const response = await axios.get(`${this.url}posts`);

		return response.data as Post[];
	}

	async getPost (id: number) {
		const response = await axios.get(`${this.url}posts/${id}`);

		return response.data as Post;
	}

	updatePost (post: Post) {
		console.log('Отправка формы', post);
	}
}
