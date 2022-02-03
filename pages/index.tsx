import { HeaderView as Header, PAGE } from '../src/modules/header/view';
import styles from '../styles/Home.module.css';

export default function Posts() {
	return (
		<main className={styles.main}>
			<Header currentPage={PAGE.INDEX} />
		</main>
	);
}
