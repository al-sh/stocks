import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {actSwitchToSection} from '../../store/actions' 
import { IState } from '../../store/interfaces'

const mapState = (state: IState) => {
  return {  
    currentSection: state.currentSection
  }
}

const mapDispatch = null;

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

interface ReduxProps {
  dispatch: any
}

interface MainMenuProps extends ReduxProps {
  currentSection: string
}

class MainMenu extends React.Component<MainMenuProps, IState> {
  testDataWarnText = 'Отсутствует подключение к БД, показаны тестовые данные';

  switchToTransfers = async (e: any) => {
    actSwitchToSection('transfers', this.props.dispatch);
  }

  switchToPortfolios = async (e: any) => {
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

export default connector(MainMenu)