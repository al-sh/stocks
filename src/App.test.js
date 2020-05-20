import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { defaultState } from './store/defaultState'
import rootReducer from './store/reducers/mainReducer'

import { mSort } from './components/functions';

import PagerFiller from './components/RTable/TableFooter/PagerFiller';
import renderer from 'react-test-renderer';

const rootDiv = document.createElement('div');
mSort(defaultState.items, defaultState.sortParams);
let preLoadedState = defaultState;

const store = createStore(
	rootReducer, preLoadedState
);

describe('main tests', () => {
	it('renders without crashing', () => {
		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			rootDiv
		);
	});

	
	//test for simple component, without redux
	it("PagerFiller check", () => {
		const component = renderer.create(<PagerFiller />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();

		/* 
		// manually trigger the callback
			tree.props.onMouseEnter();
			// re-rendering
			tree = component.toJSON();
			expect(tree).toMatchSnapshot();

			// manually trigger the callback
			tree.props.onMouseLeave();
			// re-rendering
			tree = component.toJSON();
			expect(tree).toMatchSnapshot();
   */
	});

	//redux tests: https://habr.com/ru/post/340514/

	it('unmount without crashing', () => {
		ReactDOM.unmountComponentAtNode(rootDiv);
	});
});