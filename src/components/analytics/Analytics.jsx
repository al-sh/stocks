import React from 'react';
import { connect } from 'react-redux';

class Analytics extends React.Component { 
  state = { 
    id:  this.props.editItem?this.props.editItem.id:0, 
    name:  this.props.editItem?this.props.editItem.name:"Название",   
    isActive: this.props.editItem?this.props.editItem.isActive:false
  }   

  close  = (p) => {  
    this.props.dispatch({
      type: 'TOGGLE_ITEM_BLOCK',
      showAddEditBlock: false
    });
  }
  
  onNameChange = (e) => {    
    this.setState({name: e.target.value});   
  }
  
  onStatusChange = (e) => {
    console.log(e.target.value);
    this.setState({isActive: e.target.checked});   
  }

  componentDidMount() {   
    this.props.dispatch({ //hide row toolbar
      type: 'TOGGLE_ROW_TOOLBAR',
      rowId: null
    });
  }

  render() {   
    let item = {};

    if (this.props.editItem) {  
      item = this.props.editItem;  
    } else {
      item.name = 'Название1';    
      item.isActive = false;
    }     

    return (
      <div className="itemBlock">
        <button onClick={this.close} className="toolbarButton" style={{float: 'right', height: '25px', width: '25px'}}>X</button>
        <div>
          <span className="itemBlock__label">Название:</span>
          <input id="fio" onChange={this.onNameChange} type="text" defaultValue={item.name} />
        </div>        
        <div>
          <span className="itemBlock__label">Активный</span>
          <input id="status" onChange={this.onStatusChange} type="checkbox" defaultChecked={item.isActive} />           
        </div>          
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {   
    items: state.items,
    editItem: state.settings.editItem
  }
}

export default connect(mapStateToProps)(Analytics)