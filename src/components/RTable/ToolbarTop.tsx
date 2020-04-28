import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { IState } from '../../store/interfaces';

const mapState = (state: IState) => {
  return {
    currentSection: state.currentSection,
    withCheckBoxes: state.settings.withCheckBoxes
  }
}

const mapDispatch = (dispatch: any) => {
  return {
    dispatch: (p: any) => { dispatch(p) }
  }
}

const connector = connect(mapState, mapDispatch);
type IPropsFromRedux = ConnectedProps<typeof connector>

class ToolbarTop extends React.Component<IPropsFromRedux, IState> {
  deleteSelectedItems = () => {
    this.props.dispatch({
      type: 'DELETE_SELECTED_ITEMS'
    });
  }

  showItemBlock = () => {
    this.props.dispatch({
      type: 'TOGGLE_ITEM_BLOCK',
      showAddEditBlock: true
    });
  }

  showDisplaySettings = () => {
    this.props.dispatch({
      type: 'DISPLAYSETTINGS.TOGGLE',
      showDisplaySettings: true
    });
  }

  showTransfersAnalytics = () => {
    this.props.dispatch({
      type: 'ANALYTICS.TRANSFERS',
      showDisplaySettings: true,
      discountRate: 6
    });
  }

  render() {
    const buttons = [];
    if (this.props.withCheckBoxes){
      buttons.push(<button key="btnDel" onClick={this.deleteSelectedItems} className="toolbarButton">Удалить</button>);
    }
    //buttons.push(<button key="btnAdd" onClick={this.showItemBlock} className="toolbarButton">Добавить</button>);
    buttons.push(<button key="btnSettings" onClick={this.showDisplaySettings} className="toolbarButton">Настройка</button>);
    if (this.props.currentSection === 'transfers') {
      buttons.push(<button key="transfers_Analytics" onClick={this.showTransfersAnalytics} className="toolbarButton">Аналитика</button>);
    }

    return (
      <div className="ToolbarTop">
        {buttons}
      </div>
    );
  }
}

export default connector(ToolbarTop)