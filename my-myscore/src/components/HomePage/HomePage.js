import React, {Component} from 'react';
import {Link} from  'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import './HomePageStyle.css'
import { fetchingRequest } from '../../sagas/LeagueTable/actions';

class HomePage extends  Component {
  leaguesId = {
    PremierLeagueId: 445,
    ChampionshipId: 446,
    Ligue1Id: 450,
    BundesligaId: 452,
    LaLiga: 455,
    PrimeraDivision: 456,
  }; 
  onClickLink = (league, leagueName) => (e) =>{
    const {actions} = this.props;
    actions.fetchingRequest(league, leagueName);
  };
  render(){
    return(
      <div className="homePage">
        <header>
          <h1><Link to="/home">My-MyScore</Link></h1>
          <p>Choose league</p>
        </header>
        <main>
          <ul>
            <li>
              <Link to="/leaguePage" onClick={this.onClickLink(this.leaguesId.PremierLeagueId, 'Premier League')}>Premier League</Link>
            </li>
            <li>
              <Link to="/leaguePage" onClick={this.onClickLink(this.leaguesId.ChampionshipId, 'Championship')}>Championship</Link>
            </li>
            <li>
              <Link to="/leaguePage" onClick={this.onClickLink(this.leaguesId.Ligue1Id, 'Ligue 1')}>Ligue 1</Link>
            </li>
            <li>
              <Link to="/leaguePage" onClick={this.onClickLink(this.leaguesId.BundesligaId, 'Bundesliga')}>Bundesliga</Link>
            </li>
            <li>
              <Link to="/leaguePage" onClick={this.onClickLink(this.leaguesId.LaLiga, 'LaLiga')}>LaLiga</Link>
            </li>
            <li>
              <Link to="/leaguePage" onClick={this.onClickLink(this.leaguesId.PrimeraDivision, 'Primera Division')}>Primera Division</Link>
            </li>
          </ul>
        </main>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        fetchingRequest,
      },
      dispatch,
    ),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(HomePage));