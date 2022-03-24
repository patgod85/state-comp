import React from 'react';

import { Post as PostEntity } from '../../entities/post.entity';
import styles from './styles.module.css';

export interface IProps {
	post: PostEntity;
	submitForm: () => void;
}

export const Post = (props: IProps) => {
	const { post, submitForm } = props;

	const onChangeBody = React.useCallback(
		(e: React.FormEvent<HTMLTextAreaElement>) => {
			post.updateBody(e.currentTarget.value);
		},
		[post],
	);

	const onChangeTitle = React.useCallback(
		(e: React.FormEvent<HTMLInputElement>) => {
			post.updateTitle(e.currentTarget.value);
		},
		[post],
	);

	const onSubmit = React.useCallback(() => {
		submitForm();
	}, [submitForm]);

	return (
		<>
			<label>
				Title
				<input value={post.title} onChange={onChangeTitle} defaultValue={post.title} />
			</label>
			<label>
				Body
				<textarea className={styles.textarea} onChange={onChangeBody} value={post?.body} />
			</label>

			<div>
				<button type="button" onClick={onSubmit}>
					Сохранить
				</button>
			</div>
		</>
	);
};
