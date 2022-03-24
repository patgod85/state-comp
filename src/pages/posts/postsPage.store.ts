import { autorun, makeObservable, observable, runInAction } from "mobx"
import { inject, injectable } from 'tsyringe';
import {IPageDataRepository} from "../../mobx/repositories/pageData.repository";
import {IPostsStore} from "../../modules/posts/useCases/posts.store";


@injectable()
export class PostsPageStore {
	isLoading = true;

	constructor(
		@inject('PageData') private readonly pageData: any,
		@inject('IPageDataRepository') private readonly pageDataRepository: IPageDataRepository,
		@inject('IPostsStore') public readonly postsStore: IPostsStore,
	) {
		makeObservable(this, {
			isLoading: observable,
		});
		autorun(() => {
			console.log("POSTS_PAGE:: Is loading status:", this.isLoading);
		});

		this.loadPageData();
	}

	loadPageData() {
		runInAction(() => {
			this.isLoading = true;
		});

		if (this.pageData) {
			const { posts } = (typeof this.pageData.postsPage.toJS !== 'undefined') ?
				this.pageData.postsPage.toJS()
				: this.pageData.postsPage;

			runInAction(() => {
				this.postsStore.setPosts(posts.items);
				this.isLoading = false
			})
		} else {
			this.pageDataRepository.getPostsPageData().then(pageData => {
				const {
					posts,
				} = pageData.payload;
				runInAction(() => {
					this.postsStore.setPosts(posts.items);
					this.isLoading = false
				})
			})
		}
	}

}
