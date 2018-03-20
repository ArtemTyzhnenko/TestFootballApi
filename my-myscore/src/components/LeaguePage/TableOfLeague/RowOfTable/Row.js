import React, {Component} from 'react';
import {Link} from  'react-router-dom'
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import {fetchingTeamInfoRequest} from '../../../../sagas/TeamInfo/actions'

class Row extends Component  {

  onTeamLinkClick = (url, teamName, teamLogo) => () =>{
    const {actions, item} = this.props;
    console.log(item.teamName);
    actions.fetchingTeamInfoRequest(url, teamName, teamLogo);
  };

  render(){
    const {item} = this.props;
    return(
    <tr>
      <td>{item.position}</td>
      <td><img src={item.crestURI} alt=""/></td>
      <td>
        <Link to='/teamInfoPage' onClick={this.onTeamLinkClick(item.teamInfoLink,
         item.teamName, item.crestURI)}>{item.teamName}</Link>
      </td>
      <td>{item.playedGames}</td>
      <td>{item.goals}:{item.goalsAgainst}</td>
      <td>{item.points}</td>
    </tr>
    )
  }
};

Row.propTypes = {
  item: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        fetchingTeamInfoRequest,
      },
      dispatch
    ),
  }
};

const mapStateToProps = state =>{
  return {
    leagueTable: state.leagueTable,
  } 
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(Row));