import { testPortfolios, testTransfers } from './testData'
import {getDataFromBack} from '../components/functions'; //may be need to move to reducers

const testDataWarnText = 'Отсутствует подключение к БД, показаны тестовые данные';

export function toggleVisualSort(fieldName, sortType, ctrlPressed) { 
    return { type: 'SORT.TOGGLE', field: fieldName,  sortType: sortType, ctrlPressed: ctrlPressed }
}

function toggleThrobber(dispatch, visible){
    dispatch({
        type: 'TOGGLE_THROBBER',
        showThrobber: visible
      });
}

export async function actSwitchToPortfolios(dispatch) {
    toggleThrobber(dispatch, true);
    
    let newItems = await getDataFromBack('/getportfolios'); 
    if (!newItems) {
      console.warn(testDataWarnText);
      newItems = testPortfolios;     
    } 
    console.log(newItems);

    dispatch({
      type: 'SWITCH.PORTFOLIOS',
      items: newItems
    });
    toggleThrobber(dispatch, false);
}

export async function actSwitchToTransfers(dispatch) {
    toggleThrobber(dispatch, true);
    
    let newItems = await getDataFromBack('/transfers.getall'); 
    if (!newItems) {
      console.warn(testDataWarnText);
      newItems = testTransfers;     
    } 
    console.log(newItems);

    dispatch({
      type: 'SWITCH.TRANSERS',
      items: newItems
    });
    toggleThrobber(dispatch, false);
}