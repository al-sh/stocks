import React from 'react';
import { connect } from 'react-redux';
import {getDataFromBack} from '../functions'; //may be need to move to reducers

class MainMenu extends React.Component {
  switchToTransfers = async (e) => {
    const newItems = await getDataFromBack('/transfers.getall');  //переделать на redux-thunk?
    if (!newItems) {
      console.warn('Отсутствует подключение к БД');
      return;     
    } 
    console.log(newItems);
    this.props.dispatch({
      type: 'SWITCH.TRANSERS',
      items: newItems
    });
  }

  switchToPortfolios = async (e) => {
    const newItems = await getDataFromBack('/getportfolios'); 
    if (!newItems) {
      console.warn('Отсутствует подключение к БД');
      return;     
    } 
    console.log(newItems);
    this.props.dispatch({
      type: 'SWITCH.PORTFOLIOS',
      items: newItems
    });
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