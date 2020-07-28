import React from "react";
import { Icon, Menu, Table } from "semantic-ui-react";

const teams = [
  {
    name: "ButtMunchers",
    wins: 4,
    losses: 3,
  },
  {
    name: "SquiddlyDiddlies",
    wins: 2,
    losses: 5,
  },
  {
    name: "Foosballers",
    wins: 5,
    losses: 2,
  },
  {
    name: "Brad and Nick's Ambiguously Gay Duo",
    wins: 7,
    losses: 0,
  },
];

const StandingsTable = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Team Name</Table.HeaderCell>
        <Table.HeaderCell>Wins</Table.HeaderCell>
        <Table.HeaderCell>Losses</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {teams.map((team, index) => (
        <Table.Row>
          <Table.Cell>{team.name}</Table.Cell>
          <Table.Cell>{team.wins}</Table.Cell>
          <Table.Cell>{team.losses}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default StandingsTable;
