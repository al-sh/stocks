import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/mainReducer'
import { testPortfolios } from './store/testData'

import {mSort, maskAmount} from './components/functions';

const getDefaultState = async () => {
	const defaultState = {
		currentSection: 'portfolios', 
		columns: [
			{ 
				width: '200px', 
				field: 'name', 
				text: 'Название',
				visible: true
			},
			{ 
				width: '160px', 
				field: 'isActive', 
				text: 'Статус', 
				format: (isActive) => { return isActive?'Активный':'Не активный'; },
				visible: true
			},
			{ 
				width: '150px', 
				field: 'amount', 
				text: 'Сумма', 
				type: 'float', 
				headerClassName: 'header-amount',	
				style: {textAlign: 'right', paddingRight: '15px'},
				format: maskAmount,
				visible: true
			}
		],
		
		items: testPortfolios,		  
		selectedItems: [], 		
		settings: { 
			rowsinPage: 5,
			activePage: 0,
			withCheckBoxes: false,
			showDisplaySettings: false,
			showAddEditBlock: false,
			editItem: null,
			shiftClickItemId: null,
			toolBarRowId: null
		},
		showThrobber: false,
		sortParams: [{field: "name", type: "default", ascOrder: true}]		
	}; 
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
