import { action, makeObservable, observable, toJS } from "mobx"
import { inject, injectable } from 'tsyringe';
import { Post } from '../entities/post.entity';
import { IPostsRepository } from '../repository/posts.repository';
import {IPostParams} from "../entities/types";

export interface IPostStore {
	setPost: (post: IPostParams) => void
	post: null| Post;
	submitForm: () => void,
}

@injectable()
export class PostStore implements IPostStore {
	post: null| Post = null;

	constructor(
		@inject('IPostsRepository') private readonly postsRepository: IPostsRepository,
	) {
		makeObservable(this, {
			post: observable,
			submitForm: action,
		});

		this.submitForm = this.submitForm.bind(this);
	}

	setPost(postParams: IPostParams) {
		this.post = new Post(postParams);
	}

	submitForm() {
		this.postsRepository.updatePost(toJS(this.post) as Post);
	}
}
