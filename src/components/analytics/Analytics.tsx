import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { IState } from '../../store/interfaces';
import { maskAmount } from '../../components/functions';

const mapState = (state: IState) => {
  return {
    currentPortfolioValue: state.analytics.currentPortfolioValue,
    discountRate: state.analytics.discountRate,
    NPV: state.analytics.NPV,
    irr: state.analytics.irr
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
  currentPortfolioValue: any,
  discountRate: any,
  NPV: number,
  irr: number
}


class Analytics extends React.Component<IAnalyticsProps, IState>{
  close = () => {
    this.props.dispatch({
      type: 'ANALYTICS.TOGGLE',
      show: false
    });
  }

  onChangeCurrentPortfolioValue = (e: any) => {
    this.props.dispatch({
      type: 'ANALYTICS.TRANSFERS',
      currentPortfolioValue: e.target.value
    });
  }

  onChangeDiscountRate  = (e: any) => {
    console.log(e.target.value);

    this.props.dispatch({
      type: 'ANALYTICS.TRANSFERS',
      discountRate: e.target.value
    });
  }

  render() {

    return (
      <div>
        <div className="Analytics">
          <button onClick={this.close} className="toolbarButton" style={{ float: 'right', height: '25px', width: '25px' }}>X</button>
          <div>
            <span className="Analytics__Label">Ставка дисконтирования:</span>
            <input id="discountRateInput" onChange={this.onChangeDiscountRate} type="text" defaultValue={this.props.discountRate} />
          </div>
          <div>
            <span className="Analytics__Label">NPV:</span>
            <span>{this.props.NPV}</span>
          </div>
          <div>
            <span className="Analytics__Label">Оценка активов:</span>
            <input id="portfolioValueInput" onChange={this.onChangeCurrentPortfolioValue} type="text" defaultValue={this.props.currentPortfolioValue} />
          </div>
          <div>
            <span className="Analytics__Label">Доходность:</span>
            <span>{maskAmount(this.props.irr*100)}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default connector(Analytics)