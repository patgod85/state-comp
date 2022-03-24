import { autorun, makeObservable, observable, runInAction } from "mobx"
import { inject, injectable } from 'tsyringe';
import {IPostsRepository} from "../../modules/posts/repository/posts.repository";
import {ICommentsRepository} from "../../modules/comments/repository/comments.repository";
import {IPageDataRepository} from "../../mobx/repositories/pageData.repository";
import {IPostStore} from "../../modules/posts/useCases/post.store";
import {Post} from "../../modules/posts/entities/post.entity";

export interface IProps {
	postsRepository: IPostsRepository,
	commentsRepository: ICommentsRepository,
	id: number,
}

@injectable()
export class PostPageStore {
	post: Post | null = null;
	isLoading = true;

	constructor(
		@inject('IPageDataRepository') private readonly pageDataRepository: IPageDataRepository,
		@inject('IPostStore') public readonly postStore: IPostStore,
		@inject('PostId') id: number,
	) {
		makeObservable(this, {
			post: observable,
			isLoading: observable,
		});

		autorun(() => {
			console.log("POST_PAGE:: Is loading status:", this.isLoading);
		});

		this.loadPost(id);
	}

	loadPost(id: number) {
		runInAction(() => {
			this.isLoading = true;
		});
		this.pageDataRepository.getPostPageData(id).then(pageData => {
			const {
				post,
			} = pageData;

			runInAction(() => {
				this.postStore.setPost(post);
				this.isLoading = false
			})
		})
	}
}
