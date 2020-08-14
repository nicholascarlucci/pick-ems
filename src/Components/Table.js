/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class StandingsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { teams: [] };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:3001');
      const json = await response.json();
      this.setState({ teams: json });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  render() {
    return (
      <table className="standings-table">
        <tr>
          <th>Team Name</th>
          <th>Wins</th>
          <th>Losses</th>
        </tr>
        {this.state.teams.map((team) => (
          <tr key={team.id}>
            <td>{team.name}</td>
            <td>{team.wins}</td>
            <td>{team.losses}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default StandingsTable;
