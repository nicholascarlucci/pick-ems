/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Pick from "./Pick";

export default class PickMatchup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeSelected: false,
      awaySelected: false,
    };
  }

  handleHome = () => {
    this.setState({
      awaySelected: false,
      homeSelected: true,
    });
  };

  handleAway = () => {
    this.setState({
      awaySelected: true,
      homeSelected: false,
    });
  };

  render() {
    return (
      <div className="matchup-container">
        <Pick
          selected={this.state.homeSelected}
          handleClick={this.handleHome}
        />
        <Pick
          selected={this.state.awaySelected}
          handleClick={this.handleAway}
        />
      </div>
    );
  }
}
