//import { SORT.TOGGLE } from './actions';
import { mSort, deleteItemFromArray, getPageRows, findEl } from '../../components/functions';
import Analytics from './Analytics'
import Item from './Item'
import Sort from './Sort'
import DisplaySettings from './DisplaySettings'
import Switch from './Switch'

const goToPage = (state: any, action: any) => {
  let stateCopy = Object.assign({}, state);
  stateCopy.settings.activePage = action.page;
  return stateCopy;
}

const updateItems = (state: any, action: any) => {
  let stateCopy = Object.assign({}, state);
  stateCopy.items = action.items; //need copy?
  mSort(stateCopy.items, stateCopy.sortParams);
  return stateCopy;
}

const toggleItemBlock = (state: any, action: any) => {
  let stateCopy = Object.assign({}, state);
  stateCopy.settings.showAddEditBlock = action.showAddEditBlock;
  if (action.editItem) {
    stateCopy.settings.editItem = action.editItem;
  } else {
    stateCopy.settings.editItem = null;
  }
  return stateCopy;
}

const toggleSelectRow = (state: any, action: any) => {
  const itemId = action.item.id;
  let stateCopy = Object.assign({}, state);
  let selectedItems = Object.assign([], stateCopy.selectedItems);

  if (~selectedItems.indexOf(itemId)) {
    selectedItems.splice(selectedItems.indexOf(itemId), 1);
  } else {
    selectedItems.push(itemId);
  }
  stateCopy.selectedItems = selectedItems;
  stateCopy.showAddEditBlock = false;
  return stateCopy;
}

const toggleThrobber = (state: any, action: any) => {
  let stateCopy = Object.assign({}, state);
  stateCopy.showThrobber = action.showThrobber;
  return stateCopy;
}

const deleteSelectedItems = (state: any, action: any) => {
  let stateCopy = Object.assign({}, state);
  let items = Object.assign([], stateCopy.items);
  let selectedItems = Object.assign([], stateCopy.selectedItems);

  for (let i = 0; i < selectedItems.length; i++) {
    deleteItemFromArray(items, selectedItems[i]);
  }

  stateCopy.selectedItems = [];
  stateCopy.items = items;
  return stateCopy;
}

const toggleActivePageRowSelection = (state: any, action: any) => {
  let stateCopy = Object.assign({}, state);
  let selectedItems = Object.assign([], stateCopy.selectedItems);

  if (action.selected) {
    selectedItems = [];
    const activePageRows = getPageRows(stateCopy.items, stateCopy.page, stateCopy.rowsinPage);
    for (let i = 0; i < activePageRows.length; i++) {
      selectedItems.push(activePageRows[i].id);
    }
  } else {
    selectedItems = [];
  }
  stateCopy.selectedItems = selectedItems;
  stateCopy.showAddEditBlock = false;
  return stateCopy;
}

const toggleRowToolbar = (state: any, action: any) => {
  let stateCopy = Object.assign({}, state);
  if (stateCopy.settings.toolBarRowId === action.rowId) {
    stateCopy.settings.toolBarRowId = null;
  } else {
    stateCopy.settings.toolBarRowId = action.rowId;
  }
  return stateCopy;
}

const shiftClick = (state: any, action: any) => {
  let stateCopy = Object.assign({}, state);
  let selectedItems = Object.assign([], stateCopy.selectedItems);
  stateCopy.settings.toolBarRowId = null;
  stateCopy.settings.showAddEditBlock = false;

  if (stateCopy.settings.shiftClickItemId) {
    let startItemIndex: number = findEl(stateCopy.items, stateCopy.settings.shiftClickItemId);
    let endItemIndex: number = findEl(stateCopy.items, action.rowId);
    //console.log('shiftClickItemId:'+shiftClickItemId+' startItemIndex:'+startItemIndex+' endItemIndex:'+endItemIndex);
    if (startItemIndex > endItemIndex) {
      const tmp = startItemIndex;
      startItemIndex = endItemIndex;
      endItemIndex = tmp;
    }

    selectedItems = [];
    for (let i = startItemIndex; i <= endItemIndex; i++) {
      selectedItems.push(stateCopy.items[i].id);
    }

    stateCopy.settings.shiftClickItemId = stateCopy.items[endItemIndex].id;
  } else {
    stateCopy.settings.shiftClickItemId = action.rowId;
    selectedItems.push(action.rowId);
  }

  stateCopy.selectedItems = selectedItems;
  return stateCopy;
}

const mainReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case 'ANALYTICS.TOGGLE': return Analytics.toggle(state, action);
    case 'ANALYTICS.TRANSFERS': return Analytics.transfers(state, action);

    case 'ITEM.ADD': return Item.add(state, action);
    case 'ITEM.DELETE': return Item.delete(state, action);
    case 'ITEM.EDIT': return Item.edit(state, action);
    case 'ITEMS.UPDATE': return updateItems(state, action);

    case 'DISPLAYSETTINGS.TOGGLE': return DisplaySettings.toggle(state, action);
    case 'DISPLAYSETTINGS.SAVE': return DisplaySettings.save(state, action);

    case 'SORT.RUN': return Sort.run(state, action);
    case 'SORT.TOGGLE': return Sort.toggle(state, action);

    case 'SWITCH.TRANSFERS': return Switch.transfers(state, action);
    case 'SWITCH.PORTFOLIOS': return Switch.portfolios(state, action);

    case 'DELETE_SELECTED_ITEMS': return deleteSelectedItems(state, action);
    case 'GO_TO_PAGE': return goToPage(state, action);
    case 'TOGGLE_ACTIVE_PAGE_ROW_SELECTION': return toggleActivePageRowSelection(state, action);
    case 'TOGGLE_ITEM_BLOCK': return toggleItemBlock(state, action);
    case 'TOGGLE_ROW_TOOLBAR': return toggleRowToolbar(state, action);
    case 'TOGGLE_SELECT_ROW': return toggleSelectRow(state, action);
    case 'TOGGLE_THROBBER': return toggleThrobber(state, action);
    case 'SHIFT_CLICK': return shiftClick(state, action);

    default:
      return state
  }
}

export default mainReducer