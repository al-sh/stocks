import React from 'react';

//Redux
import { connect } from 'react-redux';

class PagerItem extends React.Component {
  goToPage  = (page) => {       
    this.props.dispatch({
      type: 'GO_TO_PAGE',
      page: this.props.data.pageNum
    });
  }

  render() {
    const data = this.props.data;
   
    return (
      <span onClick={this.goToPage} className={this.props.isActive?'activePage':''}>
        {data.pageNum+1}
      </span>
    );
  }
}

export default connect(null, null)(PagerItem)