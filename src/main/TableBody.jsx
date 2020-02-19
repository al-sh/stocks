import React from 'react';
import { connect } from 'react-redux';
import ScrollerRow from '../main/ScrollerRow';

import {getPageRows} from './functions';

class TableBody extends React.Component { 
  shouldComponentUpdate(nextProps, nextState){
    //console.log('shouldComponentUpdate old props', this.props, 'nextProps:', nextProps);
    return true;
  }

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

const mapStateToProps = (state) => {
  return {
    items: state.items,
    activePage: state.settings.activePage,
    rowsinPage: state.settings.rowsinPage,  
    toolBarRowId: state.settings.toolBarRowId,  
    selectedItems: state.selectedItems    
  }
}

export default connect(mapStateToProps)(TableBody)