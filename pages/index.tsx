import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Posts() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				Я Index. <Link href="/posts/">Жми сюдой</Link>
			</main>
		</div>
	);
}
