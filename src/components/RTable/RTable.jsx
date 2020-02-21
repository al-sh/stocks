import React from 'react';
import { connect } from 'react-redux';

import ToolbarTop from './ToolbarTop';
import TableBody from './TableBody/TableBody';
import TableFooter from './TableFooter/TableFooter';
import TableHeader from './TableHeader/TableHeader';

//custom components
import ItemBlock from './ItemBlock';
import DisplaySettings from './DisplaySettings';

class Rscroller extends React.Component { 
  render() {     
    return (
      <div style={{display: 'inline-block', position: 'relative' }}>
        { this.props.showAddEditBlock ? <ItemBlock /> : null }
        { this.props.showDisplaySettings ? <DisplaySettings /> : null }
        <div className="rScroller">
          <div className="rScrollerHeader">
            <ToolbarTop />
          </div>          
          <table cellSpacing="0">  
            <TableHeader />
            <TableBody />            
          </table>            
          <TableFooter />
        </div>        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {  
    showAddEditBlock: state.settings.showAddEditBlock,
    showDisplaySettings: state.settings.showDisplaySettings
  }
}

export default connect(
  mapStateToProps, //mapStateToProps
  null //mapDispatchToProps
)(Rscroller)