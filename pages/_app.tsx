import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import { configureStore, replacePageReducer } from '../src/store';
import '../styles/globals.css';

const store = configureStore({});

export default function MyApp({ Component, pageProps }: AppProps) {
	// В качестве демонстрации каждая страница предоставляет в _app эти три свойства,
	// которые позволяют при смене страницы подменять редюсеры в store
	const { pageKey, reducer, initialAction } = Component as any;

	if (pageKey && reducer && initialAction) {
		replacePageReducer(pageKey, reducer, initialAction(pageProps));
	}

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
