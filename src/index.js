import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { defaultState } from './store/defaultState'
import rootReducer from './store/reducers/mainReducer'

import { mSort } from './components/functions';

const getDefaultState = async () => {
	const newItems = null;
	//const newItems = await getDataFromBack('/getportfolios/');  

	if (newItems) {
		defaultState.items = newItems;
	} else {
		console.warn('Отсутствует подключение к БД, показаны тестовые данные.');
	}

	mSort(defaultState.items, defaultState.sortParams);

	return defaultState;
}

//let preLoadedState = getDefaultState();
getDefaultState().then(result => {
	let preLoadedState = result;
	const store = createStore(
		rootReducer, preLoadedState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
