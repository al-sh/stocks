import React from 'react';
import { connect } from 'react-redux';
import RowContent from './RowContent';
import ToolbarRow from './ToolbarRow';

class ScrollerRow extends React.Component { 
  render() {
    const item = this.props.data;
    
    return (
      <React.Fragment> 
        <RowContent key={item.id} item={item} selected={this.props.selected} /> 
        { this.props.needShowToolbar ? <ToolbarRow item={item} /> : null }
      </React.Fragment>    
    );
  }
}

export default connect(null)(ScrollerRow)