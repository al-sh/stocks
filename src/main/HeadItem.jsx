import React from 'react';

//Redux
import { connect } from 'react-redux';
import { toggleVisualSort } from '../store/actions';

class HeadItem extends React.Component {  
  sort  = (event) => {  
    const sortType = this.props.type?this.props.type:'default';
    const field = this.props.field; 

    /*this.props.dispatch({
      type: 'SORT.TOGGLE',
      field: field, 
      sortType: sortType, 
      ctrlPressed: event.ctrlKey
    });*/
    const ctrlPressed = event.ctrlKey;
    this.props.toggleSortParams(field, sortType, ctrlPressed);
  }

  //componentWillMount(){
    //console.log('componentWillMount', this.props.sortParams);
  //}

  /*shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate old props', this.props.sortIndex, 'nextProps:', nextProps.sortIndex);
    return true;
  }*/

  /*static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps props', props, 'state:', state);
  }*/

  //componentWillUpdate(nextProps, nextState){
    //console.log('componentWillUpdate old', this.props.sortParams, 'new:', nextProps.sortParams);
  //}

  render(){
    return (      
      <td className={this.props.headerClassName} style={this.props.headerStyle} >
        <span className="sortHeader" onClick={this.sort}>{this.props.text}</span>        
        <span className={this.props.sortOrderClassName}></span>
        <span className="sortNumber">{this.props.sortIndex}</span>
      </td>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSortParams: (field, sortType, ctrlPressed) => {
      dispatch( toggleVisualSort(field, sortType, ctrlPressed) )
    }
  }
}

//export default HeadItem;

export default connect(null, mapDispatchToProps)(HeadItem)