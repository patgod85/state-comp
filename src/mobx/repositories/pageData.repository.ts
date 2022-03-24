import axios from 'axios';

import { inject, injectable } from 'tsyringe';
import {IPostParams} from "../../modules/posts/entities/types";

export interface IPostsPageData {
	payload: {
		posts: { items: IPostParams[] },
	},
}

export interface IPostPageData {
	post: IPostParams,
}

export interface IPageDataRepository {
	getPostsPageData: () => Promise<IPostsPageData>,
	getPostPageData: (id: number) => Promise<IPostPageData>,
}

@injectable()
export class PageDataRepository implements IPageDataRepository {
	constructor(
		@inject('ApiUrl') private readonly url: string,
	) {
		console.log('###### ApiRepository', this.url);
	}

	async getPostsPageData () {
		const response = await axios.get(`${this.url}posts`);

		return response.data as IPostsPageData;
	}

	async getPostPageData (id: number) {
		const response = await axios.get(`${this.url}posts/${id}`);
		return { post: response.data } as IPostPageData;
	}
}
