import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import '../styles/globals.css';
import { configureStore, replacePageReducer as storeReplacePageReducer } from './app/store';

export default function MyApp({ Component, pageProps }: AppProps) {
	const store = configureStore({ static: pageProps });

	const replacePageReducer = React.useCallback(
		(pageKey, reducer, initialAction?) => {
			storeReplacePageReducer(pageKey, reducer);
			store.dispatch(initialAction);
		},
		[store],
	);
	return (
		<Provider store={store}>
			<Component {...pageProps} replacePageReducer={replacePageReducer} />
		</Provider>
	);
}
