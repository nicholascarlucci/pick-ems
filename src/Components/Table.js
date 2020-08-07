import React from "react";
import { Table } from "semantic-ui-react";


class StandingsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {teams: []};
  }

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:3001");
      const json = await response.json();
      this.setState({teams: json});
    } catch(error) {
      console.log(error);
    }
    
  }

  render(){
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Team Name</Table.HeaderCell>
            <Table.HeaderCell>Wins</Table.HeaderCell>
            <Table.HeaderCell>Losses</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.teams.map((team, index) => (
            <Table.Row>
              <Table.Cell>{team.name}</Table.Cell>
              <Table.Cell>{team.wins}</Table.Cell>
              <Table.Cell>{team.losses}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

export default StandingsTable;
