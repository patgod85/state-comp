import type { GetStaticPropsContext, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import axios from 'axios';
import styles from '../../styles/Home.module.css';
import { DetailView } from '../../modules/post/view/details';
import { Post } from '../../modules/post/model/post.model';

export async function getServerSideProps(context: GetStaticPropsContext) {
	const { params } = context;
	const { id } = params || {};
	if (!id) {
		throw new Error('Id is not defined');
	}
	const url = process.env.POSTS_API_URL;
	const response = await axios.get(`${url}/posts/${id}`, {});
	return {
		props: {
			post: response.data as Post,
		},
	};
}

export default function PostPage({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<p>
					<Link href="/">К списку</Link>
				</p>

				<DetailView post={post} />
			</main>
		</div>
	);
}
