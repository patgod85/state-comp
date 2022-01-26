import styles from '../styles/Home.module.css';
import { HeaderView as Header } from './app/modules/header/view';

export default function Posts() {
	return (
		<main className={styles.main}>
			<Header currentPage="index" />
		</main>
	);
}
