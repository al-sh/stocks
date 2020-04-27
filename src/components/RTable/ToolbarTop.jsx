import React from 'react';
import { connect } from 'react-redux';

class ToolbarTop extends React.Component {
  deleteSelectedItems = (e) => {    
    this.props.dispatch({
      type: 'DELETE_SELECTED_ITEMS'
    });
  }

  showItemBlock = (e) => {
    this.props.dispatch({
      type: 'TOGGLE_ITEM_BLOCK',
      showAddEditBlock: true
    });
  }

  showDisplaySettings = (e) => {
    this.props.dispatch({
      type: 'DISPLAYSETTINGS.TOGGLE',
      showDisplaySettings: true
    });
  }

  showTransfersAnalytics = (e) => {
    this.props.dispatch({
      type: 'ANALYTICS.TRANSFERS',
      showDisplaySettings: true,
      discountRate: 6
    });
  }
  
  render() {   
    const buttons = [];
    buttons.push( <button key="btnDel" onClick={this.deleteSelectedItems} className="toolbarButton">Удалить</button> );
    buttons.push( <button key="btnAdd" onClick={this.showItemBlock} className="toolbarButton">Добавить</button> );
    buttons.push( <button key="btnSettings" onClick={this.showDisplaySettings} className="toolbarButton">Настройка</button> );
    if (this.props.currentSection==='transfers') {
      buttons.push( <button key="transfers_Analytics" onClick={this.showTransfersAnalytics} className="toolbarButton">Аналитика</button> );
    }

    return (
      <div className="ToolbarTop">        
        {buttons}
      </div>      
    );
  }
}

const mapStateToProps = (state) => {
  return {  
    currentSection: state.currentSection
  }
}

export default connect(mapStateToProps, null)(ToolbarTop)