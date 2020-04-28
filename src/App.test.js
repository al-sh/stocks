import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { defaultState } from './store/defaultState'
import rootReducer from './store/reducers/mainReducer'

import { mSort } from './components/functions';

const rootDiv = document.createElement('div');

describe('main tests', () => {
	it('renders without crashing', () => {
		mSort(defaultState.items, defaultState.sortParams);
		let preLoadedState = defaultState;

		const store = createStore(
			rootReducer, preLoadedState
		);

		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			rootDiv
		);
	});

	/*it('MainMenu show', () => {
		console.log(document);
		const mainMenu = document.querySelectorAll('.MainMenu');
		expect(mainMenu.length).toEqual(1);
	});*/

	it('unmount without crashing', () => {
		ReactDOM.unmountComponentAtNode(rootDiv);
	});
});