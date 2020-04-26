import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { toggleVisualSort } from '../../../store/actions';
import { IColumn, IState } from '../../../store/interfaces'

const mapState = (state: IState) => {
  return {  
    currentSection: state.currentSection
  }
}

const mapDispatch = (dispatch: any) => {
  return {
    toggleSortParams: (field: string, sortType: string, ctrlPressed: boolean) => {
      dispatch( toggleVisualSort(field, sortType, ctrlPressed) )
    }
  }
}

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

interface HeadItemProps extends PropsFromRedux, IColumn {
  headerStyle?: any
  sortIndex?: number,  
  sortOrderClassName?: string,
}

class HeadItem extends React.Component<HeadItemProps, IState> {  
  sort  = (event: any) => {  
    const sortType = this.props.type?this.props.type:'default';
    const field = this.props.field; 
    const ctrlPressed = event.ctrlKey;
    this.props.toggleSortParams(field, sortType, ctrlPressed);
  }

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


export default connector(HeadItem)