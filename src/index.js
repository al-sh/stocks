import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/mainReducer'

import {mSort, maskAmount, getDataFromBack} from './main/functions';

const getDefaultState = async () => {
	const defaultState = {
		currentSection: 'transfers', 
		columns: [
			{ 
				width: '550px', 
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
				width: '100px', 
				field: 'amount', 
				text: 'Сумма', 
				type: 'float', 
				style: {textAlign: 'right', paddingRight: '15px'},
				format: maskAmount,
				visible: true
			}
		],
		
		items: [
			{id:1, name:'test11', isActive:false, amount: 100500}, 
			{id:2,name:'IIS', isActive: true, amount: 35000}, 
			{id:3,name:'ABC22', isActive: true, amount: 22000}, 
			{id:4,name:'UFD', isActive: false, amount: 17000},
			{id:5,name:'asads', isActive: false, amount: 17000},
			{id:6,name:'fdfd', isActive: false, amount: undefined},
			{id:7,name:'sadasd', isActive: false, amount: 17000},
			{id:8,name:'xasda', isActive: false, amount: 17000},
			{id:9,name:'tttsadasd', isActive: false}     
		],		  
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
