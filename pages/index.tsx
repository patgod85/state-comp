import type { InferGetServerSidePropsType } from 'next';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import { ListItemView } from '../modules/post/view/listItem';
import { Post } from '../modules/post/model/post.model';

export async function getServerSideProps() {
	const url = process.env.POSTS_API_URL;
	const response = await axios.get(`${url}/posts`, {});
	return {
		props: {
			posts: response.data as Post[],
		}, // will be passed to the page component as props
	};
}

export default function Posts({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				{posts.map(post => (
					<ListItemView key={post.id} post={post} />
				))}
			</main>
		</div>
	);
}
