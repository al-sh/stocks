import React from 'react';
import { connect } from 'react-redux';
import {getDataFromBack} from '../functions'; //may be need to move to reducers
import './Menu.css'

class ToolbarTop extends React.Component {
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

  deleteSelectedItems = (e) => {    
    this.props.dispatch({
      type: 'DELETE_SELECTED_ITEMS'
    });
  }

  showDisplaySettings = (e) => {
    this.props.dispatch({
      type: 'DISPLAYSETTINGS.TOGGLE',
      showDisplaySettings: true
    });
  }

  showItemBlock = (e) => {
    this.props.dispatch({
      type: 'TOGGLE_ITEM_BLOCK',
      showAddEditBlock: true
    });
  }

  updateItems = async (e) => {   
    const newItems = await getDataFromBack('/getportfolios/');
    if (!newItems) {
      console.warn('Отсутствует подключение к БД, обновление не произведено');
      return;     
    } 
    this.props.dispatch({
      type: 'ITEMS.UPDATE',
      items: newItems
    });
  }
  
  render() {   
    return (
      <div className="MainMenu">
        <button onClick={this.switchToPortfolios} className="MainMenu__Button">Портфели</button>
        <button onClick={this.switchToTransfers} className="MainMenu__Button">Зачисления</button>        
        <button onClick={this.showChart} className="MainMenu__Button">Диаграмма портфелей</button>
      </div>      
    );
  }
}

export default connect(null, null)(ToolbarTop)