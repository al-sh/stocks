import { testPortfolios, testTransfers } from './testData'
import { getDataFromBack } from '../components/functions';

const testDataWarnText = 'Отсутствует подключение к БД, показаны тестовые данные';

export function toggleVisualSort(fieldName, sortType, ctrlPressed) {
    return { type: 'SORT.TOGGLE', field: fieldName, sortType: sortType, ctrlPressed: ctrlPressed }
}

function toggleThrobber(dispatch, visible) {
    dispatch({
        type: 'TOGGLE_THROBBER',
        showThrobber: visible
    });
}

const sections = {
    portfolios: {
        backUrl: '/getportfolios',
        testItems: testPortfolios,
        actionType: 'SWITCH.PORTFOLIOS'
    },
    transfers: {
        backUrl: '/transfers.getall',
        testItems: testTransfers,
        actionType: 'SWITCH.TRANSFERS'
    }
}

export async function actSwitchToSection(sectionName, dispatch) {
    toggleThrobber(dispatch, true);

    const selectedSection = sections[sectionName];
    let newItems = await getDataFromBack(selectedSection.backUrl);
    if (!newItems) {
        console.warn(testDataWarnText);
        newItems = selectedSection.testItems;
    }
    console.log(newItems);

    dispatch({
        type: selectedSection.actionType,
        items: newItems
    });
    toggleThrobber(dispatch, false);
}