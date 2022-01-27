import React from 'react';

import styles from './styles.module.css';

export interface IProps {
	addComment: (text: string) => void;
}

export const CommentForm = (props: IProps) => {
	const { addComment } = props;
	const inputEl: any = React.useRef();

	const onAdd = React.useCallback(() => {
		if (inputEl.current) {
			addComment(inputEl.current.value);
			inputEl.current.value = '';
		}
	}, [addComment]);

	return (
		<div className={styles['text-field__group']}>
			<input type="text" ref={inputEl} className={styles['text-field__input']} />
			<button type="button" onClick={onAdd} className={styles['text-field__btn']}>
				Добавить комментарий
			</button>
		</div>
	);
};
