/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react';

const picks = [
  {
    home: 'The Washington Dandies',
    away: 'CreamPuffers',
  },
  {
    home: 'Foot Meet Balls',
    away: 'DAAAAA Bears',
  },
  {
    home: 'The ButtSniffers',
    away: 'The BlueBallers',
  },
  {
    home: 'The SweetTreats',
    away: 'The Green Bay Fudge Packers',
  },
];

const PicksTable = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Home Team</Table.HeaderCell>
        <Table.HeaderCell>Away Team</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {picks.map((pick) => (

        <Table.Row>
          <Table.Cell><button type="button" className="ui primary button">{pick.home}</button></Table.Cell>
          <Table.Cell><button type="button" className="ui button">{pick.away}</button></Table.Cell>
        </Table.Row>
      ))}

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

export default PicksTable;
