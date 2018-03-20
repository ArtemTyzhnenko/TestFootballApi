import React, { Component }from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GameTable from './GamesTable/GameTable'
import './TeamInfoPageStyle.css'
import  { Link } from 'react-router-dom'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TeamInfoPage extends Component {
  state = {
    finished: true,
  };
  onClickInput = () => (e) => {
    console.log(e.target.value);
    this.setState({finished: e.target.value})
  };

  render() {
    const {games, teamName, teamLogo, isFetching} = this.props.teamInfo;
    return (
      <div>
        <header className="TeamInfo">
          <h2><Link to="/home">My-Myscore</Link></h2>
          <img src={teamLogo} alt=""/>
          <h1>{teamName}</h1>
        </header>
        <main>
          {isFetching ?
            <p>Loading...</p> :
            <Tabs>
              <TabList>
                <Tab>Results</Tab>
                <Tab>The calendar</Tab>
              </TabList>

              <TabPanel>
                <table>
                  <tbody>
                  { games.filter((item) => item.status === 'FINISHED').map((item) => {
                    return <GameTable item={item}
                                      teamName={teamName}
                    />
                  }).reverse()
                  }
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <table>
                  <tbody>
                  {games.filter((item) => item.status === 'SCHEDULED').map((item) => {
                    return <GameTable item={item}
                                      teamName={teamName}
                    />
                  })
                  }
                  </tbody>
                </table>
              </TabPanel>
            </Tabs>

          }
        </main>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    teamInfo: state.teamInfo,
  }
};

export default withRouter(connect(mapStateToProps, null)(TeamInfoPage));