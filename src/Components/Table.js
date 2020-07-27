import React from "react";
import { Icon, Menu, Table } from "semantic-ui-react";

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
      <Table.Row>
        <Table.Cell>ButtMunchers</Table.Cell>
        <Table.Cell>4</Table.Cell>
        <Table.Cell>3</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>SquiddlyDiddlies</Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>5</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Foosballers</Table.Cell>
        <Table.Cell>5</Table.Cell>
        <Table.Cell>2</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan="3">
          <Menu floated="right" pagination>
            <Menu.Item as="a" icon>
              <Icon name="chevron left" />
            </Menu.Item>
            <Menu.Item as="a">1</Menu.Item>
            <Menu.Item as="a">2</Menu.Item>
            <Menu.Item as="a">3</Menu.Item>
            <Menu.Item as="a">4</Menu.Item>
            <Menu.Item as="a" icon>
              <Icon name="chevron right" />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);

export default StandingsTable;
