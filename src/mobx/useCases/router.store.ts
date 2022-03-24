import { action, makeObservable, observable } from 'mobx';

export class RouterStore {
	activeStore: any = null;

	constructor() {
		makeObservable(this, {
			activeStore: observable,
			replaceStore: action,
		});
	}

	getActiveStore() {
		return this.activeStore;
	}

	replaceStore(store: any) {
		this.activeStore = store;
	}
}
