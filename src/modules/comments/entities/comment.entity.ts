import { makeObservable, observable } from 'mobx';

export class Comment {
	postId: number = NaN;
	id: number = NaN;
	name: string = '';
	email: string = '';
	body: string = '';

	constructor({ postId, id, name, email, body }: any) {
		makeObservable(this, {
			postId: observable,
			id: observable,
			name: observable,
			email: observable,
			body: observable,
		});
		this.postId = postId;
		this.id = id;
		this.email = email;
		this.name = name;
		this.body = body;
	}
}
