//https://medium.com/devschacht/redux-step-by-step-e6c42a9b00cd
//export const SORT.TOGGLE = 'SORT.TOGGLE';

/*export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
  }*/

//формат sortParams: [{field: "name", type: "default", ascOrder: true}]
export function toggleVisualSort(fieldName, sortType, ctrlPressed) { 
    return { type: 'SORT.TOGGLE', field: fieldName,  sortType: sortType, ctrlPressed: ctrlPressed }
}