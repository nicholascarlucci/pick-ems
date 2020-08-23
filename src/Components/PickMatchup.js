/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Pick from './Pick';

export default class PickMatchup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="matchup-container">
        <Pick />
        <Pick />
      </div>
    );
  }
}
