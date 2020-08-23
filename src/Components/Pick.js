/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default class Pick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      title: 'NY Giants',
      record: {
        wins: 5,
        losses: 11,
      },
      home: false,
      iconAlt: 'NY Giants Logo',
    };
  }

  render() {
    return (
      <div class="pick-container">
        <div class="pick-box">
          <div
            style={{
              width: '50px',
              height: '50px',
              float: 'left',
            }}
          >
            <img id="teamIcon" alt={this.state.iconAlt} />
          </div>
          <div>
            <div>
              <span id="teamTitle">{this.state.title}</span>
              <span id="teamRecord">{`(${this.state.record.wins}-${this.state.record.losses})`}</span>
            </div>
            <div>
              <span id="homeAway">{this.state.home ? 'Home' : 'Away'}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
