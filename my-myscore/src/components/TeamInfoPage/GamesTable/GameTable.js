import React from 'react';

const GameTable = ({item})=>(
    <tr>
      <td className="teamName">{item.result.goalsHomeTeam > item.result.goalsAwayTeam ? <b>{item.homeTeamName}</b> : item.homeTeamName}</td>
      <td className="score">{item.result.goalsHomeTeam}
        -{item.result.goalsAwayTeam}</td>
      <td className="teamName">{item.result.goalsHomeTeam < item.result.goalsAwayTeam ? <b>{item.awayTeamName}</b>: item.awayTeamName} </td>
    </tr>
);

export default GameTable;