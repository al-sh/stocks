import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { defaultState } from './store/defaultState'
import rootReducer from './store/reducers/mainReducer'

import { mSort } from './components/functions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  mSort(defaultState.items, defaultState.sortParams);
  let preLoadedState = defaultState;

	const store = createStore(
		rootReducer, preLoadedState
	);

	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		div
	);

  ReactDOM.unmountComponentAtNode(div);
});
