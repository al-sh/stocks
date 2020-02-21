import {mSort} from '../../components/functions';

const Sort = { 
  toggle: (state, action) => {
    const selectedClause = {
      field: action.field,
      type: action.sortType,     
      ascOrder: true
    };

    let stateCopy = Object.assign({}, state); 
    let sortParams = Object.assign([], stateCopy.sortParams);

    if (sortParams.length>0) {
      if (sortParams[0].field === selectedClause.field) {
        selectedClause.ascOrder = !sortParams[0].ascOrder;
      }
    } 
    
    if (action.ctrlPressed) {       
      let sortParamsContainSelectedField = false; 
      for (let i=0; i<sortParams.length; i++){
        if (sortParams[i].field === selectedClause.field){ 
          //смена порядка сортировки по заданному полю в случае ctrl+click          
          selectedClause.ascOrder = !sortParams[i].ascOrder; 
          sortParams[i] = selectedClause;
          sortParamsContainSelectedField = true;
        }
      } 
      
      if (!sortParamsContainSelectedField) {
        sortParams.push(selectedClause);         
      } 
    } else {
      sortParams = [];
      sortParams.push(selectedClause);
    }   
    
    let newItems = Object.assign([], stateCopy.items);
    mSort(newItems, sortParams);

    stateCopy.items = newItems;
    stateCopy.sortParams = sortParams;  

    return stateCopy;
  },

  run: (state, action) => { 
    let stateCopy = Object.assign({}, state);   
    let newItems = Object.assign([], stateCopy.items);

    mSort(newItems, stateCopy.sortParams);

    stateCopy.items = newItems;
    return stateCopy;
  }
}
  
export default Sort