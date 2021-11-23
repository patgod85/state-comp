import '../styles/globals.css';

import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import { store, replacePageReducer } from './app/store';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} replacePageReducer={replacePageReducer} />
		</Provider>
	);
}
