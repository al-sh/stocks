import React from 'react';
import { connect } from 'react-redux';

class ToolbarRow extends React.Component {

  delete  = (p) => {   
    this.props.dispatch({
      type: 'ITEM.DELETE',
      itemId: this.props.item.id
    });
  }

  edit  = (p) => {   
    this.props.dispatch({
      type: 'TOGGLE_ITEM_BLOCK',
      showAddEditBlock: true,
      editItem: this.props.item
    });
  }

  componentDidMount() {   
    this.props.dispatch({
      type: 'TOGGLE_ITEM_BLOCK',
      showAddEditBlock: false
    });
  }

  render() {
    return (
      <tr>
        <td colSpan={this.props.columns.filter(col => col.visible).length}>
          <button onClick={this.delete} className="toolbarButton">Удалить</button>
          <button onClick={this.edit} className="toolbarButton">Редактировать</button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {  
    columns: state.columns
  }
}

export default connect(mapStateToProps, null)(ToolbarRow)