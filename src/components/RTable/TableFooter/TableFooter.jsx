import React from 'react';
import PagerItem from './PagerItem';
import PagerFiller from './PagerFiller';

//Redux
import { connect } from 'react-redux';

class TableFooter extends React.Component {  
  render() {    
    const rowsinPage = this.props.rowsinPage;
    const rowsCount = this.props.rowsCount;
    const activePage = this.props.activePage;

    const scPages = [];  
    let pagesCount = ((rowsCount - rowsCount % rowsinPage) / rowsinPage);  
    if (rowsCount % rowsinPage > 0) {
      pagesCount = pagesCount + 1;
    }
    
    const nearPagesCount = 2;
    for(let i=0; i < pagesCount; i++){ 
      let currentPage = {};
      currentPage.pageNum = i; 
      let pageItem = <PagerItem key={'pg'+currentPage.pageNum} data={currentPage} isActive={activePage===i?true:false} />;

      if (pagesCount>10) { //показываем только часть страниц
        if ( (i===0) && (i < activePage - nearPagesCount) ){//первая страница
          scPages.push(pageItem);
          if (activePage - nearPagesCount !== 1) {  //чтобы не отображать филлер, если следующая страница - вторая
            scPages.push(<PagerFiller key={'filler'+currentPage.pageNum} />);
          }         
        }       
        if ( (i >= activePage - nearPagesCount) && (i <= activePage + nearPagesCount) ) {
          scPages.push(pageItem);
        }
        
        if ( (i===pagesCount-1) && (i > activePage + nearPagesCount) ){//последняя страница
          if (activePage + nearPagesCount !== pagesCount-2){ //чтобы не отображать филлер, если предыдущая страница - предпоследняя
            scPages.push(<PagerFiller key={'filler'+currentPage.pageNum} />);
          }          
          scPages.push(pageItem);
        }        
      } else {
        scPages.push(pageItem);
      }      
    }

    //return scPages;
    return <div className="pageBlock">{scPages}</div>     
  } 
}

const mapStateToProps = (state) => {
  return {
    activePage: state.settings.activePage,
    rowsinPage: state.settings.rowsinPage,
    rowsCount: state.items.length
  }
}

//export default TableFooter;
export default connect(mapStateToProps)(TableFooter)