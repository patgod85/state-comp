export interface IComment {
	body: string;
	time: string;
}

export interface IState {
	post: {
		userState: {
			comments: IComment[];
		};
	};
}
