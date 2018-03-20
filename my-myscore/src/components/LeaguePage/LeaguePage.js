import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Table from  './TableOfLeague/Table'
import './LeaguePageStyle.css'

class LeaguePage extends Component {  
  render() {
    const {table, isFetching, leagueName} = this.props.leagueTable;
    return (
      <div>
        <header className="leaguePage">
          <h1><Link to="/home">My-MyScore</Link></h1>
          <p>{leagueName}</p>
        </header>
        <main>
          {isFetching ?
            'Loading...' :
            <Table
              table={table}
            />
          }
        </main>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    leagueTable: state.leagueTable,
  }
};

export default withRouter(connect(mapStateToProps, null)(LeaguePage));
