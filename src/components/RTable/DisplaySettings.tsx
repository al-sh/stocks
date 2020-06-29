import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { IState, IColumn } from '../../store/interfaces';
import { displaySettingsSlice } from '../../store/reducers/DisplaySettings'

const mapState = (state: IState) => {
  return {
    columns: state.columns,
    rowsinPage: state.settings.rowsinPage,
    withCheckBoxes: state.settings.withCheckBoxes
  }
}

const mapDispatch = (dispatch: any) => {
  return {
    dispatch: (p: any) => { dispatch(p) },
    toggle: (payload: boolean) => displaySettingsSlice.actions.toggle(payload)
  }
}

const connector = connect(mapState, mapDispatch);
type IPropsFromRedux = ConnectedProps<typeof connector>;

class DisplaySettings extends React.Component<IPropsFromRedux, IState> {
  state: any = {
    columns: this.props.columns,
    rowsinPage: this.props.rowsinPage,
    withCheckBoxes: this.props.withCheckBoxes
  }

  save = () => {
    this.props.dispatch({
      type: 'DISPLAYSETTINGS.SAVE',
      columns: this.state.columns,
      rowsinPage: this.state.rowsinPage,
      withCheckBoxes: this.state.withCheckBoxes
    });
  }

  close = () => {
    this.props.dispatch(this.props.toggle(false));
  }

  onVisibleChange = (e: any) => {
    let columns: IColumn[] = Object.assign([], this.state.columns);
    columns[e.target.getAttribute('data-colnumber')].visible = e.target.checked;
    this.setState({ columns: columns });
  }

  onNeedCheckBoxesChange = (e: any) => {
    this.setState({ withCheckBoxes: e.target.checked } as any);
  }

  onRowsPerPageChange = (e: any) => {
    const value = parseInt(e.target.value);
    const maxValue = parseInt(e.target.getAttribute('max'));

    if (value > maxValue) {
      e.target.value = maxValue;
    }
    this.setState({ rowsinPage: value } as any);
  }

  componentDidMount() {
    this.props.dispatch({ //hide row toolbar
      type: 'TOGGLE_ROW_TOOLBAR',
      rowId: null
    });
  }

  render() {
    const columns = this.props.columns;
    let columnSettings = [];
    for (let i = 0; i < columns.length; i++) {
      columnSettings.push(
        <div key={"columnSettings_" + i}>
          <label htmlFor={"columnSettingsInp_" + i}>{columns[i].text}</label>
          <input id={"columnSettingsInp_" + i} data-colnumber={i} data-field={columns[i].field} onChange={this.onVisibleChange} type="checkbox" defaultChecked={columns[i].visible} />
        </div>
      );
    }

    return (
      <div className="itemBlock">
        <button onClick={this.close} className="toolbarButton" style={{ float: 'right', height: '25px', width: '25px' }}>X</button>
        <div>Настройка отображения полей</div>
        {columnSettings}
        <div>
          <span>Количество строк на странице:</span>
          <input type="number" min={1} max={100} name="rowsPerPage" onChange={this.onRowsPerPageChange} defaultValue={this.props.rowsinPage}
            style={{ marginLeft: '10px', width: '50px' }} />
        </div>
        <div>
          <label htmlFor={'inp_needCheckBoxes'}>Чекбоксы</label>
          <input id={'inp_needCheckBoxes'} type="checkbox" onChange={this.onNeedCheckBoxesChange} defaultChecked={this.props.withCheckBoxes} />
        </div>
        <div>
          <button onClick={this.save} className="toolbarButton" style={{ marginTop: '25px' }}>Сохранить</button>
        </div>
      </div>
    );
  }
}

export default connector(DisplaySettings)