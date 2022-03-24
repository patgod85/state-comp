import { action, makeObservable, observable } from 'mobx';

import { IPostParams } from './types';

export class Post {
	id: number = NaN;
	userId: number = NaN;
	title = '';
	body = '';

	constructor({ id, userId, title, body }: any) {
		makeObservable(this, {
			id: observable,
			userId: observable,
			title: observable,
			body: observable,
			updateBody: action,
			updateTitle: action,
		});
		this.id = id;
		this.userId = userId;
		this.title = title;
		this.body = body;
	}

	updateTitle(value: string) {
		this.title = value;
	}

	updateBody(value: string) {
		this.body = value;
	}

	static hydrateList(params: IPostParams[]) {
		return params.map(postData => new Post(postData));
	}
}
