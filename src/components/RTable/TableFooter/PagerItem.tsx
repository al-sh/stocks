import React from 'react';
import { connect } from 'react-redux';

interface IProps {
  data: any;
  isActive: boolean;
  dispatch: any; //TODO: убрать
}

const mapDispatch = (dispatch: any) => {
  return {
    dispatch: (p: any) => { dispatch(p) }
  }
}

const PagerItem: React.FC<IProps> = (props) => {
  const { data, isActive } = props;

  const goToPage = () => {
    props.dispatch({
      type: 'GO_TO_PAGE',
      page: data.pageNum
    });
  }

  return (
    <span onClick={goToPage} className={isActive ? 'activePage' : ''}>
      {data.pageNum + 1}
    </span>
  );
}

export default connect(null, mapDispatch)(PagerItem)