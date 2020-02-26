import React from 'react';
import { connect } from 'react-redux';
import {getDataFromBack} from '../functions'; //may be need to move to reducers
import { testPortfolios, testTransfers } from '../../store/testData'
import {actSwitchToPortfolios, actSwitchToTransfers} from '../../store/actions' 

class MainMenu extends React.Component {
  testDataWarnText = 'Отсутствует подключение к БД, показаны тестовые данные';

  switchToTransfers = async (e) => {
    actSwitchToTransfers(this.props.dispatch);
  }

  switchToPortfolios = async (e) => {
    actSwitchToPortfolios(this.props.dispatch);
  }
  
  render() {
    return (
      <div className="MainMenu">
        <span onClick={this.switchToTransfers} className={this.props.currentSection==='transfers'? "MainMenu__Item MainMenu__Item-active" : "MainMenu__Item" }>Зачисления</span>
        <span onClick={this.switchToPortfolios} className={this.props.currentSection==='portfolios'? "MainMenu__Item MainMenu__Item-active" : "MainMenu__Item" }>Портфели</span>       
      </div>      
    );
  }
}

const mapStateToProps = (state) => {
  return {  
    currentSection: state.currentSection
  }
}

export default connect(mapStateToProps, null)(MainMenu)