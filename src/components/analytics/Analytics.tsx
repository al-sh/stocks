import React, { ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { IState } from '../../store/interfaces';

const mapState = (state: IState) => {
  return {
    currentPortfolioValue: state.analytics.currentPortfolioValue
  }
}

const mapDispatch = (dispatch: any) => {
  return {
    dispatch: (p: any) => { dispatch(p) }
  }
}

const connector = connect(mapState, mapDispatch);
type IPropsFromRedux = ConnectedProps<typeof connector>

interface IAnalyticsProps extends IPropsFromRedux {
  currentPortfolioValue: any
}


class Analytics extends React.Component<IAnalyticsProps, IState>{
  close = () => {
    this.props.dispatch({
      type: 'ANALYTICS.TOGGLE',
      show: false
    });
  }

  onChangeCurrentPortfolioValue = (e: any) => {
    console.log(e.target.value);
    /*
    this.props.dispatch({
      type: 'TOGGLE_ITEM_BLOCK',
      showAddEditBlock: false
    });*/
  }

  render() {

    return (
      <div>
        <div className="Analytics">
          <button onClick={this.close} className="toolbarButton" style={{ float: 'right', height: '25px', width: '25px' }}>X</button>
          <div>
            <span className="Analytics__Label">Оценка активов:</span>
            <input id="portfolioValueInput" onChange={this.onChangeCurrentPortfolioValue} type="text" defaultValue={this.props.currentPortfolioValue} />
          </div>
          <div>
            <span className="Analytics__Label">Доходность:</span>
            <span>{this.props.currentPortfolioValue}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default connector(Analytics)