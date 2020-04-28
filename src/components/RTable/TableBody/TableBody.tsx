import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import ScrollerRow from './ScrollerRow';

import {getPageRows} from '../../functions';
import { IState } from '../../../store/interfaces';

const mapState = (state: IState) => {
  return {
    items: state.items,
    activePage: state.settings.activePage,
    rowsinPage: state.settings.rowsinPage,  
    toolBarRowId: state.settings.toolBarRowId,  
    selectedItems: state.selectedItems    
  }
}

const mapDispatch = (dispatch: any) =>{
  return {
    dispatch: (action: any) => { dispatch(action) }
  }
}

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

class TableBody extends React.Component<PropsFromRedux, IState> { 
  render() {   
    const items = this.props.items;    
    const activePage = this.props.activePage;
    const rowsinPage = this.props.rowsinPage;
      
    const activePageRows = getPageRows(items, activePage, rowsinPage);
    const scRows = [];  
    
    for (let i=0; i<activePageRows.length; i++){     
      const rowSelected = ~this.props.selectedItems.indexOf(activePageRows[i].id)?true:false;     
      const needShowToolbar = (this.props.toolBarRowId===activePageRows[i].id);
      scRows.push(<ScrollerRow key={'scrollerRow_'+i} data={activePageRows[i]} selected={rowSelected} needShowToolbar={needShowToolbar} />);
    }
    
    return (
      <tbody>              
        {scRows}
      </tbody>
    )
  }
}

export default connector(TableBody)