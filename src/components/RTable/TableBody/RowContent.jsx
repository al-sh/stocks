import React from 'react';
import { connect } from 'react-redux';

class RowContent extends React.Component {
  onChangeCheckBox = () => {
    this.props.dispatch({
      type: 'TOGGLE_SELECT_ROW',
      item: this.props.item
    });
  }

  rowClick  = (event) => {     
    if (event.target.name==='rowCheck') return;  
    if (event.shiftKey) { 
      this.props.dispatch({
        type: 'SHIFT_CLICK',
        rowId: this.props.item.id
      }); 
      return; 
    }  
    this.props.dispatch({
      type: 'TOGGLE_ROW_TOOLBAR',
      rowId: this.props.item.id
    });
  }

  render() {
    const item = this.props.item;
    const columns = this.props.columns.filter(column => column.visible);

    const TDs = [];
    if (this.props.withCheckBoxes) {
      TDs.push(<td key={"td_checkBox_itemId_"+item.id}><input type="checkbox" name="rowCheck" onChange={this.onChangeCheckBox} checked={this.props.selected}/></td>);
    }

    for (let i=0; i<columns.length; i++){       
      let text = '';
      if (columns[i].format) {
        text = columns[i].format( item[columns[i].field] ); 
      } else { 
        if (item[columns[i].field]) text = item[columns[i].field].toString(); 
      } 
      TDs.push(<td key={"td_itemId_"+item.id+'_col_'+i} style={columns[i].style} >{ text }</td>);
    }
    
    return (      
      <tr key={item.id} className={this.props.selected?'rowSel':''} onClick={this.rowClick}>
        {TDs}
      </tr>          
    );
  }
}

const mapStateToProps = (state) => { 
  return {
    columns: state.columns,
    items: state.items,
    withCheckBoxes: state.settings.withCheckBoxes,    
    shiftClickItemId: state.settings.shiftClickItemId    
  }
}

export default connect(mapStateToProps)(RowContent)