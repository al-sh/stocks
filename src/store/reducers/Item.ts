import { mSort, deleteItemFromArray } from '../../components/functions';

const Item = { //функции работы с элементом списка
  add: (state: any, action: any) => {
    let stateCopy = Object.assign({}, state);
    let items = Object.assign([], stateCopy.items);
    items.push(action.item);

    mSort(items, stateCopy.sortParams);

    stateCopy.items = items;
    stateCopy.settings.showAddEditBlock = false;
    return stateCopy;
  },

  edit: (state: any, action: any) => {
    //let stateCopy = getObjCopy(state);
    let stateCopy = Object.assign({}, state);
    let items = Object.assign([], stateCopy.items);

    deleteItemFromArray(items, action.item.id);
    items.push(action.item);

    mSort(items, stateCopy.sortParams);

    stateCopy.items = items;
    stateCopy.settings.showAddEditBlock = false;
    return stateCopy;
  },

  delete: (state: any, action: any) => {
    let stateCopy = Object.assign({}, state);
    let items = Object.assign([], stateCopy.items);

    deleteItemFromArray(items, action.itemId);

    stateCopy.selectedItems = [];
    stateCopy.items = items;
    return stateCopy;
  }

}

export default Item