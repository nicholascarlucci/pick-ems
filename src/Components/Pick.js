/* eslint-disable react/jsx-filename-extension */
import React from "react";

export default class Pick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      title: "NY Giants",
      record: {
        wins: 5,
        losses: 11,
      },
      /*state properties*/
      home: false,
      iconAlt: "NY Giants Logo",
    };
  }

  render() {
    return (
      <div className="pick-container">
        <div
          className={
            this.props.selected ? "pick-box selected-pick" : "pick-box"
          }
          onClick={this.props.handleClick}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              float: "left",
            }}
          >
            <img
              src="https://content.sportslogos.net/logos/7/166/thumbs/919.gif"
              alt={this.state.iconAlt}
              style={{ width: "50px" }}
            />
          </div>
          <div>
            <div>
              <span id="teamTitle">{this.state.title}</span>
              <span id="teamRecord">{`(${this.state.record.wins}-${this.state.record.losses})`}</span>
            </div>
            <div>
              <span id="homeAway">{this.state.home ? "Home" : "Away"}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
