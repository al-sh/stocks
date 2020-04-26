import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Analytics from './components/analytics/Analytics';
import MainMenu from './components/menu/MainMenu';
import RTable from './components/RTable/RTable';
import Throbber from './components/common/throbber/Throbber';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MainMenu />
        {this.props.showThrobber ? <Throbber /> : <RTable />}
        {this.props.showAnalytics ? <Analytics /> : null }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showThrobber: state.showThrobber,
    showAnalytics: state.analytics.show
  }
}

export default connect(
  mapStateToProps,
  null //mapDispatchToProps
)(App)
