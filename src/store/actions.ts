import { testPortfolios, testTransfers } from './testData'
import { getDataFromBack } from '../components/functions';

const testDataWarnText = 'Отсутствует подключение к БД, показаны тестовые данные';

export function toggleVisualSort(fieldName: string, sortType: string, ctrlPressed: boolean) {
    return { type: 'SORT.TOGGLE', field: fieldName, sortType: sortType, ctrlPressed: ctrlPressed }
}

function toggleThrobber(dispatch: any, visible: boolean) {
    dispatch({
        type: 'TOGGLE_THROBBER',
        showThrobber: visible
    });
}

const sections: any = {
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

export async function actSwitchToSection(sectionName: string, dispatch: any) {
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