/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Menu } from "semantic-ui-react";

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          link
          href="/"
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="picks"
          active={activeItem === "picks"}
          onClick={this.handleItemClick}
          link
          href="/picks"
        >
          My Picks
        </Menu.Item>

        <Menu.Item
          name="teams"
          active={activeItem === "teams"}
          onClick={this.handleItemClick}
          link
          href="/teams"
        >
          DB Testing
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavMenu;
