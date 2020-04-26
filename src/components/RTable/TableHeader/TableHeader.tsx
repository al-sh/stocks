import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import HeadItem from './HeadItem';
import { getPageRows } from '../../functions';
import { IColumn, IState } from '../../../store/interfaces';

const mapState = (state: IState) => {
  return {
    columns: state.columns,
    items: state.items,
    page: state.settings.activePage,
    withCheckBoxes: state.settings.withCheckBoxes,
    rowsinPage: state.settings.rowsinPage,
    selectedItems: state.selectedItems,
    sortParams: state.sortParams
  }
}

const mapDispatch = (dispatch: any) => {
  return {
    dispatch: (p: any) => { 
      dispatch(p) 
    }
  }
}

const connector = connect(mapState, mapDispatch);
type IPropsFromRedux = ConnectedProps<typeof connector>

interface ITableHeaderProps extends IPropsFromRedux {
  items: any
  page: number,
  rowsinPage: number,
}

class TableHeader extends React.Component<ITableHeaderProps, IState>{
  onChangeCheckBox = (event: any) => {
    this.props.dispatch({
      type: 'TOGGLE_ACTIVE_PAGE_ROW_SELECTION',
      selected: event.target.checked
    });
  }

  isAllRowsSelectedInPage = () => {
    const items = this.props.items;
    const activePage = this.props.page;
    const rowsinPage = this.props.rowsinPage;

    const activePageRows = getPageRows(items, activePage, rowsinPage);

    let allRowsSelected = true;
    for (let i = 0; i < activePageRows.length; i++) {
      if (this.props.selectedItems.indexOf(activePageRows[i].id) === -1) {
        allRowsSelected = false;
      }
    }

    if (activePageRows.length === 0) { allRowsSelected = false; }

    return allRowsSelected;
  }

  render() {
    //console.log('tableHeader - render');
    const sortParams = this.props.sortParams;
    const columns: IColumn[] = this.props.columns.filter((column: IColumn) => column.visible);

    const cols = [];
    const headItems = [];

    if (this.props.withCheckBoxes) {
      cols.push(<col key={"col_cb"} width="50" />);
      headItems.push(<td key={"headItem_cb"}><input type="checkbox" name="rowCheck" onChange={this.onChangeCheckBox} checked={this.isAllRowsSelectedInPage()} /></td>);
    }

    for (let i = 0; i < columns.length; i++) {
      let sortIndex, sortOrderClassName;
      if (sortParams.length > 0) {
        for (let j = 0; j < sortParams.length; j++) {
          if (sortParams[j].field === columns[i].field) {
            sortIndex = j + 1;
            sortOrderClassName = sortParams[j].ascOrder ? 'sortArrowUp' : 'sortArrowDown';
          }
        }

      }
      cols.push(<col key={"col_" + i} width={columns[i].width} />);
      headItems.push(<HeadItem key={"headItem_" + i} field={columns[i].field} type={columns[i].type} visible={columns[i].visible}
        headerClassName={columns[i].headerClassName} headerStyle={columns[i].headerStyle}
        text={columns[i].text} sortIndex={sortIndex} sortOrderClassName={sortOrderClassName} />);
    }

    return (
      <React.Fragment>
        <colgroup>
          {cols}
        </colgroup>
        <thead>
          <tr>
            {headItems}
          </tr>
        </thead>
      </React.Fragment>
    )
  }
}

export default connector(TableHeader)