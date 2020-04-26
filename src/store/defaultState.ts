import { testPortfolios } from './testData'
import { IState } from './interfaces'
import { maskAmount } from '../components/functions';

export const defaultState: IState = {
    analytics: {
        currentPortfolioValue: 400000
    }, 
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
            format: (isActive: boolean) => { return isActive ? 'Активный' : 'Не активный'; },
            visible: true
        },
        {
            width: '150px',
            field: 'amount',
            text: 'Сумма',
            type: 'float',
            headerClassName: 'header-amount',
            style: { textAlign: 'right', paddingRight: '15px' },
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
    sortParams: [{ field: "name", type: "default", ascOrder: true }]
};