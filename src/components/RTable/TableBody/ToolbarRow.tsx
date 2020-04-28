import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { IState, IColumn } from '../../../store/interfaces';

const mapState = (state: IState) => {
  return {
    columns: state.columns
  }
}

const mapDispatch = (dispatch: any) => {
  return { dispatch: (action: any) => { dispatch(action) } }
}

const connector = connect(mapState, mapDispatch);
type IPropsFromRedux = ConnectedProps<typeof connector>

interface ToolbarRowProps extends IPropsFromRedux {
  item: any,
  selected?: boolean
}

class ToolbarRow extends React.Component<ToolbarRowProps, IState> {

  delete = () => {
    this.props.dispatch({
      type: 'ITEM.DELETE',
      itemId: this.props.item.id
    });
  }

  edit = () => {
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
        <td colSpan={this.props.columns.filter((col: IColumn) => col.visible).length}>
          <button onClick={this.delete} className="toolbarButton">Удалить</button>
          <button onClick={this.edit} className="toolbarButton">Редактировать</button>
        </td>
      </tr>
    );
  }
}

export default connector(ToolbarRow)