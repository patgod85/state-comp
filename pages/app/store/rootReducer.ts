import { Reducer } from 'redux';

export const stubObject =
	<T>() =>
	(_: T = {} as T): T =>
		_;

/* Создаем набор базовых редьюсеров для старта приложения. Подмешиваем к стационарным редьюсерам,
	stub редьюсеры для существующий секций store, отличающихся от ключей статичный редьюсеров.
*/
export const createRootReducer = (preloadedState: Object): { [key: string]: Reducer<any, any> } =>
	Object.entries(preloadedState).reduce((acc, [key]) => ({ ...acc, [key]: stubObject() }), {});
