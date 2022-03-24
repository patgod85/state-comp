import { action, makeObservable, observable } from "mobx"
import { inject, injectable } from 'tsyringe';
import { Post } from '../entities/post.entity';
import { PostExpanded, IPostExpanded } from '../entities/postExpanded.entity';
import { ICommentsRepository } from '../../comments/repository/comments.repository';
import {IPostParams} from "../entities/types";

export interface IPostsStore {
	setPosts: (posts: IPostParams[]) => void
	posts: Post[];

	expandedPost?: IPostExpanded;
	openPost: (postId: number) => void,
}

@injectable()
export class PostsStore implements IPostsStore {
	posts: Post[] = [];

	expandedPost?: IPostExpanded = undefined;

	constructor(
		@inject('ICommentsRepository') private readonly commentsRepository: ICommentsRepository,
	) {

		makeObservable(this, {
			posts: observable,
			expandedPost: observable,
			openPost: action,
			setPosts: action,
		});

		this.openPost = this.openPost.bind(this);
	}

	setPosts(posts: IPostParams[]) {
		this.posts = Post.hydrateList(posts);
	}

	openPost(postId: number) {
		const post = this.posts.find(({ id }) => postId === id) ;
		if (!post) {
			return;
		}

		this.commentsRepository.getCommentsForPostId(postId).then(comments => {
			this.expandedPost = new PostExpanded({
				...post,
				comments,
			});
		});

	}
}
