import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import '../styles/globals.css';
import { configureStore, replacePageReducer } from './app/store';

const store = configureStore({});

export default function MyApp({ Component, pageProps }: AppProps) {
	const { pageKey, reducer, initialAction } = Component as any;
	replacePageReducer(pageKey, reducer, initialAction(pageProps));

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
