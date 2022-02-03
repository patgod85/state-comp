import styles from '../styles/Home.module.css';
import { HeaderView as Header, PAGE } from './app/modules/header/view';

export default function Posts() {
	return (
		<main className={styles.main}>
			<Header currentPage={PAGE.INDEX} />
		</main>
	);
}
