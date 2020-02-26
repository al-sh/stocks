import React from 'react';
import { connect } from 'react-redux';
import {actSwitchToSection} from '../../store/actions' 

class MainMenu extends React.Component {
  testDataWarnText = 'Отсутствует подключение к БД, показаны тестовые данные';

  switchToTransfers = async (e) => {
    actSwitchToSection('transfers', this.props.dispatch);
  }

  switchToPortfolios = async (e) => {
    actSwitchToSection('portfolios', this.props.dispatch);
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