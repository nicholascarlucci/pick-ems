import React from "react";
import { Menu } from "semantic-ui-react";

export default class MenuExampleBasic extends React.Component {
  state = {};

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name, routePath: "/" + name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          link={true}
          href={"/"}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="picks"
          active={activeItem === "picks"}
          onClick={this.handleItemClick}
          link={true}
          href={"/picks"}
        >
          My Picks
        </Menu.Item>

        <Menu.Item
          name="teams"
          active={activeItem === "teams"}
          onClick={this.handleItemClick}
          link={true}
          href={"/teams"}
        >
          DB Testing
        </Menu.Item>
      </Menu>
    );
  }
}
